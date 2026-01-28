import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Monitor, 
  Building2, 
  Briefcase, 
  HeartPulse, 
  Truck, 
  HardHat 
} from "lucide-react";
import TechnologyTab from "./TechnologyTab";
import FacilitiesTab from "./FacilitiesTab";
import ConsultingTab from "./ConsultingTab";
import HealthTab from "./HealthTab";
import TransportTab from "./TransportTab";
import InfrastructureTab from "./InfrastructureTab";

const ServicesTabs = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto">
            Soluções integradas para todas as necessidades do seu negócio
          </p>
        </div>

        <Tabs defaultValue="technology" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
            <TabsTrigger 
              value="technology" 
              className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <Monitor className="w-4 h-4" />
              <span className="hidden sm:inline">Tecnologia e Inovação</span>
              <span className="sm:hidden">TI</span>
            </TabsTrigger>
            <TabsTrigger 
              value="facilities" 
              className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <Building2 className="w-4 h-4" />
              <span className="hidden sm:inline">Facilities e Conservação</span>
              <span className="sm:hidden">Facilities</span>
            </TabsTrigger>
            <TabsTrigger 
              value="consulting" 
              className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <Briefcase className="w-4 h-4" />
              <span className="hidden sm:inline">Consultoria e Gestão</span>
              <span className="sm:hidden">Consultoria</span>
            </TabsTrigger>
            <TabsTrigger 
              value="health" 
              className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <HeartPulse className="w-4 h-4" />
              <span className="hidden sm:inline">Saúde e Medicina</span>
              <span className="sm:hidden">Saúde</span>
            </TabsTrigger>
            <TabsTrigger 
              value="transport" 
              className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <Truck className="w-4 h-4" />
              <span className="hidden sm:inline">Transportes e Logística</span>
              <span className="sm:hidden">Transportes</span>
            </TabsTrigger>
            <TabsTrigger 
              value="infrastructure" 
              className="flex items-center gap-2 px-4 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg transition-all"
            >
              <HardHat className="w-4 h-4" />
              <span className="hidden sm:inline">Infraestrutura e Engenharia</span>
              <span className="sm:hidden">Engenharia</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="technology" className="mt-0">
            <TechnologyTab />
          </TabsContent>
          <TabsContent value="facilities" className="mt-0">
            <FacilitiesTab />
          </TabsContent>
          <TabsContent value="consulting" className="mt-0">
            <ConsultingTab />
          </TabsContent>
          <TabsContent value="health" className="mt-0">
            <HealthTab />
          </TabsContent>
          <TabsContent value="transport" className="mt-0">
            <TransportTab />
          </TabsContent>
          <TabsContent value="infrastructure" className="mt-0">
            <InfrastructureTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default ServicesTabs;
