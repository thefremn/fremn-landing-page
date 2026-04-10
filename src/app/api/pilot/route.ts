import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // your mongo connection

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db("fremn");

    await db.collection("pilot_requests").insertOne({
      ...body,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save data" },
      { status: 500 }
    );
  }
}