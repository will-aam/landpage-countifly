import { CheckCircleIcon } from "@heroicons/react/24/outline";

const targetAudience = [
  "Mercearias",
  "Mercados de bairro",
  "Conveniências",
  "Petshops",
  "Lojas de variedades",
  "Salões e clínicas",
  "Distribuidoras",
  "Restaurantes e lanchonetes",
  "Empresas que estão implantando sistema",
  "Empresas que precisam fazer inventário",
  "Empresas que precisam organizar estoque para contador ou controle interno",
];

export function TargetAudience() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Para Quem é</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Nossos serviços são indicados para diversos tipos de comércios e empresas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {targetAudience.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg bg-card border border-border p-4">
              <CheckCircleIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
