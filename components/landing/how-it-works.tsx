import {
  PhoneIcon,
  CalendarIcon,
  ClipboardDocumentCheckIcon,
  DocumentCheckIcon,
} from "@heroicons/react/24/outline"

const steps = [
  {
    icon: PhoneIcon,
    step: "01",
    title: "Contato Inicial",
    description:
      "Você entra em contato, conta sobre sua loja e a gente faz um diagnóstico inicial do que precisa ser feito.",
  },
  {
    icon: CalendarIcon,
    step: "02",
    title: "Agendamento",
    description:
      "Combinamos data e horário para realizar o levantamento. 50% do valor é pago para agendar e iniciar o serviço.",
  },
  {
    icon: ClipboardDocumentCheckIcon,
    step: "03",
    title: "Execução",
    description:
      "Nossa equipe vai até sua loja, faz a contagem/bipagem de todos os produtos e organiza os dados.",
  },
  {
    icon: DocumentCheckIcon,
    step: "04",
    title: "Entrega Final",
    description:
      "Entregamos a base organizada, auxiliamos na importação e conferimos se tudo funcionou. 50% restante é pago.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Como Funciona
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Um processo simples e transparente do início ao fim.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+32px)] w-[calc(100%-32px)] h-px bg-border" />
              )}

              <div className="flex flex-col items-center text-center">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {step.step}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Payment info */}
        <div className="mt-16 bg-card border border-border rounded-xl p-6 sm:p-8 max-w-2xl mx-auto">
          <h3 className="font-semibold text-foreground text-center mb-4">
            Formas de Pagamento
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">PIX</span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">
                Cartão de Crédito/Débito
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">
                Transferência Bancária
              </span>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-muted-foreground">Boleto</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            Aceitamos qualquer forma de pagamento. Emitimos Nota Fiscal de
            Serviço (NFS-e) para todos os serviços realizados.
          </p>
        </div>
      </div>
    </section>
  )
}
