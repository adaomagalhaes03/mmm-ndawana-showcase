import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-4 text-primary-foreground">
              M.M.M. Ndawana, LDA
            </h3>
            <p className="text-secondary-foreground/80 mb-4 leading-relaxed">
              Soluções completas em Limpeza, Jardinagem e Gestão de Imóveis para empresas e
              residências em Angola.
            </p>
            <p className="text-sm text-secondary-foreground/60">
              NIF: 5000681180
            </p>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h4 className="text-xl font-semibold mb-4 text-primary-foreground">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <p className="text-secondary-foreground/80 text-sm">
                  Centralidade do Kilamba, Quarteirão E, Apartamento 03
                  <br />
                  Município de Belas, Luanda — Angola
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://wa.me/244900000000"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contato@mmmndawana.ao"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm"
                >
                  contato@mmmndawana.ao
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
            <h4 className="text-xl font-semibold mb-4 text-primary-foreground">Redes Sociais</h4>
            <p className="text-secondary-foreground/80 mb-4 text-sm">
              Siga-nos nas redes sociais para ficar atualizado
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-primary hover:border-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="#" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-primary hover:border-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="#" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="bg-secondary-foreground/10 border-secondary-foreground/20 hover:bg-primary hover:border-primary text-secondary-foreground hover:text-primary-foreground transition-all duration-300"
                asChild
              >
                <a href="#" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8 text-center">
          <p className="text-secondary-foreground/60 text-sm">
            © 2025 M.M.M. Ndawana, LDA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
