import { ClockIcon, CheckIcon, XMarkIcon } from "@heroicons/react/24/outline";

const included = [
  "Ajustes pontuais relacionados à base levantada",
  "Dúvidas de uso da planilha ou relatório",
  "Produtos que não bipam corretamente",
  "Pequenas correções necessárias",
  "Orientação básica de cadastro",
];

const notIncluded = [
  "Nova contagem completa",
  "Grandes volumes de novos cadastros",
  "Alterações fora do escopo inicial",
  "Serviços adicionais não contratados",
];

export function Support30Days() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
              <ClockIcon className="h-5 w-5" />
              Benefício incluso
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Acompanhamento por 30 Dias
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
              Após a entrega do serviço, oferecemos 30 dias de acompanhamento remoto para ajudar em ajustes pontuais
              relacionados à base levantada.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-card border border-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">O que está incluso</h3>
              <ul className="space-y-3">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-card border border-border p-8">
              <h3 className="text-lg font-semibold text-foreground mb-6">O que não está incluso</h3>
              <ul className="space-y-3">
                {notIncluded.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XMarkIcon className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
