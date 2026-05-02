"use client";

import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Planos", href: "#planos" },
  { name: "FAQ", href: "#faq" },
  { name: "Contato", href: "#contato" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-card/80 backdrop-blur-xl border border-border shadow-lg shadow-primary/5"
            : "bg-card/60 backdrop-blur-md border border-border/50"
        }`}
      >
        <div className="flex lg:flex-1">
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md shadow-primary/20 group-hover:shadow-primary/40 transition-shadow">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-lg font-bold text-foreground">Countifly</span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-1">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#contato"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/20 hover:shadow-primary/40 hover:bg-primary/90 transition-all"
          >
            Solicitar orçamento
          </a>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-background/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-4 left-4 right-4 z-50 overflow-hidden bg-card rounded-2xl border border-border shadow-xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <a
                href="#inicio"
                className="flex items-center gap-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-md shadow-primary/20">
                  <span className="text-primary-foreground font-bold text-lg">C</span>
                </div>
                <span className="text-lg font-bold text-foreground">Countifly</span>
              </a>
              <button
                type="button"
                className="rounded-xl p-2 text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Fechar menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="px-4 py-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="#contato"
                  className="block w-full text-center rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground shadow-md shadow-primary/20"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Solicitar orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
