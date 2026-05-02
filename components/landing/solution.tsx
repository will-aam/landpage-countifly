import { CheckCircleIcon, UserGroupIcon, UsersIcon, DevicePhoneMobileIcon } from "@heroicons/react/24/outline";

const approaches = [
  {
    icon: UserGroupIcon,
    title: "Fazemos por você",
    description: "Nossa equipe realiza o levantamento e a contagem completa.",
  },
  {
    icon: UsersIcon,
    title: "Fazemos com você",
    description: "Acompanhamos sua equipe durante todo o processo.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Fornecemos a ferramenta",
    description: "Você pode utilizar o Countifly para suas próprias contagens.",
  },
];

export function Solution() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <CheckCircleIcon className="h-5 w-5" />
            A solução
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">
            A Countifly resolve esse problema
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
            A Countifly realiza o levantamento e a contagem dos produtos da sua loja, organiza os dados coletados e
            entrega uma base estruturada para facilitar o cadastro, a importação ou a conferência dentro do seu sistema.
            Unimos mão de obra especializada, processo definido e sistema próprio.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {approaches.map((approach) => (
            <div
              key={approach.title}
              className="relative rounded-2xl bg-card border border-border p-8 text-center hover:border-primary/50 transition-colors"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10">
                <approach.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{approach.title}</h3>
              <p className="mt-4 text-muted-foreground">{approach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
