import { 
  Sparkles, 
  Building2, 
  Users, 
  Wrench,
  ShieldCheck,
  ClipboardCheck
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const FacilitiesTab = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Limpeza Profissional */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Sparkles className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Limpeza Profissional</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Sparkles}
            title="Limpeza Empresarial"
            description="Soluções inovadoras de limpeza para empresas e instituições, com funcionários altamente qualificados e equipados."
            features={["Limpeza diária", "Desinfecção profunda", "Equipe uniformizada"]}
            delay="0s"
          />
          <ServiceCard
            icon={Building2}
            title="Limpeza Institucional"
            description="Serviços especializados para instituições públicas e privadas, hospitais, escolas e centros comerciais."
            features={["Protocolos especializados", "Produtos certificados", "Atendimento 24h"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={Users}
            title="Equipe Especializada"
            description="Profissionais treinados e equipados com as melhores ferramentas e produtos do mercado."
            features={["Treinamento contínuo", "Uniformes personalizados", "Supervisão constante"]}
            delay="0.2s"
          />
        </div>
      </div>

      {/* Gestão de Património */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Wrench className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Gestão de Património</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Wrench}
            title="Manutenção Preventiva"
            description="Programas de manutenção preventiva e preditiva para garantir a longevidade dos seus ativos."
            features={["Inspeções regulares", "Cronogramas otimizados", "Redução de custos"]}
            delay="0s"
          />
          <ServiceCard
            icon={ShieldCheck}
            title="Conservação de Ativos"
            description="Cuidamos do seu património como se fosse nosso, garantindo a melhor conservação dos seus bens."
            features={["Inventário completo", "Relatórios periódicos", "Gestão de garantias"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={ClipboardCheck}
            title="Gestão de Imóveis"
            description="Gerenciamos o seu imóvel da melhor maneira, oferecendo tranquilidade e valorização do seu investimento."
            features={["Administração completa", "Locação e vendas", "Assessoria jurídica"]}
            delay="0.2s"
          />
        </div>
      </div>
    </div>
  );
};

export default FacilitiesTab;
