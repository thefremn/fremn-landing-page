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
import { ScrollReveal } from "@/components/scroll-reveal";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Tooltip } from "@/components/ui/tooltip-card";
import { EncryptedText } from "@/components/ui/encrypted-text";
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
import { useState } from "react";
import { StickyBanner } from "@/components/ui/sticky-banner";
/* -----------------------------
   DATA (single source of truth)
------------------------------ */

const heroData = {
  title: "FREMN builds AI-first software for SMEs",
  description:
    "We create practical AI products that help small teams run operations more efficiently.",
  cta: {
    label: "View our products",
    href: "#products",
  },
};

const navItems = [
  { name: "Products", link: "#products" },
  { name: "Vision", link: "#vision" },
  { name: "Team", link: "#team" },
];

const products = [
  {
    name: "Solvia",
    description:
      "AI-powered customer support with chat and voice in one dashboard.",
    status: "Live",
    logo: "/solvia.png",
    statusVariant: "secondary" as const,
    link: "https://solvia.fremn.com/", // ONLY product with link
  },
  {
    name: "Fluxor",
    description:
      "Execution layer that turns customer requests into real actions.",
    status: "In Development",
    logo: "/fluxor.png",
    statusVariant: "outline" as const,
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
  productLink: {
    label: "Solvia",
    href: "#",
  },
};

/* -----------------------------
   PAGE
------------------------------ */

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      <div className="relative bg-background text-foreground">
        {/* Background (Hero-only wrapper logic stays intact) */}
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
          )}
        />

        <div className="pointer-events-none absolute inset-0 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

        <Navbar className="sticky top-0 z-50">
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={navItems} />
            <div className="flex items-center gap-4">
              <NavbarButton variant="primary" href="#contact">
                Contact Us
              </NavbarButton>
            </div>
          </NavBody>

          {/* Mobile Navigation */}
          <MobileNav className="sticky top-0 z-50 ">
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
                  Contact Us
                </NavbarButton>
              </div>
            </MobileNavMenu>
          </MobileNav>
        </Navbar>

        {/* Hero */}
        <section
          id="home"
          className="min-h-screen flex items-center justify-center text-center p-4 pt-0"
        >
          <ScrollReveal>
            <div className="flex flex-col items-center gap-6">
              {/* Hero SVG */}
              <img
                src="/svg/Saly-44.svg"
                alt="Hero illustration"
                className="w-[260px] h-[260px] opacity-90 animate-float-soft"
              />

              {/* Heading */}
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
                {heroData.title}
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
                {heroData.description}
              </p>

              {/* CTA Button */}
              <Button
                asChild
                size="lg"
                className="mt-4 bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25 hover:from-blue-400 hover:to-blue-600 transition-all duration-300"
              >
                <Link href={heroData.cta.href}>{heroData.cta.label}</Link>
              </Button>
            </div>
          </ScrollReveal>
        </section>

        {/* Products */}
        <section
  id="products"
  className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8"
>
  <ScrollReveal className="w-full max-w-6xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-5xl font-bold">Our Products</h2>
      <p className="mt-2 text-muted-foreground">
        Current and upcoming practical AI tools.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {products.map((product, index) => (
        <HoverBorderGradient
          key={`${product.name}-${index}`}
          containerClassName="rounded-2xl w-full"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 w-full"
        >
          <Card
            className="flex flex-col border border-transparent bg-transparent rounded-2xl w-full"
          >
            <CardHeader>
              <div className="flex justify-between items-start gap-4">
                {/* Logo Section */}
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

                {/* Title and Badge Section */}
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start gap-2">
                    <CardTitle className="text-2xl text-left">
                      <p className="dark:text-white text-black">{product.name}</p>
                    </CardTitle>
                    <Badge
                      variant={product.statusVariant}
                      className="flex-shrink-0">
                      {product.status}
                    </Badge>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="flex-grow">
              <CardDescription className="text-left">
                {product.description}
              </CardDescription>
            </CardContent>

            <CardFooter className="justify-start">
              {product.link ? (
                <Button
                  variant="link"
                  asChild
                  className="p-0 h-auto text-primary"
                >
                  <Link href={product.link}>Visit {product.name}</Link>
                </Button>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Coming soon
                </p>
              )}
            </CardFooter>
          </Card>
        </HoverBorderGradient>
      ))}
    </div>
  </ScrollReveal>
</section>

        {/* Vision */}
        <section
          id="vision"
          className="min-h-screen flex items-center justify-center p-4"
        >
          <ScrollReveal>
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Vision Text */}
              <div>
                <span className="text-2xl md:text-3xl leading-relaxed">
                  <TextGenerateEffect words="We believe AI should not just answer questions, but help businesses actually get work done. Our goal is to build AI-first products that let SMEs operate with the efficiency of much larger teams." />
                </span>
              </div>

              {/* Right: SVG Slot */}
              <div className="flex items-center justify-center">
                {/* Replace this SVG with your own */}
                <div className="w-[260px] h-[260px] opacity-80 animate-float drop-shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <img
                    src="/svg/vision.svg"
                    alt="Vision illustration"
                    className="w-[260px] h-[260px] opacity-80 animate-float-soft"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Team */}
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

        {/* Footer */}
        <section
          id="contact"
          className="min-h-[70vh] flex items-center justify-center px-4"
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
      text-center
    "
          >
            {/* Heading */}
            <div className="space-y-3 mb-10">
              <h2 className="text-3xl md:text-5xl font-bold">Get in touch</h2>
              <p className="text-muted-foreground text-lg">
                Reach out if you want to collaborate, build, or just talk.
              </p>
            </div>

            {/* Contact Links */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
              {/* Email */}
              <Link
                href={`mailto:thefremn@gmail.com}`}
                className="
          w-full md:w-auto
          min-w-[200px]
          px-6 py-3 rounded-xl
          bg-white/10 hover:bg-white/20
          border border-white/10
          text-sm font-medium
          text-center
          transition-all
          hover:-translate-y-0.5
          hover:shadow-lg
        "
              >
                {footerData.email}
              </Link>

              {/* LinkedIn */}
              <Link
                href="https://linkedin.com/company/fremn"
                target="_blank"
                rel="noopener noreferrer"
                className="
          w-full md:w-auto
          min-w-[200px]
          px-6 py-3 rounded-xl
          bg-white/10 hover:bg-white/20
          border border-white/10
          text-sm font-medium
          text-center
          transition-all
          hover:-translate-y-0.5
          hover:shadow-lg
        "
              >
                LinkedIn
              </Link>

              {/* Instagram */}
              <Link
                href="https://x.com/thefremn"
                target="_blank"
                rel="noopener noreferrer"
                className="
          w-full md:w-auto
          min-w-[200px]
          px-6 py-3 rounded-xl
          bg-white/10 hover:bg-white/20
          border border-white/10
          text-sm font-medium
          text-center
          transition-all
          hover:-translate-y-0.5
          hover:shadow-lg
        "
              >
                X (Twitter)
              </Link>
            </div>

            {/* Footer Meta */}
            <div className="pt-6 text-sm text-muted-foreground space-y-1">
              <Tooltip
                containerClassName="text-muted-foreground"
                content={
                  <div className="w-64 font-semibold text-foreground">
                    Future Ready Enterprise Management Network
                  </div>
                }
              >
                <p className="font-semibold text-foreground">
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
          We are part of <a href='https://www.pledge1percent.org/' target="_blank" rel="noopener noreferrer">Pledge 1%</a>
        </p>
      </StickyBanner>
      </div>
    
    </div>
  );
}
