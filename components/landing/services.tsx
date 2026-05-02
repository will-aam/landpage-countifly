import {
  ClipboardDocumentListIcon,
  CalculatorIcon,
  ServerStackIcon,
  PhoneArrowUpRightIcon,
  CalendarDaysIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: ClipboardDocumentListIcon,
    title: "Levantamento inicial de produtos",
    description:
      "Ideal para empresas que estão começando a usar um sistema ou precisam organizar a base de produtos. A equipe faz a coleta dos itens reais da loja e entrega uma base organizada com código de barras, descrição, NCM quando disponível, categoria e demais informações relevantes.",
  },
  {
    icon: CalculatorIcon,
    title: "Contagem de estoque / Inventário",
    description:
      "Ideal para empresas que já possuem sistema, mas precisam conferir o estoque físico. A Countifly realiza a contagem dos produtos, por loja inteira ou por categoria, e entrega um relatório para conferência, ajuste interno ou apoio ao fechamento de estoque.",
  },
  {
    icon: ServerStackIcon,
    title: "Base para importação em ERP",
    description:
      "Organizamos os dados coletados em uma planilha estruturada para facilitar a importação no sistema do cliente. A importação pode ser realizada pela equipe de TI ou suporte do sistema utilizado pelo cliente, e a Countifly pode acompanhar o processo quando contratado.",
  },
  {
    icon: PhoneArrowUpRightIcon,
    title: "Acompanhamento pós-serviço",
    description:
      "Após a entrega, oferecemos acompanhamento remoto por 30 dias para ajustes pontuais relacionados à base levantada, dúvidas, produtos que não bipam corretamente e orientação básica de cadastro.",
  },
  {
    icon: CalendarDaysIcon,
    title: "Suporte mensal e acompanhamento recorrente",
    description:
      "Para empresas que desejam manter o estoque sempre organizado, oferecemos planos de acompanhamento mensal, com suporte remoto, cadastro de novos produtos em lote, apoio em relatórios e contagens periódicas por categoria.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Uso do aplicativo Countifly",
    description:
      "Além do serviço presencial, a empresa pode utilizar o Countifly para realizar suas próprias contagens internas, com possibilidade de uso junto a leitores de código de barras e geração de relatórios.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Equipamentos para contagem",
    description:
      "Podemos fornecer, vender ou alugar equipamentos de leitura, como leitores de código de barras e acessórios compatíveis, conforme a necessidade do cliente. As condições devem ser definidas em orçamento.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Nossos Serviços</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Soluções completas para organização, levantamento e controle de estoque.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl bg-background border border-border p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contato"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </section>
  );
}
