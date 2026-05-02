"use client";

import { useState, useEffect } from "react";
import {
  Bars3Icon,
  XMarkIcon,
  BuildingOfficeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Planos", href: "#planos" },
  { name: "FAQ", href: "#faq" },
  { name: "Contato", href: "#contato" },
];

const appLinks = [
  {
    name: "Cadastro PJ",
    href: "https://app.countifly.com/cadastro-pj",
    icon: BuildingOfficeIcon,
  },
  {
    name: "Cadastro CPF",
    href: "https://app.countifly.com/cadastro-cpf",
    icon: UserIcon,
  },
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
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md border-slate-700/50"
            : "bg-slate-900/80 backdrop-blur-sm border-slate-700/30"
        }`}
      >
        <div className="flex lg:flex-1">
          <a href="#inicio" className="flex items-center gap-2.5 group">
            <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">C</span>
            </div>
            <span className="text-lg font-bold text-foreground">Countifly</span>
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl p-2 text-muted-foreground hover:text-foreground hover:bg-slate-800 transition-colors"
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
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-slate-800 rounded-lg transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3">
          {appLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-slate-800 rounded-lg transition-colors"
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
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
          <div className="fixed top-4 left-4 right-4 z-50 overflow-hidden bg-slate-900 rounded-2xl border border-slate-700">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-700">
              <a
                href="#inicio"
                className="flex items-center gap-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="h-9 w-9 rounded-xl bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">C</span>
                </div>
                <span className="text-lg font-bold text-foreground">Countifly</span>
              </a>
              <button
                type="button"
                className="rounded-xl p-2 text-muted-foreground hover:text-foreground hover:bg-slate-800 transition-colors"
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
                    className="block rounded-xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-slate-800 hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700 space-y-2">
                <p className="px-4 text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Acessar App
                </p>
                {appLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl px-4 py-3 text-base font-medium text-muted-foreground hover:bg-slate-800 hover:text-foreground transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <item.icon className="h-5 w-5" />
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-700">
                <a
                  href="#contato"
                  className="block w-full text-center rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
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
