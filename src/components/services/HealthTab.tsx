import { 
  Stethoscope, 
  Pill, 
  HeartPulse,
  Microscope,
  Syringe,
  Building2,
  GraduationCap,
  Video
} from "lucide-react";
import ServiceCard from "./ServiceCard";

const HealthTab = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Serviços Hospitalares */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Stethoscope className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Serviços Hospitalares</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Microscope}
            title="Diagnóstico por Imagem"
            description="Parceria com ONCOR Medicina Avançada para prestação de serviços hospitalares e diagnósticos por imagem."
            features={["Equipamentos modernos", "Laudos especializados", "Tecnologia avançada"]}
            delay="0s"
          />
          <ServiceCard
            icon={Stethoscope}
            title="Análises Clínicas"
            description="Serviços completos de análises clínicas e microbiológicas com processos avançados e alta precisão."
            features={["DIA Labs parceiro", "Medicina investigativa", "Resultados rápidos"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={Building2}
            title="Gestão Hospitalar"
            description="Soluções integradas para automação de processos cirúrgicos e gestão hospitalar."
            features={["BRAINMED tecnologias", "Automação cirúrgica", "Processos otimizados"]}
            delay="0.2s"
          />
        </div>
      </div>

      {/* Farmacêutica e Materiais */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Pill className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Farmacêutica e Materiais</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            icon={Pill}
            title="Medicamentos Especiais"
            description="NEUROPHARMA - Pesquisa e produção de fármacos com foco em especialidades Neurológicas e Oncológicas."
            features={["Medicamentos oncológicos", "Neurológicos especiais", "Pesquisa e desenvolvimento"]}
            delay="0s"
          />
          <ServiceCard
            icon={Syringe}
            title="Materiais Hospitalares"
            description="BAUER HOSPITALAR - Fornecimento de materiais especiais minimamente invasivos para Neurocirurgia."
            features={["Materiais cirúrgicos", "Minimamente invasivos", "Alta qualidade"]}
            delay="0.1s"
          />
          <ServiceCard
            icon={HeartPulse}
            title="Biomateriais"
            description="Industrialização de biomateriais avançados para aplicações médicas especializadas."
            features={["Tecnologia de ponta", "Parcerias internacionais", "Inovação contínua"]}
            delay="0.2s"
          />
        </div>
      </div>

      {/* Projetos de Saúde Pública */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <HeartPulse className="w-6 h-6 text-primary" />
          <h3 className="text-2xl font-bold text-foreground">Projetos de Saúde Pública</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ServiceCard
            icon={GraduationCap}
            title="Saúde na Escola"
            description="Programa de Controle Parasitológico para melhoria do aproveitamento escolar e redução da mortalidade infantil."
            features={["Bem-estar infantil", "Controle parasitológico", "Impacto social"]}
            delay="0s"
          />
          <ServiceCard
            icon={Video}
            title="Telemedicina"
            description="Implementação de tecnologia que possibilita levar saúde a locais remotos com interação médica global."
            features={["Acesso remoto", "Consultas online", "Protocolos padronizados"]}
            delay="0.1s"
          />
        </div>
      </div>
    </div>
  );
};

export default HealthTab;
