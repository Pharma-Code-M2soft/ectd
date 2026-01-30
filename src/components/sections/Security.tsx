import { Container } from "@/components/ui";
import { Shield, Lock, FileSearch, Cpu } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Isolamento Completo",
    description:
      "Seus dados nunca sao compartilhados entre clientes. Ambiente dedicado e isolado para cada organizacao.",
  },
  {
    icon: Lock,
    title: "Criptografia Ponta-a-Ponta",
    description:
      "Criptografia AES-256 em repouso e TLS 1.3 em transito. Seus dados protegidos em todos os momentos.",
  },
  {
    icon: FileSearch,
    title: "Auditoria Completa",
    description:
      "Registro detalhado de todas as acoes, acessos e modificacoes para conformidade regulatoria.",
  },
  {
    icon: Cpu,
    title: "Processamento IA Seguro",
    description:
      "Seus dados nunca sao retidos para treinamento de modelos. Processamento seguro e privado.",
  },
];

const badges = [
  { name: "AWS", description: "Infraestrutura" },
  { name: "SOC2", description: "Conformidade" },
  { name: "MFA", description: "Autenticacao" },
  { name: "RBAC", description: "Controle de Acesso" },
  { name: "LGPD", description: "Privacidade" },
];

export function Security() {
  return (
    <section id="seguranca" className="py-16 md:py-24 bg-dark text-white">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seguranca de Nivel Empresarial
          </h2>
          <p className="text-lg text-gray-400">
            Protegemos seus dados sensiveis com as melhores praticas de
            seguranca da industria.
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <pillar.icon className="w-6 h-6 text-primary-light" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{pillar.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-center text-gray-500 text-sm mb-6 uppercase tracking-wider">
            Conformidade e Certificacoes
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {badges.map((badge) => (
              <div key={badge.name} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-primary-light font-bold text-sm">
                    {badge.name}
                  </span>
                </div>
                <span className="text-xs text-gray-500">{badge.description}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
