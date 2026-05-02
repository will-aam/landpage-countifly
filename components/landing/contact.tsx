import { EnvelopeIcon, PhoneIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";

export function Contact() {
  return (
    <section id="contato" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Solicitar Orçamento</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Quer organizar seu estoque sem parar sua operação? Entre em contato com a Countifly.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="rounded-2xl bg-card border border-border p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Informações para orçamento</h3>
            <p className="text-muted-foreground mb-6">
              Para um orçamento mais preciso, tenha em mãos as seguintes informações:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Nome e empresa
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Cidade
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Tipo de comércio
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Quantidade aproximada de produtos
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Serviço desejado (levantamento, contagem, etc.)
              </li>
              <li className="flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                Sistema utilizado (se houver)
              </li>
            </ul>
          </div>

          <div className="rounded-2xl bg-card border border-border p-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Canais de contato</h3>

            <div className="space-y-6">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl bg-background border border-border p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">(00) 00000-0000</p>
                </div>
              </a>

              <a
                href="tel:+5500000000000"
                className="flex items-center gap-4 rounded-xl bg-background border border-border p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <PhoneIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Telefone</p>
                  <p className="text-sm text-muted-foreground">(00) 00000-0000</p>
                </div>
              </a>

              <a
                href="mailto:contato@countifly.com.br"
                className="flex items-center gap-4 rounded-xl bg-background border border-border p-4 hover:border-primary/50 transition-colors"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <EnvelopeIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-foreground">E-mail</p>
                  <p className="text-sm text-muted-foreground">contato@countifly.com.br</p>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-primary px-4 py-3 text-center text-base font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Aceitamos todas as formas de pagamento: PIX, cartão de crédito/débito, transferência bancária e boleto.
            <br />
            Emitimos Nota Fiscal de Serviço (NFS-e) quando solicitado.
          </p>
        </div>
      </div>
    </section>
  );
}
