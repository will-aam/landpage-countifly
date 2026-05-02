"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronLeftIcon,
  CubeIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  EyeIcon,
  EyeSlashIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: CubeIcon,
    title: "Estoque organizado de verdade",
    description:
      "Contagem precisa, códigos corretos e sua base pronta para o sistema funcionar.",
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: "Suporte por 30 dias incluso",
    description:
      "Acompanhamento pós-implantação via WhatsApp para ajustes e dúvidas.",
  },
  {
    icon: GlobeAltIcon,
    title: "Atendimento em todo Brasil",
    description:
      "Trabalhamos presencialmente ou remotamente, onde você estiver.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Nota fiscal emitida",
    description:
      "Emitimos NFS-e para todos os serviços. Transparência total.",
  },
];

const segments = [
  "Mercearia",
  "Mercado de bairro",
  "Conveniência",
  "Pet shop",
  "Loja de variedades",
  "Distribuidora",
  "Restaurante/Lanchonete",
  "Salão/Clínica",
  "Empresa de implantação de sistema",
  "Outro",
];

export default function CadastroPage() {
  const [documentType, setDocumentType] = useState<"cnpj" | "cpf">("cnpj");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header simples */}
      <header className="border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
          >
            <ChevronLeftIcon className="h-5 w-5" />
            Voltar
          </Link>
          <Link href="/" className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base">C</span>
            </div>
            <span className="text-lg font-bold text-slate-900">Countifly</span>
          </Link>
          <div className="w-20" />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Lado esquerdo - Benefícios */}
          <div className="lg:pr-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Solicite seu{" "}
              <span className="text-primary">orçamento grátis</span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Com a Countifly você organiza seu estoque de forma profissional,
              rápida e sem dor de cabeça.
            </p>

            <div className="mt-10 space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-slate-600 mt-0.5">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-xs text-slate-500">
              *valores e prazos podem variar conforme o tamanho do estoque
            </p>
          </div>

          {/* Lado direito - Formulário */}
          <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
            <h2 className="text-xl font-semibold text-slate-900 mb-6">
              Crie sua conta na Countifly
            </h2>

            <form className="space-y-5">
              {/* Nome/Razão Social */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  {documentType === "cnpj" ? "Razão Social" : "Nome completo"}{" "}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder={
                    documentType === "cnpj"
                      ? "Ex: Empresa XYZ LTDA"
                      : "Ex: João da Silva"
                  }
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                />
              </div>

              {/* Email e WhatsApp */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    E-mail de contato <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="seuemail@exemplo.com"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-slate-700 mb-1.5">
                    N° de WhatsApp <span className="text-red-500">*</span>
                    <InformationCircleIcon className="h-4 w-4 text-primary" />
                  </label>
                  <input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Toggle CNPJ/CPF */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="inline-flex rounded-full border border-slate-300 p-1 bg-white">
                    <button
                      type="button"
                      onClick={() => setDocumentType("cnpj")}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                        documentType === "cnpj"
                          ? "bg-primary text-white"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      CNPJ
                    </button>
                    <button
                      type="button"
                      onClick={() => setDocumentType("cpf")}
                      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                        documentType === "cpf"
                          ? "bg-primary text-white"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      CPF
                    </button>
                  </div>
                  <input
                    type="text"
                    placeholder={
                      documentType === "cnpj"
                        ? "00.000.000/0000-00"
                        : "000.000.000-00"
                    }
                    className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Segmento */}
              <div>
                <label className="flex items-center gap-1 text-sm font-medium text-slate-700 mb-1.5">
                  Qual seu segmento de trabalho?{" "}
                  <span className="text-red-500">*</span>
                  <InformationCircleIcon className="h-4 w-4 text-primary" />
                </label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 bg-white appearance-none cursor-pointer">
                  <option value="">Selecione uma opção</option>
                  {segments.map((segment) => (
                    <option key={segment} value={segment}>
                      {segment}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cidade/Estado */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Cidade <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Ex: São Paulo"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Estado <span className="text-red-500">*</span>
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 bg-white appearance-none cursor-pointer">
                    <option value="">Selecione</option>
                    <option value="AC">Acre</option>
                    <option value="AL">Alagoas</option>
                    <option value="AP">Amapá</option>
                    <option value="AM">Amazonas</option>
                    <option value="BA">Bahia</option>
                    <option value="CE">Ceará</option>
                    <option value="DF">Distrito Federal</option>
                    <option value="ES">Espírito Santo</option>
                    <option value="GO">Goiás</option>
                    <option value="MA">Maranhão</option>
                    <option value="MT">Mato Grosso</option>
                    <option value="MS">Mato Grosso do Sul</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PA">Pará</option>
                    <option value="PB">Paraíba</option>
                    <option value="PR">Paraná</option>
                    <option value="PE">Pernambuco</option>
                    <option value="PI">Piauí</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="RN">Rio Grande do Norte</option>
                    <option value="RS">Rio Grande do Sul</option>
                    <option value="RO">Rondônia</option>
                    <option value="RR">Roraima</option>
                    <option value="SC">Santa Catarina</option>
                    <option value="SP">São Paulo</option>
                    <option value="SE">Sergipe</option>
                    <option value="TO">Tocantins</option>
                  </select>
                </div>
              </div>

              {/* Senhas */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Digite uma senha <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="******"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Confirme sua senha <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="******"
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400 pr-12"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showConfirmPassword ? (
                        <EyeSlashIcon className="h-5 w-5" />
                      ) : (
                        <EyeIcon className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Códigos opcionais */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-slate-700 mb-1.5">
                    Cupom de desconto
                    <InformationCircleIcon className="h-4 w-4 text-primary" />
                  </label>
                  <input
                    type="text"
                    placeholder="Digite aqui"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-1 text-sm font-medium text-slate-700 mb-1.5">
                    Código de parceiro
                    <InformationCircleIcon className="h-4 w-4 text-primary" />
                  </label>
                  <input
                    type="text"
                    placeholder="Digite aqui"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-slate-900 placeholder:text-slate-400"
                  />
                </div>
              </div>

              {/* Termos */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="terms"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
                />
                <label htmlFor="terms" className="text-sm text-slate-600">
                  Declaro ter lido e aceitado os{" "}
                  <a href="#" className="text-primary hover:underline">
                    termos e políticas de serviço
                  </a>
                </label>
              </div>

              {/* Botão */}
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-3.5 rounded-lg hover:bg-primary/90 transition-colors mt-2"
              >
                Criar conta
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
