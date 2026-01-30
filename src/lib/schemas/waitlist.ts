import { z } from "zod";

const personalEmailDomains = [
  "gmail.com",
  "yahoo.com",
  "hotmail.com",
  "outlook.com",
  "live.com",
  "icloud.com",
  "aol.com",
  "protonmail.com",
  "mail.com",
  "zoho.com",
  "uol.com.br",
  "bol.com.br",
  "terra.com.br",
  "ig.com.br",
];

export const interestAreas = [
  { value: "medicamentos", label: "Medicamentos" },
  { value: "dispositivos_medicos", label: "Dispositivos Medicos" },
  { value: "biologicos", label: "Biologicos" },
  { value: "genericos", label: "Genericos" },
  { value: "fitoterapicos", label: "Fitoterapicos" },
  { value: "outro", label: "Outro" },
] as const;

export type InterestArea = (typeof interestAreas)[number]["value"];

const interestAreaValues = interestAreas.map((a) => a.value) as [
  InterestArea,
  ...InterestArea[]
];

export const waitlistSchema = z.object({
  name: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(100, "Nome deve ter no maximo 100 caracteres"),
  company: z
    .string()
    .min(2, "Empresa deve ter pelo menos 2 caracteres")
    .max(100, "Empresa deve ter no maximo 100 caracteres"),
  email: z
    .string()
    .email("E-mail invalido")
    .refine((email) => {
      const domain = email.split("@")[1]?.toLowerCase();
      return !personalEmailDomains.includes(domain);
    }, "Por favor, utilize seu e-mail corporativo"),
  phone: z
    .string()
    .regex(
      /^\(?[1-9]{2}\)?\s?(?:9\d{4}|\d{4})-?\d{4}$/,
      "Telefone invalido. Use o formato (XX) XXXXX-XXXX"
    )
    .optional()
    .or(z.literal("")),
  interestArea: z
    .enum(interestAreaValues, "Selecione uma area de interesse"),
});

export type WaitlistFormData = z.infer<typeof waitlistSchema>;
