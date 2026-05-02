import {
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  ShoppingBagIcon,
  SparklesIcon,
  CubeIcon,
  ScissorsIcon,
  TruckIcon,
  BuildingOffice2Icon,
  ClipboardDocumentCheckIcon,
  CalculatorIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";

const targetAudience = [
  { icon: ShoppingCartIcon, text: "Mercearias" },
  { icon: BuildingStorefrontIcon, text: "Mercados de bairro" },
  { icon: ShoppingBagIcon, text: "Conveniências" },
  { icon: SparklesIcon, text: "Petshops" },
  { icon: CubeIcon, text: "Lojas de variedades" },
  { icon: ScissorsIcon, text: "Salões e clínicas" },
  { icon: TruckIcon, text: "Distribuidoras" },
  { icon: BuildingOffice2Icon, text: "Restaurantes e lanchonetes" },
  { icon: ComputerDesktopIcon, text: "Empresas implantando sistema" },
  { icon: ClipboardDocumentCheckIcon, text: "Empresas que precisam de inventário" },
  { icon: CalculatorIcon, text: "Organizar estoque para contador" },
];

export function TargetAudience() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-primary tracking-wide uppercase">Segmentos</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Para Quem É</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Atendemos diversos tipos de pequenos e médios comércios que precisam profissionalizar sua gestão de estoque.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {targetAudience.map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 rounded-full bg-card border border-border px-4 py-2.5 hover:border-primary/50 hover:bg-card/80 transition-all"
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
