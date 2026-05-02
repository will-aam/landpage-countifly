import {
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  CubeIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/outline";

const steps = [
  {
    number: "01",
    icon: ChatBubbleLeftRightIcon,
    title: "Diagnóstico e orçamento",
    description:
      "O cliente informa o tipo de loja, quantidade aproximada de produtos, sistema utilizado e necessidade principal: levantamento, contagem, inventário ou base para importação.",
  },
  {
    number: "02",
    icon: CalendarIcon,
    title: "Agendamento da coleta",
    description:
      "A equipe agenda a visita e organiza o processo de coleta conforme o tamanho da loja e a operação do cliente.",
  },
  {
    number: "03",
    icon: CubeIcon,
    title: "Levantamento ou contagem",
    description:
      "Os produtos são coletados por código de barras, com registro das informações principais e quantidades quando aplicável.",
  },
  {
    number: "04",
    icon: DocumentTextIcon,
    title: "Organização da base",
    description:
      "Os dados são organizados em planilha ou relatório, com descrição, código, NCM quando disponível, categoria, quantidade e demais informações contratadas.",
  },
  {
    number: "05",
    icon: CheckBadgeIcon,
    title: "Entrega e acompanhamento",
    description:
      "O cliente recebe a base final, relatório ou arquivo para importação. Após a entrega, pode contar com acompanhamento remoto por 30 dias para ajustes pontuais.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Como Funciona</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Um processo simples e organizado para transformar seu estoque.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
          {steps.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-xl">
                {step.number}
              </div>
              <div className="mt-4 flex h-12 w-12 mx-auto items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
