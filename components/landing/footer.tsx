const navigation = [
  { name: "Início", href: "#inicio" },
  { name: "Serviços", href: "#servicos" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Planos", href: "#planos" },
  { name: "Diferenciais", href: "#diferenciais" },
  { name: "FAQ", href: "#faq" },
  { name: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">C</span>
            </div>
            <span className="text-xl font-bold text-foreground">Countifly</span>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              Levantamento, contagem e auditoria operacional de estoque.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Emissão de NFS-e quando solicitado. Aceitamos todas as formas de pagamento.
            </p>
          </div>

          <div className="w-full border-t border-border pt-8">
            <p className="text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Countifly. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
