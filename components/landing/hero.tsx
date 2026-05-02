import {
  ClipboardDocumentCheckIcon,
  CubeIcon,
  DocumentChartBarIcon,
  ServerStackIcon,
  UserGroupIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { Marquee } from "@/components/ui/marquee";

const benefits = [
  { icon: CubeIcon, text: "Levantamento rápido de produtos" },
  { icon: ClipboardDocumentCheckIcon, text: "Contagem de estoque" },
  { icon: ServerStackIcon, text: "Base organizada para ERP" },
  { icon: DocumentChartBarIcon, text: "Relatórios para controle interno" },
  { icon: UserGroupIcon, text: "Acompanhamento pós-serviço" },
  { icon: DocumentTextIcon, text: "Emissão de NFS-e quando solicitado" },
];

function BenefitCard({ icon: Icon, text }: { icon: typeof CubeIcon; text: string }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-xl bg-card border border-border p-4 text-center min-w-[160px] sm:min-w-[180px]">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{text}</span>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Organizamos o estoque da sua loja para o sistema funcionar de verdade
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto text-pretty">
            A Countifly vai até sua empresa, levanta seus produtos, organiza sua base, conta seu estoque e entrega
            planilhas e relatórios prontos para uso no seu sistema, com agilidade, acompanhamento e tecnologia própria.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contato"
              className="w-full sm:w-auto rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
            >
              Solicitar orçamento
            </a>
            <a
              href="#como-funciona"
              className="w-full sm:w-auto rounded-lg border border-border bg-card px-8 py-4 text-base font-semibold text-foreground hover:bg-muted transition-colors"
            >
              Ver como funciona
            </a>
          </div>
        </div>

        <div className="relative mt-16">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          
          <Marquee pauseOnHover className="[--duration:30s] [--gap:1rem]">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.text} icon={benefit.icon} text={benefit.text} />
            ))}
          </Marquee>
          
          <Marquee reverse pauseOnHover className="[--duration:30s] [--gap:1rem] mt-4">
            {[...benefits].reverse().map((benefit) => (
              <BenefitCard key={benefit.text} icon={benefit.icon} text={benefit.text} />
            ))}
          </Marquee>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span>Aceitamos todas as formas de pagamento</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-accent" />
            <span>Emissão de NFS-e disponível</span>
          </div>
        </div>
      </div>
    </section>
  );
}
