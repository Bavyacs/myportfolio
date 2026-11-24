"use client";

import { useState } from "react";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        "Home",
        "About",
        "Skills",
        "Projects",
        "Education",
        "Contact",
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B1120]/90 backdrop-blur-lg border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

                <a href="#home" className="text-2xl font-bold">
                    <span className="text-white">Bavya</span>
                    <span className="text-purple-500">.</span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-gray-300 hover:text-purple-400 transition duration-300 text-sm"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                <a
                    href="#contact"
                    className="hidden md:block px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium hover:scale-105 transition"
                >
                    Let's Talk
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-white text-3xl"
                >
                    {menuOpen ? "×" : "☰"}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-[#111C30]">
                    {navLinks.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-300 hover:text-purple-400"
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}