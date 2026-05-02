import { DocumentTextIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";

export function FiscalInfo() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Informações Fiscais</h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Entenda como tratamos os dados fiscais dos produtos levantados.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <DocumentTextIcon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">O que entregamos</h3>
              <p className="mt-4 text-muted-foreground">
                A Countifly pode entregar uma base com informações fiscais sugeridas, como NCM e outros campos quando
                disponíveis na base utilizada. Essas informações ajudam na organização inicial dos produtos e na
                preparação para cadastro no sistema.
              </p>
            </div>

            <div className="rounded-2xl bg-card border border-border p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                <ShieldCheckIcon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">Validação necessária</h3>
              <p className="mt-4 text-muted-foreground">
                As informações fiscais variáveis, como regras tributárias, alíquotas, CST, CSOSN, CFOP, substituição
                tributária e demais detalhes fiscais, podem depender do estado, regime tributário, atividade da empresa
                e orientação contábil. A validação final deve ser feita pelo contador ou responsável fiscal.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl bg-primary/5 border border-primary/20 p-6 text-center">
            <p className="text-foreground font-medium">Quando solicitado, emitimos Nota Fiscal de Serviço (NFS-e).</p>
          </div>
        </div>
      </div>
    </section>
  );
}
