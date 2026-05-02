"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "A Countifly importa os produtos diretamente no meu sistema?",
    answer:
      "Podemos acompanhar o processo e preparar a base para importação, mas a importação normalmente é realizada pela equipe do sistema utilizado pelo cliente. Caso seja necessário acesso ao sistema, isso será avaliado no orçamento.",
  },
  {
    question: "Vocês fazem contagem de estoque completa?",
    answer: "Sim. Podemos realizar contagem completa, contagem por categoria, inventário ou balanço de estoque.",
  },
  {
    question: "Vocês fazem apenas o levantamento dos produtos?",
    answer: "Sim. Podemos apenas levantar os produtos reais da loja e entregar uma base organizada.",
  },
  {
    question: "Vocês entregam informações fiscais?",
    answer:
      "Podemos entregar informações fiscais sugeridas, como NCM e dados disponíveis em nossa base. Porém, regras fiscais variáveis devem ser validadas pelo contador ou responsável fiscal da empresa.",
  },
  {
    question: "Vocês emitem nota fiscal?",
    answer: "Sim, quando solicitado, emitimos nota fiscal de serviço (NFS-e).",
  },
  {
    question: "Quanto custa?",
    answer:
      "Os serviços começam a partir de R$ 1.000, mas o valor final depende do volume de produtos, tipo de serviço, complexidade e necessidade do cliente. O ideal é solicitar orçamento.",
  },
  {
    question: "Quanto tempo demora?",
    answer:
      "A coleta pode ser feita em até 1 dia em muitos casos. A entrega da base organizada pode ocorrer no mesmo dia, em até 24h ou em alguns dias úteis, dependendo do volume e complexidade do serviço.",
  },
  {
    question: "Vocês atendem empresas que ainda não têm sistema?",
    answer:
      "Sim. Podemos levantar os produtos e entregar uma base organizada para ajudar na implantação futura de um sistema.",
  },
  {
    question: "Vocês atendem empresas que já usam ERP?",
    answer:
      "Sim. Podemos fazer inventário, contagem, conferência e entregar uma base para atualização ou ajuste no ERP.",
  },
  {
    question: "Posso usar o aplicativo Countifly sozinho?",
    answer:
      "Sim, existe a possibilidade de contratação do aplicativo para uso interno, conforme o plano e necessidade da empresa.",
  },
  {
    question: "Vocês fornecem leitor de código de barras?",
    answer: "Podemos vender ou alugar equipamentos conforme a necessidade do cliente.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20 lg:py-28 bg-card border-y border-border">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Perguntas Frequentes</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Tire suas dúvidas sobre nossos serviços.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="rounded-xl bg-background border border-border overflow-hidden">
              <button
                type="button"
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
