"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Button, Input, Select, Card } from "@/components/ui";
import {
  waitlistSchema,
  type WaitlistFormData,
  interestAreas,
} from "@/lib/schemas/waitlist";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

export function WaitlistForm() {
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      interestArea: undefined,
    },
  });

  const onSubmit = async (data: WaitlistFormData) => {
    setSubmitStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao enviar formulario");
      }

      setSubmitStatus("success");
      reset();
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Erro ao enviar formulario"
      );
    }
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-bg">
      <Container>
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Entre na Lista de Espera
            </h2>
            <p className="text-lg text-muted">
              Seja um dos primeiros a experimentar nossa plataforma. Vagas
              limitadas para o lancamento.
            </p>
          </div>

          {/* Form Card */}
          <Card className="p-6 md:p-8">
            {submitStatus === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-2">
                  Inscricao Confirmada!
                </h3>
                <p className="text-muted">
                  Obrigado pelo interesse! Entraremos em contato em breve com
                  novidades sobre a plataforma.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{errorMessage}</p>
                  </div>
                )}

                {/* Name */}
                <Input
                  label="Nome Completo"
                  placeholder="Seu nome completo"
                  required
                  error={errors.name?.message}
                  {...register("name")}
                />

                {/* Company */}
                <Input
                  label="Empresa"
                  placeholder="Nome da sua empresa"
                  required
                  error={errors.company?.message}
                  {...register("company")}
                />

                {/* Email */}
                <Input
                  label="E-mail Corporativo"
                  type="email"
                  placeholder="seu.email@empresa.com.br"
                  required
                  error={errors.email?.message}
                  helperText="Utilizamos apenas e-mails corporativos"
                  {...register("email")}
                />

                {/* Phone */}
                <Input
                  label="Telefone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  error={errors.phone?.message}
                  {...register("phone")}
                />

                {/* Interest Area */}
                <Select
                  label="Area de Interesse"
                  options={interestAreas.map((area) => ({
                    value: area.value,
                    label: area.label,
                  }))}
                  placeholder="Selecione uma area"
                  required
                  error={errors.interestArea?.message}
                  {...register("interestArea")}
                />

                {/* Submit */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={submitStatus === "loading"}
                >
                  {submitStatus === "loading" ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    "Entrar na Lista de Espera"
                  )}
                </Button>

                {/* Privacy Note */}
                <p className="text-xs text-muted text-center">
                  Ao enviar, voce concorda com nossa politica de privacidade.
                  Seus dados estao protegidos e nao serao compartilhados.
                </p>
              </form>
            )}
          </Card>
        </div>
      </Container>
    </section>
  );
}
