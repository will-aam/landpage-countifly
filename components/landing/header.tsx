"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const navigation = [
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
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-white border-slate-200 shadow-sm"
            : "bg-white/95 backdrop-blur-sm border-slate-200/80"
        }`}
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base">C</span>
            </div>
            <span className="text-lg font-bold text-slate-900">Countifly</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-3">
          <Link
            href="/cadastro"
            className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
          >
            Login
          </Link>
          <Link
            href="/cadastro"
            className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Cadastro
          </Link>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-4 left-4 right-4 z-50 overflow-hidden bg-white rounded-2xl border border-slate-200 shadow-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
              <Link
                href="/"
                className="flex items-center gap-2.5"
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-base">C</span>
                </div>
                <span className="text-lg font-bold text-slate-900">Countifly</span>
              </Link>
              <button
                type="button"
                className="rounded-lg p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
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
                    className="block rounded-xl px-4 py-3 text-base font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                <Link
                  href="/cadastro"
                  className="block w-full text-center rounded-xl bg-slate-100 px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-200 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/cadastro"
                  className="block w-full text-center rounded-xl bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Cadastro
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
