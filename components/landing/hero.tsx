import { Button } from "@/components/ui/button"
import {
  ClipboardDocumentCheckIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline"

export function Hero() {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-6">
            <ClipboardDocumentCheckIcon className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Emitimos NFS-e para todos os serviços
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
            Transformamos seu estoque bagunçado em uma{" "}
            <span className="text-primary">base organizada</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Implantação e organização de estoque para pequenos comércios.
            Levantamento, cadastro e preparação para importação no seu sistema.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#contato" className="gap-2">
                Solicitar Orçamento
                <ArrowRightIcon className="w-4 h-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#como-funciona">Ver Como Funciona</a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Todas formas de pagamento</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Nota Fiscal de Serviço</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span>Atendimento personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
