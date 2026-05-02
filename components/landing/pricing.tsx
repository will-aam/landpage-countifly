import { CheckIcon, InformationCircleIcon } from "@heroicons/react/24/outline";

const packages = [
  {
    name: "Pacote Levantamento Inicial",
    price: "R$ 1.000",
    priceNote: "a partir de",
    description: "Indicado para pequenos comércios que precisam levantar e organizar a base inicial de produtos.",
    features: [
      "Coleta dos produtos reais da loja",
      "Código de barras",
      "Descrição",
      "NCM quando disponível",
      "Categoria quando disponível",
      "Planilha organizada",
      "Entrega da base final",
      "Acompanhamento remoto por 30 dias",
    ],
    highlighted: false,
  },
  {
    name: "Pacote Implantação de Estoque",
    price: "R$ 1.500",
    priceNote: "a partir de",
    description: "Indicado para empresas que vão começar a usar um ERP ou precisam preparar a base para importação.",
    features: [
      "Levantamento dos produtos",
      "Organização da base",
      "Quantidade inicial quando contratada",
      "Planilha no formato combinado",
      "Base com informações fiscais sugeridas",
      "Apoio na conferência da importação",
      "Acompanhamento remoto por 30 dias",
    ],
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    name: "Pacote Inventário / Contagem",
    price: "Sob orçamento",
    priceNote: "valor personalizado",
    description:
      "Indicado para empresas que precisam contar estoque físico, fazer balanço, conferir divergências ou atualizar o sistema.",
    features: [
      "Contagem total da loja",
      "Contagem por categoria",
      "Relatório de quantidades",
      "Apoio para fechamento de estoque",
      "Relatório para controle interno",
    ],
    highlighted: false,
  },
];

const additionalPackages = [
  {
    name: "Acompanhamento Mensal",
    price: "A partir de R$ 150/mês",
    description:
      "Suporte remoto, cadastro de novos produtos em lote, dúvidas operacionais, apoio em relatórios e contagens periódicas.",
  },
  {
    name: "Uso do aplicativo Countifly",
    price: "Sob orçamento",
    description:
      "Acesso ao sistema para contagens internas, geração de relatórios, uso com leitor de código de barras e treinamento básico.",
  },
  {
    name: "Equipamentos",
    price: "Sob orçamento",
    description: "Venda ou aluguel de leitores de código de barras e acessórios para facilitar a contagem de estoque.",
  },
];

export function Pricing() {
  return (
    <section id="planos" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Planos e Valores Estimados</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Os valores abaixo são estimativas iniciais. O orçamento final depende do volume de produtos, complexidade,
            tipo de serviço, necessidade de contagem e nível de acompanhamento.
          </p>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-accent">
          <InformationCircleIcon className="h-5 w-5" />
          <span>Para definir o valor final, é necessário solicitar um orçamento.</span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl bg-background p-8 ${
                pkg.highlighted ? "border-2 border-primary ring-1 ring-primary" : "border border-border"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">{pkg.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{pkg.description}</p>
                <div className="mt-6">
                  <span className="text-xs text-muted-foreground block">{pkg.priceNote}</span>
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="#contato"
                  className={`block w-full rounded-lg px-4 py-3 text-center text-sm font-semibold transition-colors ${
                    pkg.highlighted
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  Solicitar orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-foreground text-center mb-8">Serviços Adicionais</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {additionalPackages.map((pkg) => (
              <div key={pkg.name} className="rounded-xl bg-background border border-border p-6">
                <h4 className="font-semibold text-foreground">{pkg.name}</h4>
                <p className="mt-1 text-sm font-medium text-primary">{pkg.price}</p>
                <p className="mt-3 text-sm text-muted-foreground">{pkg.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-xl bg-background border border-border p-6">
          <p className="text-sm text-muted-foreground text-center">
            <strong className="text-foreground">Observação:</strong> Produtos sem código, produtos internos, cadastros
            manuais em grande volume, validação fiscal detalhada, importação direta dentro do sistema do cliente e novas
            contagens podem gerar custos adicionais.
          </p>
        </div>
      </div>
    </section>
  );
}
