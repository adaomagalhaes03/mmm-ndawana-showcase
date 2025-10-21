import { Sparkles, Trees, Building } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Limpeza",
    description: "Soluções inovadoras de limpeza para empresas e residências.",
    features: "Funcionários altamente equipados e qualificados.",
    delay: "0s",
  },
  {
    icon: Trees,
    title: "Jardinagem",
    description: "Cuidamos da qualidade do ar que respira.",
    features: "Serviços de manutenção e design de jardins.",
    delay: "0.2s",
  },
  {
    icon: Building,
    title: "Gestão de Imóveis",
    description: "Gerenciamos o teu imóvel da melhor maneira.",
    features: "Cuidamos do teu património como se fosse nosso.",
    delay: "0.4s",
  },
];

const Services = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Oferecemos soluções completas e personalizadas para atender todas as suas necessidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-[var(--shadow-hover)] transition-all duration-500 border-border bg-card overflow-hidden animate-fade-in-up"
                style={{ animationDelay: service.delay }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-sm text-foreground/80 font-medium border-t border-border pt-4">
                    {service.features}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
