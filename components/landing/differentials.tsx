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
  { icon: UserGroupIcon, text: "Equipe especializada em levantamento e contagem de estoque" },
  { icon: CpuChipIcon, text: "Sistema próprio para coleta e organização dos dados" },
  { icon: QrCodeIcon, text: "Coleta por código de barras" },
  { icon: DocumentChartBarIcon, text: "Entrega de planilhas e relatórios organizados" },
  { icon: ServerStackIcon, text: "Possibilidade de base para ERP" },
  { icon: ClockIcon, text: "Acompanhamento remoto por 30 dias" },
  { icon: BuildingOfficeIcon, text: "Serviços presenciais e remotos" },
  { icon: PhoneIcon, text: "Possibilidade de suporte mensal" },
  { icon: DevicePhoneMobileIcon, text: "Opção de uso do aplicativo pelo próprio cliente" },
  { icon: WrenchScrewdriverIcon, text: "Possibilidade de venda ou aluguel de equipamentos" },
  { icon: BuildingStorefrontIcon, text: "Atendimento voltado para a realidade de pequenos e médios comércios" },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Nossos Diferenciais</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Por que escolher a Countifly para organizar seu estoque.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-4 rounded-xl bg-background border border-border p-4 hover:border-primary/50 transition-colors"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
