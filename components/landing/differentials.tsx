import {
  UserGroupIcon,
  CpuChipIcon,
  QrCodeIcon,
  DocumentChartBarIcon,
  ServerStackIcon,
  ClockIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  BuildingStorefrontIcon,
} from "@heroicons/react/24/outline";

const differentials = [
  { icon: UserGroupIcon, text: "Equipe especializada" },
  { icon: CpuChipIcon, text: "Sistema próprio de coleta" },
  { icon: QrCodeIcon, text: "Coleta por código de barras" },
  { icon: DocumentChartBarIcon, text: "Planilhas e relatórios" },
  { icon: ServerStackIcon, text: "Base para ERP" },
  { icon: ClockIcon, text: "Acompanhamento 30 dias" },
  { icon: BuildingOfficeIcon, text: "Serviços presenciais e remotos" },
  { icon: PhoneIcon, text: "Suporte mensal disponível" },
  { icon: DevicePhoneMobileIcon, text: "App para o cliente" },
  { icon: WrenchScrewdriverIcon, text: "Venda/aluguel de equipamentos" },
  { icon: BuildingStorefrontIcon, text: "Foco em pequenos comércios" },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase">Por que nos escolher</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Nossos Diferenciais</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Por que escolher a Countifly para organizar seu estoque.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {differentials.map((item) => (
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
