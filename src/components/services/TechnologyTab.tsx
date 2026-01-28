import { 
  Database, 
  Code, 
  Cloud, 
  Package,
  BarChart3,
  Brain,
  Smartphone,
  Globe,
  Server,
  Shield,
  FileCheck,
  Building,
  Tractor,
  FileText
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const TechnologyTab = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Serviços de Dados */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Database className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Serviços de Dados</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={BarChart3}
            title="Business Intelligence"
            description="Processo de construção de conhecimento do negócio, transformando dados brutos em informação útil para análises diversas."
            features={["Dashboards interativos", "Relatórios automatizados", "KPIs personalizados"]}
            delay="0s"
          />
          <ServiceCard
            icon={Database}
            title="Big Data"
            description="Modern Data Warehouse com soluções para processamento de grandes volumes de dados."
            features={["Processamento em larga escala", "Data Lakes", "ETL avançado"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={BarChart3}
            title="Advanced Analytics"
            description="Análises avançadas para extração de insights valiosos dos dados da sua empresa."
            features={["Análise preditiva", "Mineração de dados", "Visualização avançada"]}
            delay="0.2s"
          />
          <ServiceCard
            icon={Brain}
            title="Machine Learning"
            description="Soluções de inteligência artificial e aprendizado de máquina para automação e previsões."
            features={["Modelos preditivos", "Automação inteligente", "IA aplicada"]}
            delay="0.3s"
          />
        </div>
      </div>

      {/* Desenvolvimento */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Code className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Desenvolvimento</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard
            icon={Code}
            title="Fábrica de Software"
            description="Desenvolvimento de soluções personalizadas com equipe qualificada e metodologias ágeis."
            features={["Scrum & SAFe", "Projetos sob medida", "Times multifuncionais"]}
            delay="0s"
          />
          <ServiceCard
            icon={Globe}
            title="Desenvolvimento Web"
            description="Portais corporativos, intranets, extranets e aplicações web de alto desempenho."
            features={["React & Angular", "SharePoint", "Integração de sistemas"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={Smartphone}
            title="Desenvolvimento Mobile"
            description="Aplicativos nativos e híbridos para iOS e Android com a melhor experiência do usuário."
            features={["React Native", "Xamarin", "Apps corporativos"]}
            delay="0.2s"
          />
          <ServiceCard
            icon={Package}
            title="Apps Empresariais"
            description="Automação de processos corporativos e gestão eletrônica de documentos."
            features={["Workflow automation", "GED", "Produtividade empresarial"]}
            delay="0.3s"
          />
        </div>
      </div>

      {/* Infraestrutura TI */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Cloud className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Infraestrutura TI</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={Cloud}
            title="Cloud Computing"
            description="Migração e sustentação em nuvem com especialistas Microsoft Azure. Planejamento, otimização e gestão 100% gerenciada."
            features={["Migração para nuvem", "Otimização de custos", "Sustentação contínua"]}
            delay="0s"
          />
          <ServiceCard
            icon={Server}
            title="NOC/SOC"
            description="Network e Security Operation Center para monitoramento e controle da rede, garantindo disponibilidade e segurança."
            features={["Monitoramento 24/7", "Segurança da informação", "Gestão de infraestrutura"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={Shield}
            title="PCN"
            description="Plano de Continuidade de Negócios para identificar riscos e preparar a empresa para enfrentar crises ou desastres."
            features={["Análise de riscos", "Planos de contingência", "Recuperação de desastres"]}
            delay="0.2s"
          />
        </div>
      </div>

      {/* Produtos Próprios */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Package className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Produtos Próprios</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={Building}
            title="Gestown"
            description="Sistema completo para gestão de condomínios e municipalidades, com controle online de todos os aspectos administrativos."
            features={["Gestão de arrecadação", "Manutenção preventiva", "Prestação de contas"]}
            delay="0s"
          />
          <ServiceCard
            icon={Tractor}
            title="Agrisoft"
            description="Software agropecuário para gestão rural com módulos para Rebanho, Agricultura e Máquinas."
            features={["Mais de 15 mil propriedades", "Tomada de decisão", "Aumento de produtividade"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={FileText}
            title="Norma Fácil"
            description="Plataforma com base de dados das normas e requerimentos dos principais órgãos públicos de Angola."
            features={["Acesso gratuito", "Normas atualizadas", "Responsabilidade social"]}
            delay="0.2s"
          />
        </div>
      </div>
    </div>
  );
};

export default TechnologyTab;
