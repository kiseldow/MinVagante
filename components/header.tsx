"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navLinks = [
  { href: "#servizi", label: "Servizi" },
  { href: "#orari", label: "Orari" },
  { href: "#team", label: "Team" },
  { href: "#contatti", label: "Contatti" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/3abbe435-5b6c-478f-9a99-884095b116ce.jpeg"
            alt="Mina Vagante Logo"
            width={140}
            height={70}
            className="object-contain"
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold uppercase tracking-wider text-primary">Mina Vagante</span>
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Powerlifting & Streetlifting
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a className="hidden md:block" href="#download-app">
          <Button className="uppercase tracking-wide font-semibold bg-accent hover:bg-accent/80 text-accent-foreground">
            Primo Allenamento Gratuito
          </Button>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block text-sm font-medium uppercase tracking-wide text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#download-app">
              <Button className="w-full uppercase tracking-wide font-semibold bg-accent hover:bg-accent/80 text-accent-foreground">
                Primo Allenamento Gratuito
              </Button>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
