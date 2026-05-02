import {
  TableCellsIcon,
  DocumentTextIcon,
  CircleStackIcon,
  ExclamationTriangleIcon,
  HashtagIcon,
  TagIcon,
  QrCodeIcon,
  DocumentMagnifyingGlassIcon,
  CalculatorIcon,
  DocumentChartBarIcon,
  ClockIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const deliverables = [
  { icon: TableCellsIcon, text: "Planilha de produtos levantados" },
  { icon: DocumentTextIcon, text: "Relatório de contagem" },
  { icon: CircleStackIcon, text: "Base para importação em ERP" },
  { icon: ExclamationTriangleIcon, text: "Lista de produtos pendentes" },
  { icon: HashtagIcon, text: "Quantidades por produto" },
  { icon: TagIcon, text: "Categorias organizadas" },
  { icon: QrCodeIcon, text: "Código de barras" },
  { icon: DocumentMagnifyingGlassIcon, text: "Descrição dos produtos" },
  { icon: CalculatorIcon, text: "NCM quando disponível" },
  { icon: CheckBadgeIcon, text: "Base fiscal sugerida" },
  { icon: DocumentChartBarIcon, text: "Relatório final organizado" },
  { icon: ClockIcon, text: "Acompanhamento 30 dias" },
];

export function Deliverables() {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase">Entregas</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">O que Entregamos</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Exemplos de entregas que você pode receber ao contratar nossos serviços.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {deliverables.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 rounded-full bg-background border border-border px-4 py-2.5 hover:border-primary/50 hover:bg-background/80 transition-all"
            >
              <item.icon className="h-4 w-4 text-primary shrink-0" />
              <span className="text-sm font-medium text-foreground whitespace-nowrap">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
