"use client";

import { Container, Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-bg">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text leading-tight mb-6">
            <span className="text-secondary">97%</span> Menos Tempo na Preparacao de Documentos{" "}
            <span className="text-primary">eCTD</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Transforme semanas de trabalho manual em horas. Nossa IA automatiza a geracao,
            validacao e formatacao de dossies para submissao a ANVISA.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={() => {
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Entrar na Lista de Espera
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                document
                  .getElementById("como-funciona")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Saiba Mais
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-muted mb-4">
              Projetado para conformidade com
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-muted">
              <span className="font-semibold">ANVISA</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="font-semibold">eCTD 4.0</span>
              <span className="w-1 h-1 bg-gray-300 rounded-full" />
              <span className="font-semibold">LGPD</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
