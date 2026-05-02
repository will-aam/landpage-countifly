import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const problems = [
  "Produtos sem cadastro no sistema",
  "Produtos com código de barras que não bipam",
  "Estoque físico diferente do estoque do sistema",
  "Dificuldade para cadastrar muitos itens manualmente",
  "Falta de tempo da equipe interna",
  "Dificuldade para fazer inventário",
  "Produtos vencidos ou esquecidos no estoque",
  "Falta de relatório organizado para controle",
  "Problemas no fechamento de estoque",
  "Dificuldade para entregar informações ao contador",
];

export function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-2 text-sm font-medium text-destructive mb-6">
            <ExclamationTriangleIcon className="h-5 w-5" />
            O problema
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            Seu estoque está desorganizado?
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            Muitos comerciantes começam a loja com vários gastos: aluguel, contador, mercadoria, sistema, funcionários,
            regularização e estrutura. Com isso, o estoque acaba ficando desorganizado, produtos são cadastrados de
            forma errada, alguns itens não bipam, o sistema não reflete a realidade da loja e o comerciante não sabe
            exatamente o que tem no estoque.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem}
              className="flex items-center gap-3 rounded-lg bg-background border border-border p-4"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-destructive/10">
                <ExclamationTriangleIcon className="h-4 w-4 text-destructive" />
              </div>
              <span className="text-sm font-medium text-foreground">{problem}</span>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold text-destructive">
            Estoque desorganizado gera perda de tempo, prejuízo e decisões erradas.
          </p>
        </div>
      </div>
    </section>
  );
}
