import { 
  Bus, 
  Package, 
  Globe2,
  Plane,
  Building2,
  Users,
  Truck,
  MapPin
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const TransportTab = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Transporte Corporativo e Turismo */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Bus className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Transporte Corporativo e Turismo</h3>
        </div>
        <p className="text-muted-foreground mb-6 max-w-3xl">
          Com 10 anos de atuação no transporte de passageiros, consolidamos uma empresa com presença marcante no mercado, 
          mão de obra qualificada e solidez conquistada ao longo da nossa trajetória.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={Bus}
            title="Transporte de Passageiros"
            description="Serviços de transporte particular e corporativo com conforto e segurança."
            features={["Frota moderna", "Motoristas qualificados", "Pontualidade"]}
            delay="0s"
          />
          <ServiceCard
            icon={Plane}
            title="Excursões e Turismo"
            description="Organização de excursões e apoio a agências de turismo com serviços completos."
            features={["Roteiros personalizados", "Guias especializados", "Pacotes completos"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={Building2}
            title="Instituições de Ensino"
            description="Transporte escolar e universitário para instituições de ensino."
            features={["Segurança escolar", "Rotas otimizadas", "Monitoramento GPS"]}
            delay="0.2s"
          />
          <ServiceCard
            icon={Users}
            title="Eventos Corporativos"
            description="Apoio a empresas promotoras de eventos com logística de transporte."
            features={["Eventos corporativos", "Congressos", "Feiras e exposições"]}
            delay="0.3s"
          />
        </div>
      </div>

      {/* Logística de Cargas */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Package className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Logística de Cargas</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Truck}
            title="Cargas Secas"
            description="Transporte de cargas secas com segurança e eficiência para todo o território."
            features={["Carga completa", "Fracionada", "Rastreamento"]}
            delay="0s"
          />
          <ServiceCard
            icon={Building2}
            title="Construção Civil"
            description="Apoio logístico especializado para empresas de construção civil."
            features={["Materiais de construção", "Equipamentos", "Entregas programadas"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={Package}
            title="Serviços Diversos"
            description="Consultoria e gestão logística para empresas prestadoras de serviços."
            features={["Consultoria logística", "Gestão de frotas", "Otimização de rotas"]}
            delay="0.2s"
          />
        </div>
      </div>

      {/* Abrangência */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Globe2 className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Abrangência</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            icon={MapPin}
            title="Atuação Nacional"
            description="Cobertura completa em todo o território angolano com estrutura robusta e presença marcante."
            features={["Todas as províncias", "Pontos de apoio", "Rede de parceiros"]}
            delay="0s"
          />
          <ServiceCard
            icon={Globe2}
            title="Atuação Internacional"
            description="Presença internacional com frota própria e parcerias estratégicas em diversos países."
            features={["Frota própria", "Parcerias globais", "Experiência internacional"]}
            delay="0.1s"
          />
        </div>
      </div>
    </div>
  );
};

export default TransportTab;
