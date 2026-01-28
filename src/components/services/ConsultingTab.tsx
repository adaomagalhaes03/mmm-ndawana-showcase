import { 
  TrendingUp, 
  Settings, 
  Users,
  Calculator,
  GitBranch,
  FileSpreadsheet,
  Briefcase,
  Target
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const ConsultingTab = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Consultoria Estratégica */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Consultoria Estratégica</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Calculator}
            title="Reestruturação Financeira"
            description="Análise e reorganização da estrutura financeira para otimização de recursos e redução de custos."
            features={["Gestão de custos", "Análise de viabilidade", "Planejamento financeiro"]}
            delay="0s"
          />
          <ServiceCard
            icon={Target}
            title="Reestruturação Organizacional"
            description="Redesenho da estrutura organizacional para maior eficiência operacional e competitividade."
            features={["Mapeamento de processos", "Otimização de equipes", "Governança corporativa"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={TrendingUp}
            title="Expansão de Negócios"
            description="Estudos e estratégias para crescimento sustentável e entrada em novos mercados."
            features={["Estudos de mercado", "Estratégias de entrada", "Parcerias estratégicas"]}
            delay="0.2s"
          />
        </div>
      </div>

      {/* Gestão de Processos */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Settings className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Gestão de Processos</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={GitBranch}
            title="BPM"
            description="Business Process Management para análise, modelagem e otimização de processos de negócio."
            features={["Mapeamento AS-IS/TO-BE", "Automação de workflows", "Indicadores de desempenho"]}
            delay="0s"
          />
          <ServiceCard
            icon={FileSpreadsheet}
            title="Planos de Negócios"
            description="Elaboração de planos estratégicos completos para novos empreendimentos ou expansão."
            features={["Análise de mercado", "Projeções financeiras", "Estratégia competitiva"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={Briefcase}
            title="Gestão de Projetos"
            description="Metodologias PMI/PMBOK para gestão eficiente de projetos de qualquer porte."
            features={["Cronogramas", "Gestão de riscos", "Controle de qualidade"]}
            delay="0.2s"
          />
        </div>
      </div>

      {/* Outsourcing */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Users className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Outsourcing</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            icon={Users}
            title="Terceirização de Gestão"
            description="Outsourcing premium com colaboradores qualificados atuando sob orientação do cliente, com apoio da nossa equipe de consultoria."
            features={["Equipe especializada", "Suporte técnico", "Relatórios de status"]}
            delay="0s"
          />
          <ServiceCard
            icon={Settings}
            title="Consultoria SAP & SQL"
            description="Consultoria especializada em SAP e SQL Server para otimização e implementação de sistemas."
            features={["Implementação SAP", "Otimização SQL Server", "Suporte contínuo"]}
            delay="0.1s"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultingTab;
