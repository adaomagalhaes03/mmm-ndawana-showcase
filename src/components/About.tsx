import { Building2, MapPin } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Quem Somos
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="bg-card rounded-2xl shadow-[var(--shadow-elegant)] p-8 md:p-12 border border-border animate-scale-in">
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
    </section>
  );
};

export default About;
