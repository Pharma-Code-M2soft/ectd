import { Container, Card } from "@/components/ui";
import {
  Sparkles,
  Layers,
  Users,
  History,
  ShieldCheck,
  FileType,
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Geracao Inteligente de Documentos",
    description:
      "IA avancada que gera rascunhos de documentos regulatorios baseados nos seus dados e templates pre-aprovados.",
  },
  {
    icon: Layers,
    title: "Templates Modulos 1-5",
    description:
      "Biblioteca completa de templates para todos os modulos eCTD, adaptados aos requisitos da ANVISA.",
  },
  {
    icon: Users,
    title: "Trabalho Colaborativo",
    description:
      "Colaboracao em tempo real com sua equipe, com controle de acessos e notificacoes automaticas.",
  },
  {
    icon: History,
    title: "Trilha de Auditoria",
    description:
      "Rastreabilidade completa de todas as acoes, versoes e aprovacoes para conformidade regulatoria.",
  },
  {
    icon: ShieldCheck,
    title: "Verificacao de Qualidade",
    description:
      "Validacao automatica de conformidade, formatacao e completude antes da submissao.",
  },
  {
    icon: FileType,
    title: "Multiplos Formatos",
    description:
      "Exportacao para eCTD, NeeS, PDF e outros formatos exigidos pelas agencias reguladoras.",
  },
];

export function Features() {
  return (
    <section id="recursos" className="py-16 md:py-24 bg-bg">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
            Recursos da Plataforma
          </h2>
          <p className="text-lg text-muted">
            Ferramentas poderosas projetadas para simplificar e acelerar seu
            processo de submissao regulatoria.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="h-full">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-text text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-muted leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
