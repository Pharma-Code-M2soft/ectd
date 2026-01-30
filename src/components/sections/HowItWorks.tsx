import { Container } from "@/components/ui";
import {
  FileText,
  PenTool,
  Settings,
  Users,
  CheckCircle,
  FolderOpen,
  FileOutput,
  Send,
} from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Integracao de Documentos",
    description: "Importe estudos clinicos, dados CMC e documentacao existente",
    step: 1,
  },
  {
    icon: PenTool,
    title: "Criacao de Rascunho",
    description: "IA gera rascunhos estruturados baseados nos seus dados",
    step: 2,
  },
  {
    icon: Settings,
    title: "Refinamento de Conteudo",
    description: "Ajuste fino com templates especificos para cada modulo",
    step: 3,
  },
  {
    icon: Users,
    title: "Revisao Colaborativa",
    description: "Trabalho em equipe em tempo real com controle de versoes",
    step: 4,
  },
  {
    icon: CheckCircle,
    title: "Verificacao e Auditoria",
    description: "Validacao automatica de conformidade e completude",
    step: 5,
  },
  {
    icon: FolderOpen,
    title: "Gestao de Dossie",
    description: "Organize e versione todos os documentos em um so lugar",
    step: 6,
  },
  {
    icon: FileOutput,
    title: "Formato eCTD",
    description: "Exportacao automatica no padrao eCTD 4.0",
    step: 7,
  },
  {
    icon: Send,
    title: "Submissao ANVISA",
    description: "Pronto para envio a agencia reguladora",
    step: 8,
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-muted">
            Do documento inicial a submissao final, nossa plataforma guia voce
            em cada etapa do processo regulatorio.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.step}
              className="relative bg-bg rounded-xl p-6 hover:shadow-md transition-shadow group"
            >
              {/* Step Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-semibold text-text mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
