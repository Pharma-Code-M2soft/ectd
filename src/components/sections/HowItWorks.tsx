import { Check } from "lucide-react";

const features = [
  {
    name: "Integracao de Documentos",
    description: "Importe estudos clinicos, dados CMC e documentacao existente de forma simples e rapida.",
  },
  {
    name: "Criacao de Rascunho",
    description: "IA gera rascunhos estruturados baseados nos seus dados e templates pre-aprovados.",
  },
  {
    name: "Refinamento de Conteudo",
    description: "Ajuste fino com templates especificos para cada modulo do dossie eCTD.",
  },
  {
    name: "Revisao Colaborativa",
    description: "Trabalho em equipe em tempo real com controle de versoes e comentarios.",
  },
  {
    name: "Verificacao e Auditoria",
    description: "Validacao automatica de conformidade, formatacao e completude.",
  },
  {
    name: "Gestao de Dossie",
    description: "Organize e versione todos os documentos em um unico lugar centralizado.",
  },
  {
    name: "Formato eCTD",
    description: "Exportacao automatica no padrao eCTD 4.0 aceito pela ANVISA.",
  },
  {
    name: "Submissao ANVISA",
    description: "Documentacao pronta para envio a agencia reguladora sem retrabalho.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2">
            <h2 className="text-base/7 font-semibold text-primary">
              Processo simplificado
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-text sm:text-5xl">
              Como Funciona
            </p>
            <p className="mt-6 text-base/7 text-muted">
              Do documento inicial a submissao final, nossa plataforma guia voce
              em cada etapa do processo regulatorio com inteligencia artificial.
            </p>
          </div>
          <dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-muted sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-text">
                  <Check
                    aria-hidden="true"
                    className="absolute top-1 left-0 size-5 text-primary"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-2">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
