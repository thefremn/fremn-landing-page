"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/tooltip-card";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { useState } from "react";

/* -----------------------------
   DATA (single source of truth)
------------------------------ */

const heroData = {
  badge: "India-first · Dental clinics pilot",
  title: "AI Front Desk for Outpatient Clinics",
  description:
    "Voice + WhatsApp + Web automation so your clinic never misses an appointment, query, or follow-up — without adding headcount.",
  primaryCta: {
    label: "Book a Pilot Demo",
    href: "#contact",
  },
  secondaryCta: {
    label: "See how it works",
    href: "#products",
  },
  channels: ["Voice", "WhatsApp", "Web"],
};

const navItems = [
  { name: "Products", link: "#products" },
  { name: "Vision", link: "#vision" },
  { name: "Team", link: "#team" },
];

const products = [
  {
    name: "Solvia",
    tagline: "AI Automation for SMEs",
    description:
      "AI assistant for small and medium businesses that handles customer queries and routine operations across WhatsApp, voice, and web — helping teams operate faster without increasing headcount.",
    status: "Live",
    logo: "/solvia.png",
    statusVariant: "secondary" as const,
    link: "https://solvia.fremn.com/",
    useCases: [
      "Customer support automation",
      "Lead capture",
      "Follow-up workflows",
    ],
    cta: { label: "Visit Solvia", isExternal: true },
  },
  {
    name: "AI Receptionist",
    tagline: "Front Desk Automation for Clinics",
    description:
      "Handles patient appointment booking, reschedules, FAQs, and post-visit follow-ups over WhatsApp, voice, and your clinic's website — 24 / 7 without adding staff.",
    status: "Live",
    logo: "/fremn-logo.png", // you can change later
    statusVariant: "secondary" as const,
    link: "#contact",
    useCases: [
      "Appointment booking",
      "Patient FAQs",
      "Follow-up reminders",
    ],
    cta: { label: "Request a Pilot", isExternal: true},
  },
];

const teamMembers = [
  {
    name: "Chinton Dutta",
    role: "Product & Engineering",
    bio: "Focused on building practical AI products with strong technical foundations.",
    image: "/team/chinton.jpeg",
    linkedin: "https://www.linkedin.com/in/chinton-dutta/",
  },
  {
    name: "Amar Kumar Thakur",
    role: "Product & Engineering",
    bio: "Full-stack engineer working on scalable systems and frontend architecture.",
    image: "/team/amar.png",
    linkedin: "https://linkedin.com/in/amarkt",
  },
  {
    name: "Krishti Podder",
    role: "Marketing & Growth",
    bio: "Leads product storytelling, go-to-market strategy, and early traction.",
    image: "/team/krishti.jpeg",
    linkedin: "https://www.linkedin.com/in/krishtipodder",
  },
  {
    name: "Sheikh Sami Akhtar",
    role: "Operations",
    bio: "Ensures smooth execution and operational efficiency across the company.",
    image: "/team/sami.jpeg",
    linkedin: "https://www.linkedin.com/in/sheikh-sami-akhtar-03ab1335a/",
  },
];

const footerData = {
  brand: "FREMN",
  location: "Kolkata, India",
  email: "contact@fremn.com",
};

const SPECIALTY_OPTIONS = [
  "Dental",
  "General Practice",
  "Dermatology",
  "Orthopaedics",
  "Paediatrics",
  "Gynaecology",
  "ENT",
  "Ophthalmology",
  "Other",
];

/* -----------------------------
   FORM COMPONENTS
------------------------------ */

function PilotContactForm() {
  const [form, setForm] = useState({
    clinicName: "",
    specialty: "",
    contactName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
  const res = await fetch("/api/pilot", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });

  if (!res.ok) throw new Error("Failed to submit");

  setSubmitted(true);
} catch (error) {
  console.error("Submission error:", error);
}
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-12 text-center">
        <div className="text-4xl">🎉</div>
        <h3 className="text-2xl font-bold">Thanks! We'll reach out shortly.</h3>
        <p className="text-muted-foreground max-w-sm">
          We'll review your clinic details and schedule a pilot demo within 48
          hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
      {/* Row 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Clinic name <span className="text-red-500">*</span>
          </label>
          <input
            name="clinicName"
            required
            value={form.clinicName}
            onChange={handleChange}
            placeholder="e.g. Dutta Dental Care"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Specialty <span className="text-red-500">*</span>
          </label>
          <Select
  value={form.specialty}
  onValueChange={(value) =>
    setForm((prev) => ({ ...prev, specialty: value }))
  }
>
  <SelectTrigger className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm">
    <SelectValue placeholder="Select specialty" />
  </SelectTrigger>
  <SelectContent>
    {SPECIALTY_OPTIONS.map((s) => (
      <SelectItem key={s} value={s}>
        {s}
      </SelectItem>
    ))}
  </SelectContent>
</Select>
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Your name <span className="text-red-500">*</span>
          </label>
          <input
            name="contactName"
            required
            value={form.contactName}
            onChange={handleChange}
            placeholder="Dr. Arjun Sharma"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-medium text-foreground">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            required
            type="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="+91 98300 XXXXX"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
          />
        </div>
      </div>

      {/* Row 3 */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-foreground">
          Work email <span className="text-red-500">*</span>
        </label>
        <input
          name="email"
          required
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@yourclinic.com"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition"
        />
      </div>

      {/* Row 4 */}
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-medium text-foreground">
          Anything specific you want to automate?{" "}
          <span className="text-muted-foreground text-xs">(optional)</span>
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="e.g. We get 40+ missed calls a day and lose appointment bookings…"
          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="mt-2 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-400 hover:to-blue-600 transition-all duration-300 w-full md:w-auto self-start"
      >
        Request Pilot Demo →
      </Button>
    </form>
  );
}



/* -----------------------------
   PAGE
------------------------------ */

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50">
      <div className="relative bg-background text-foreground">
        {/* Dot-grid background */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />
        <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

        {/* ── NAVBAR ── */}
        <Navbar className="sticky top-0 z-50">
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="primary" href="#contact">
                Request a Pilot
              </NavbarButton>
            </div>
          </NavBody>

          <MobileNav className="sticky top-0 z-50">
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>
            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {navItems.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  <span className="block">{item.name}</span>
                </a>
              ))}
              <div className="flex w-full flex-col gap-4">
                <NavbarButton
                  onClick={() => setIsMobileMenuOpen(false)}
                  variant="primary"
                  className="w-full"
                  href="#contact"
                >
                  Request a Pilot
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        {/* ── HERO ── */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center text-center p-4 pt-0"
        >
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6">
              {/* Hero SVG */}
              <img
                src="/svg/Saly-44.svg"
                alt="AI Front Desk illustration"
                className="w-[260px] h-[260px] opacity-90 animate-float-soft"
              />

              {/* Vertical-stack badge pill */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-green-400 animate-pulse" />
                {heroData.badge}
              </span>

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
                {heroData.title}
              </h1>

              {/* Sub-heading */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                {heroData.description}
              </p>

              {/* Channel pills */}
              <div className="flex items-center gap-2 flex-wrap justify-center">
                {heroData.channels.map((ch) => (
                  <span
                    key={ch}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {ch}
                  </span>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-400 hover:to-blue-600 transition-all duration-300"
                >
                  <Link href={heroData.primaryCta.href}>
                    {heroData.primaryCta.label}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={heroData.secondaryCta.href}>
                    {heroData.secondaryCta.label}
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── PRODUCTS ── */}
        <section
          id="products"
          className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8"
        >
          <ScrollReveal className="w-full max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">Our Products</h2>
              <p className="mt-2 text-muted-foreground">
                Built specifically for outpatient clinics in India.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <HoverBorderGradient
                  key={`${product.name}-${index}`}
                  containerClassName="rounded-2xl w-full"
                  as="div"
                  className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-full"
                >
                  <Card className="flex flex-col border border-transparent bg-transparent rounded-2xl w-full">
                    <CardHeader>
                      <div className="flex justify-between items-start gap-4">
                        {/* Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800 flex items-center justify-center overflow-hidden">
                            {product.logo ? (
                              <img
                                src={product.logo}
                                alt={`${product.name} logo`}
                                className="w-8 h-8 object-contain"
                              />
                            ) : (
                              <span className="text-xl font-bold text-neutral-500 dark:text-neutral-400">
                                {product.name.charAt(0)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Title + badge */}
                        <div className="flex-grow min-w-0">
                          <div className="flex justify-between items-start gap-2">
                            <div className="text-left">
                              <CardTitle className="text-2xl">
                                <p className="dark:text-white text-black">
                                  {product.name}
                                </p>
                              </CardTitle>
                              <p className="text-sm text-muted-foreground mt-0.5">
                                {product.tagline}
                              </p>
                            </div>
                            <Badge
                              variant={product.statusVariant}
                              className="flex-shrink-0"
                            >
                              {product.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="flex-grow space-y-4">
                      <CardDescription className="text-left">
                        {product.description}
                      </CardDescription>

                      {/* Use-case pills */}
                      <div className="flex flex-wrap gap-2">
                        {product.useCases.map((uc) => (
                          <span
                            key={uc}
                            className="text-xs rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-muted-foreground"
                          >
                            {uc}
                          </span>
                        ))}
                      </div>

                    </CardContent>

                    <CardFooter className="justify-start">
                      {product.link ? (
                        <Button
                          variant="link"
                          asChild
                          className="p-0 h-auto text-primary"
                        >
                          <Link href={product.link}>{product.cta.label}</Link>
                        </Button>
                      ) : null}
                    </CardFooter>
                  </Card>
                </HoverBorderGradient>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* ── VISION ── */}
        <section
          id="vision"
          className="min-h-screen flex items-center justify-center p-4"
        >
          <ScrollReveal>
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-2xl md:text-3xl leading-relaxed">
                  <TextGenerateEffect words="We believe clinics should never miss a patient because of a missed call or delayed response. Our goal is to build AI receptionists that handle appointments, queries, and follow-ups seamlessly — so clinics can focus entirely on delivering care while operating with the efficiency of a fully staffed front desk." />
                </span>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-[260px] h-[260px] opacity-80 animate-float drop-shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <img
                    src="/svg/Saly-38.svg"
                    alt="Vision illustration"
                    className="w-[260px] h-[260px] opacity-80 animate-float-soft"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ── TEAM (unchanged) ── */}
        <section
          id="team"
          className="min-h-screen flex flex-col items-center justify-center text-center p-4"
        >
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold">Our Team</h2>

            <ul className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mt-16 max-w-4xl">
              {teamMembers.map((member) => (
                <li key={member.name} className="flex flex-col items-center">
                  <Tooltip
                    containerClassName="text-muted-foreground"
                    content={
                      <div className="w-64">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="aspect-square w-full rounded-sm object-cover"
                        />
                        <div className="my-4 flex flex-col text-left">
                          <p className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                            {member.name}
                          </p>
                          <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                            {member.bio}
                          </p>
                        </div>
                      </div>
                    }
                  >
                    <span className="cursor-pointer font-medium text-lg hover:text-foreground transition-colors">
                      {member.name}
                    </span>
                  </Tooltip>

                  <p className="text-muted-foreground text-sm mt-1">
                    {member.role}
                  </p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-xs font-semibold text-primary hover:underline"
                  >
                    LinkedIn
                  </a>
                </li>
              ))}
            </ul>

            <p className="mt-16 text-muted-foreground max-w-lg mx-auto">
              We met in college and have been building together for the past two
              years.
            </p>
          </ScrollReveal>
        </section>

        {/* ── CONTACT / PILOT REQUEST ── */}
        <section
          id="contact"
          className="min-h-[70vh] flex items-center justify-center px-4 py-16"
        >
          <div
            className="
              w-full max-w-3xl
              rounded-2xl
              border border-white/10
              bg-white/5 dark:bg-white/5
              backdrop-blur-xl
              shadow-[0_0_40px_rgba(0,0,0,0.2)]
              px-8 py-12
            "
          >
            {/* Heading */}
            <div className="space-y-2 mb-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold">
                Request a Pilot for Your Clinic
              </h2>
              <p className="text-muted-foreground text-base">
                Tell us about your clinic and we'll set up a personalised demo
                within 48 hours.
              </p>
            </div>

            <PilotContactForm />

            {/* Divider */}
            <div className="my-10 flex items-center gap-4">
              <div className="flex-1 border-t border-white/10" />
              <span className="text-xs text-muted-foreground">or reach us directly</span>
              <div className="flex-1 border-t border-white/10" />
            </div>

            {/* Quick-contact row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                href={`mailto:${footerData.email}`}
                className="
                  w-full md:w-auto min-w-[180px]
                  px-6 py-3 rounded-xl
                  bg-white/10 hover:bg-white/20
                  border border-white/10
                  text-sm font-medium text-center
                  transition-all hover:-translate-y-0.5
                "
              >
                {footerData.email}
              </Link>

              <Link
                href="https://linkedin.com/company/fremn"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full md:w-auto min-w-[180px]
                  px-6 py-3 rounded-xl
                  bg-white/10 hover:bg-white/20
                  border border-white/10
                  text-sm font-medium text-center
                  transition-all hover:-translate-y-0.5
                "
              >
                LinkedIn
              </Link>

              <Link
                href="https://x.com/thefremn"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-full md:w-auto min-w-[180px]
                  px-6 py-3 rounded-xl
                  bg-white/10 hover:bg-white/20
                  border border-white/10
                  text-sm font-medium text-center
                  transition-all hover:-translate-y-0.5
                "
              >
                X (Twitter)
              </Link>
            </div>

            {/* Footer meta */}
            <div className="mt-10 pt-6 border-t border-white/10 text-sm text-muted-foreground text-center space-y-1">
              <Tooltip
                containerClassName="text-muted-foreground"
                content={
                  <div className="w-64 font-semibold text-foreground">
                    Future Ready Enterprise Management Network
                  </div>
                }
              >
                <p className="font-semibold text-foreground cursor-default">
                  {footerData.brand}
                </p>
              </Tooltip>
              <p>{footerData.location}</p>
            </div>
          </div>
        </section>

        <StickyBanner className="h-12 bg-gradient-to-b from-blue-500 to-blue-600">
          <img
            src="/p1/lightp.png"
            alt="Pledge 1% Logo"
            className="h-10 w-auto mr-2 inline-block"
          />
          <p className="mx-0 max-w-[90%] text-white drop-shadow-md">
            We are part of{" "}
            <a
              href="https://www.pledge1percent.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pledge 1%
            </a>
          </p>
        </StickyBanner>
      </div>
    </div>
  );
}