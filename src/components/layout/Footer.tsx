import { Container } from "@/components/ui";

const quickLinks = [
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#recursos", label: "Recursos" },
  { href: "#seguranca", label: "Seguranca" },
  { href: "#contato", label: "Contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-2xl font-bold text-primary-light">
              eCTD Group
            </a>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Plataforma inteligente para preparacao e gestao de dossies eCTD.
              Simplificando submissoes regulatorias para a industria
              farmaceutica brasileira.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Links Rapidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary-light transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contato</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a
                  href="mailto:contato@ectdgroup.com.br"
                  className="hover:text-primary-light transition-colors"
                >
                  contato@ectdgroup.com.br
                </a>
              </li>
              <li>Sao Paulo, Brasil</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            &copy; {currentYear} eCTD Group. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
