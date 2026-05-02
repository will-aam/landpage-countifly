import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section id="contato" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Solicite seu Orçamento
            </h2>
            <p className="mt-4 text-muted-foreground text-pretty max-w-xl mx-auto">
              Entre em contato e conte sobre sua loja. Fazemos um diagnóstico
              inicial sem compromisso.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Fale Conosco
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <PhoneIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      WhatsApp
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      (00) 00000-0000
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Resposta rápida em horário comercial
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <EnvelopeIcon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      E-mail
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      contato@countifly.com.br
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Respondemos em até 24 horas
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Prefere uma ligação? Deixe seu número que entramos em contato.
                </p>
                <Button className="w-full" asChild>
                  <a
                    href="https://wa.me/5500000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chamar no WhatsApp
                  </a>
                </Button>
              </div>
            </div>

            {/* Quick Info */}
            <div className="bg-card border border-border rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Por que escolher a Countifly?
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Especialistas em pequenos comércios
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Entendemos a realidade de mercearias, minimercados e
                      varejos de bairro.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Preços justos e transparentes
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Sem surpresas. Você sabe exatamente o que está pagando.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Emissão de NFS-e
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Nota Fiscal de Serviço emitida para todos os trabalhos.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Acompanhamento completo
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Do levantamento até o sistema funcionando.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
