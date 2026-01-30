"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container, Button } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#seguranca", label: "Seguranca" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <Container>
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-primary">
            eCTD Group
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button size="sm" onClick={() => {
              document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
            }}>
              Entrar na Lista de Espera
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="w-full mt-2"
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Entrar na Lista de Espera
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
