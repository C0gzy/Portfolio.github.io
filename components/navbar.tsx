"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "/TomCogzell_CV2026.pdf", target:"_blank", label: "CV" },
    { href: "#technologies", label: "Technologies" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className={`bg-background/20  rounded-2xl px-4 sm:px-6 lg:px-8 py-3 transition-all duration-300 
        ${ scrolled ? "backdrop-blur-md" : "transparent"}
        ${
          scrolled ? "shadow-lg" : ""
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-2 group">
              <span className="text-xl font-bold text-foreground">Tom Cogzell</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.target || ''}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Mobile: CV Link + Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <a
                href="/TomCogzell_CV2026.pdf"
                target="_blank"
                className="px-3 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-accent/10 rounded-lg transition-colors"
              >
                CV
              </a>
              <button
                onClick={toggleMenu}
                className="p-2 text-foreground hover:bg-accent/10 rounded-lg transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-border animate-in slide-in-from-top-2">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="px-4 py-3 text-base font-medium text-foreground hover:bg-accent/10 rounded-lg transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
