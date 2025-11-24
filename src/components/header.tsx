"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Header() {
    const [open, setOpen] = useState(false)

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-blue-900/80 to-transparent backdrop-blur-sm scroll-smooth">
            <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 py-4 flex items-center justify-between">

                {/* Left Side */}
                <div className="flex items-center gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-10 bg-white rounded flex items-center justify-center">
                            <div className="text-blue-900 font-bold text-lg">
                                <img src="/fremn-logo.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-6 scroll-smooth" >
                        <a href="#hero" className="text-white text-sm hover:text-blue-100 transition">Home</a>
                        <a href="#about" className="text-white text-sm hover:text-blue-100 transition">About</a>
                        <a href="#products" className="text-white text-sm hover:text-blue-100 transition">Products</a>
                        {/* <a href="#team" className="text-white text-sm hover:text-blue-100 transition">Meet Our Team</a> */}
                        <a href="#contact" className="text-white text-sm hover:text-blue-100 transition">Contact</a>
                    </nav>
                </div>

                {/* Right side buttons (desktop) */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#contact" className="bg-white text-blue-900 hover:bg-blue-50 text-sm font-medium inline-flex items-center justify-center px-4 py-2 rounded">
                        Let's Connect
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-blue-900/90 backdrop-blur-md px-8 py-6 space-y-4 text-white">
                    <a href="#hero" className="block text-sm hover:text-blue-200">Home</a>
                    <a href="#about" className="block text-sm hover:text-blue-200">About</a>
                    <a href="#products" className="block text-sm hover:text-blue-200">Products</a>
                    <a href="#contact" className="block text-sm hover:text-blue-200">Contact</a>

                    <Button className="bg-white text-blue-900 hover:bg-blue-50 text-sm font-medium w-full mt-4">
                        Let's Connect
                    </Button>
                </div>
            )}
        </header>
    )
}
