import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Monitor, 
  Building2, 
  Briefcase, 
  HeartPulse, 
  Truck, 
  HardHat,
  Database,
  Code,
  Cloud,
  Sparkles,
  Wrench,
  TrendingUp,
  Settings,
  Stethoscope,
  Pill,
  Bus,
  Package,
  Zap,
  Droplets
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceItemProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const ServiceItem = ({ icon: Icon, title, description }: ServiceItemProps) => (
  <Card className="group border-border bg-card hover:border-primary/50 transition-all duration-300">
    <CardContent className="p-6 flex items-start gap-4">
      <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
        <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
      </div>
      <div>
        <h4 className="font-semibold text-foreground mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </CardContent>
  </Card>
);

const ServicesTabs = () => {
  const tabs = [
    {
      id: "technology",
      label: "TI & Inovação",
      icon: Monitor,
      services: [
        { icon: Database, title: "Dados & Analytics", description: "BI, Big Data e Machine Learning para decisões inteligentes" },
        { icon: Code, title: "Desenvolvimento", description: "Software, Web e Mobile sob medida" },
        { icon: Cloud, title: "Cloud & Infraestrutura", description: "Migração, NOC/SOC e continuidade de negócios" },
      ]
    },
    {
      id: "facilities",
      label: "Facilities",
      icon: Building2,
      services: [
        { icon: Sparkles, title: "Limpeza Profissional", description: "Serviços de limpeza para empresas e instituições" },
        { icon: Wrench, title: "Gestão de Património", description: "Manutenção e conservação de ativos" },
        { icon: Building2, title: "Gestão de Imóveis", description: "Administração completa do seu património" },
      ]
    },
    {
      id: "consulting",
      label: "Consultoria",
      icon: Briefcase,
      services: [
        { icon: TrendingUp, title: "Consultoria Estratégica", description: "Reestruturação financeira e organizacional" },
        { icon: Settings, title: "Gestão de Processos", description: "BPM e elaboração de planos de negócios" },
        { icon: Briefcase, title: "Outsourcing", description: "Terceirização de gestão especializada" },
      ]
    },
    {
      id: "health",
      label: "Saúde",
      icon: HeartPulse,
      services: [
        { icon: Stethoscope, title: "Serviços Hospitalares", description: "Diagnóstico por imagem e análises clínicas" },
        { icon: Pill, title: "Farmacêutica", description: "Medicamentos oncológicos e neurológicos" },
        { icon: HeartPulse, title: "Saúde Pública", description: "Telemedicina e programas de saúde escolar" },
      ]
    },
    {
      id: "transport",
      label: "Transportes",
      icon: Truck,
      services: [
        { icon: Bus, title: "Transporte Corporativo", description: "Passageiros, excursões e turismo" },
        { icon: Package, title: "Logística de Cargas", description: "Cargas secas e apoio à construção civil" },
        { icon: Truck, title: "Abrangência Nacional", description: "Atuação nacional e internacional com frota própria" },
      ]
    },
    {
      id: "infrastructure",
      label: "Engenharia",
      icon: HardHat,
      services: [
        { icon: HardHat, title: "Construção Civil", description: "Obras, saneamento e estradas" },
        { icon: Zap, title: "Energia", description: "PCHs, energia eólica e solar" },
        { icon: Droplets, title: "Tratamento de Água", description: "ETAs e tratamento de resíduos" },
      ]
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Soluções integradas para todas as necessidades do seu negócio
          </p>
        </div>

        <Tabs defaultValue="technology" className="w-full max-w-4xl mx-auto">
          <TabsList className="w-full flex flex-wrap justify-center gap-1 h-auto bg-muted/50 p-2 rounded-xl mb-8">
            {tabs.map((tab) => (
              <TabsTrigger 
                key={tab.id}
                value={tab.id} 
                className="flex items-center gap-2 px-4 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all text-sm font-medium"
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0 animate-fade-in">
              <div className="grid gap-4">
                {tab.services.map((service, index) => (
                  <ServiceItem 
                    key={index}
                    icon={service.icon}
                    title={service.title}
                    description={service.description}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesTabs;
