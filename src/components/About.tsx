import { Building2, MapPin } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image Side */}
            <div className="animate-slide-in-left order-2 md:order-1">
              <img
                src={aboutImage}
                alt="M.M.M. Ndawana Team"
                className="rounded-2xl shadow-[var(--shadow-elegant)] w-full h-auto object-cover"
              />
            </div>

            {/* Content Side */}
            <div className="animate-slide-in-right order-1 md:order-2">
              <div className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-8 border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Nossa História
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      A <span className="font-semibold text-foreground">M.M.M. Ndawana, LDA</span>,
                      contribuinte fiscal nº <span className="font-semibold">5000681180</span>, com sede
                      em Luanda, na Centralidade do Kilamba, Quarteirão E, Apartamento 03, Município de
                      Belas, é uma empresa angolana especializada em prestação de serviços nas áreas de
                      Limpeza, Jardinagem, Gestão de Imóveis, Consultoria comercial e material
                      hospitalar.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-6 border-t border-border">
                  <div className="bg-primary/10 p-3 rounded-xl">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Nossa Localização
                    </h3>
                    <p className="text-muted-foreground">
                      Centralidade do Kilamba, Quarteirão E, Apartamento 03
                      <br />
                      Município de Belas, Luanda — Angola
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
