import { 
  HardHat, 
  Zap, 
  Droplets,
  Building,
  Wind,
  Sun,
  Waves,
  Recycle
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const InfrastructureTab = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Obras e Construção */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <HardHat className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Obras e Construção</h3>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Desenvolvimento de soluções de Infraestrutura Urbanas com foco em construção civil, saneamento, 
          estradas, energia e águas, sempre em linha com a preservação do meio ambiente.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Building}
            title="Construção Civil"
            description="Obras de construção civil com qualidade e pontualidade para projetos de qualquer porte."
            features={["Projetos comerciais", "Residenciais", "Industriais"]}
            delay="0s"
          />
          <ServiceCard
            icon={Droplets}
            title="Saneamento"
            description="Soluções completas de saneamento básico para comunidades urbanas e rurais."
            features={["Redes de esgoto", "Drenagem urbana", "Estações de tratamento"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={HardHat}
            title="Estradas"
            description="Construção e manutenção de estradas e infraestrutura viária."
            features={["Pavimentação", "Obras de arte", "Manutenção"]}
            delay="0.2s"
          />
        </div>
      </div>

      {/* Energia */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Energia</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Waves}
            title="PCHs - Mini Hídricas"
            description="Pequenas Centrais Hidrelétricas com baixo impacto ambiental para atender comunidades próximas."
            features={["Soluções compactas", "Baixo impacto", "Comunidades remotas"]}
            delay="0s"
          />
          <ServiceCard
            icon={Wind}
            title="Energia Eólica"
            description="Transformação da energia do vento em energia útil com parques geradores completos e inovadores."
            features={["Energia renovável", "Produção limpa", "Parques completos"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={Sun}
            title="Energia Solar"
            description="Soluções em energia solar fotovoltaica para produção de energia limpa e sustentável."
            features={["Painéis solares", "Energia sustentável", "Redução de custos"]}
            delay="0.2s"
          />
        </div>
      </div>

      {/* Tratamento de Água e Resíduos */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Droplets className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Tratamento de Água e Resíduos</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Droplets}
            title="ETAs - Estações de Tratamento"
            description="Estações de tratamento de água para purificação e abastecimento de comunidades."
            features={["Purificação de água", "Furos artesianos", "Programa Água para Todos"]}
            delay="0s"
          />
          <ServiceCard
            icon={Waves}
            title="Tratamento de Esgoto"
            description="Soluções compactas e inovadoras para tratamento de esgoto em comunidades afastadas."
            features={["Tratamento biológico", "Soluções compactas", "Impacto ambiental reduzido"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={Recycle}
            title="Tratamento de Resíduos"
            description="Sistema sustentável que transforma resíduos (lixo) em energia através de Biogás."
            features={["Produção de Biogás", "Sustentabilidade", "Economia circular"]}
            delay="0.2s"
          />
        </div>
      </div>
    </div>
  );
};

export default InfrastructureTab;
