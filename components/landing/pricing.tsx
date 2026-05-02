import {
  CheckIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

const pricingTiers = [
  {
    name: "Pacote Base",
    description: "Para lojas pequenas com até 1.000 itens",
    price: "R$ 1.000",
    priceNote: "a partir de",
    features: [
      "Levantamento físico completo",
      "Organização da base de dados",
      "Arquivo final para importação",
      "Até 1.000 produtos",
    ],
    highlighted: false,
  },
  {
    name: "Pacote Implantação",
    description: "Para até 2.000 itens com implantação completa",
    price: "R$ 1.500",
    priceNote: "a partir de",
    features: [
      "Tudo do Pacote Base",
      "Preparação para importação",
      "Acompanhamento da importação",
      "Conferência final",
      "Até 2.000 produtos",
    ],
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    name: "Sob Medida",
    description: "Para estoques acima de 2.000 itens",
    price: "Orçamento",
    priceNote: "personalizado",
    features: [
      "Análise completa do estoque",
      "Equipe dedicada",
      "Prazo personalizado",
      "Suporte estendido",
      "Acima de 2.000 produtos",
    ],
    highlighted: false,
  },
]

const additionalPricing = [
  {
    item: "Produto com código de barras e dados fáceis",
    price: "Incluso no pacote",
  },
  {
    item: "Produto interno/sem código/correção manual",
    price: "R$ 2 a R$ 5 por item",
  },
  {
    item: "Produto com análise fiscal/tributária",
    price: "Orçamento separado",
  },
]

export function Pricing() {
  return (
    <section id="precos" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Valores Transparentes
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Preços médios de referência. O valor final depende da quantidade de
            itens, nível de organização e complexidade do estoque.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative bg-card border rounded-xl p-6 sm:p-8 ${
                tier.highlighted
                  ? "border-primary ring-1 ring-primary"
                  : "border-border"
              }`}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="text-center">
                <h3 className="text-xl font-semibold text-foreground">
                  {tier.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>

                <div className="mt-6">
                  <span className="text-xs text-muted-foreground block">
                    {tier.priceNote}
                  </span>
                  <span className="text-4xl font-bold text-foreground">
                    {tier.price}
                  </span>
                </div>
              </div>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Button
                  className="w-full"
                  variant={tier.highlighted ? "default" : "outline"}
                  asChild
                >
                  <a href="#contato">Solicitar Orçamento</a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional pricing info */}
        <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
          <div className="flex items-start gap-3 mb-6">
            <ExclamationTriangleIcon className="w-6 h-6 text-primary shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground">
                Itens Adicionais e Casos Especiais
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Valores médios para produtos que exigem tratamento diferenciado
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 text-sm font-medium text-muted-foreground">
                    Tipo de Item
                  </th>
                  <th className="text-right py-3 text-sm font-medium text-muted-foreground">
                    Valor Médio
                  </th>
                </tr>
              </thead>
              <tbody>
                {additionalPricing.map((row) => (
                  <tr key={row.item} className="border-b border-border/50">
                    <td className="py-3 text-sm text-foreground">{row.item}</td>
                    <td className="py-3 text-sm text-right text-foreground font-medium">
                      {row.price}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-muted-foreground">
            * Os valores apresentados são médias de referência e podem variar de
            acordo com o porte da operação, complexidade do estoque, tecnologia
            utilizada e prazo desejado.
          </p>
        </div>
      </div>
    </section>
  )
}
