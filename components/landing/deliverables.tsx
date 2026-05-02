import { DocumentCheckIcon } from "@heroicons/react/24/outline";

const deliverables = [
  "Planilha de produtos levantados",
  "Relatório de contagem",
  "Base para importação em ERP",
  "Lista de produtos sem código ou pendentes",
  "Quantidades por produto",
  "Categorias",
  "Código de barras",
  "Descrição dos produtos",
  "NCM quando disponível",
  "Base fiscal sugerida quando contratada",
  "Relatório final em formato organizado",
  "Acompanhamento remoto por 30 dias",
];

export function Deliverables() {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">O que Entregamos</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Exemplos de entregas que você pode receber ao contratar nossos serviços.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {deliverables.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-lg bg-background border border-border p-4">
              <DocumentCheckIcon className="h-5 w-5 text-primary shrink-0" />
              <span className="text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
