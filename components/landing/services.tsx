import {
  ClipboardDocumentListIcon,
  DocumentDuplicateIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline"

const services = [
  {
    icon: ClipboardDocumentListIcon,
    title: "Levantamento de Estoque",
    subtitle: "Serviço A",
    description:
      "Vamos até sua loja, contamos/bipamos todos os produtos e organizamos os dados em uma base estruturada.",
    includes: [
      "Contagem física completa",
      "Organização dos produtos",
      "Arquivo final para importação",
    ],
  },
  {
    icon: DocumentDuplicateIcon,
    title: "Preparação para Cadastro",
    subtitle: "Serviço B",
    description:
      "Limpamos a base, padronizamos descrições, separamos produtos problemáticos e auxiliamos na importação.",
    includes: [
      "Padronização de descrições",
      "Acompanhamento da importação",
      "Conferência básica",
    ],
  },
  {
    icon: WrenchScrewdriverIcon,
    title: "Cadastro Manual",
    subtitle: "Serviço C",
    description:
      "Produtos sem código, internos, duplicados ou com descrição ruim que exigem cadastro individual.",
    includes: [
      "Produtos sem código de barras",
      "Itens internos da loja",
      "Correção de duplicados",
    ],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-24 bg-card/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Nossos Serviços
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Oferecemos soluções completas para organizar seu estoque e preparar
            tudo para funcionar no seu sistema.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xs font-medium text-primary uppercase tracking-wider">
                {service.subtitle}
              </span>
              <h3 className="text-xl font-semibold text-foreground mt-1 mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.includes.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
