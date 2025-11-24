import clientPromise from "@/lib/mongodb";

const RATE_LIMIT_WINDOW = 20000;
const MAX_REQUESTS = 3;

let ipRequests: Record<string, number[]> = {};

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    ipRequests[ip] = (ipRequests[ip] || []).filter(
      (t) => now - t < RATE_LIMIT_WINDOW
    );

    if (ipRequests[ip].length >= MAX_REQUESTS) {
      return Response.json(
        { success: false, error: "Rate limit exceeded" },
        { status: 429 }
      );
    }

    ipRequests[ip].push(now);

    // FIX: ENSURE CONTENT-TYPE IS JSON
    const contentType = req.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      return Response.json(
        { success: false, error: "Invalid content type" },
        { status: 400 }
      );
    }

    const body = await req.json();
    console.log("Received body:", body);

    const { name, email, message } = body;

    if (!name || !email || !message) {
      return Response.json(
        { success: false, error: "Missing fields" },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db("contact-us-form");

    const result = await db.collection("contacts").insertOne({
      name,
      email,
      message,
      ip,
      createdAt: new Date(),
    });

    console.log("Insert result:", result);

    return Response.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("API Contact Error:", err);
    return Response.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
