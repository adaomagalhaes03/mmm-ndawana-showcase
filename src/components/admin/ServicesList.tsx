import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Pencil, Trash2, Eye } from "lucide-react";
import ServiceModal from "./ServiceModal";
import { useToast } from "@/hooks/use-toast";

interface Service {
  id: string;
  name: string;
  description: string;
  createdAt: string;
  status: "Ativo" | "Inativo";
  image?: string;
}

const ServicesList = () => {
  const [services, setServices] = useState<Service[]>([
    {
      id: "1",
      name: "Limpeza Residencial",
      description: "Serviço completo de limpeza para residências",
      createdAt: "2024-01-15",
      status: "Ativo",
    },
    {
      id: "2",
      name: "Jardinagem",
      description: "Manutenção e cuidado de jardins e áreas verdes",
      createdAt: "2024-01-20",
      status: "Ativo",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Service | undefined>();
  const { toast } = useToast();

  const handleSave = (service: Service) => {
    if (selectedService) {
      setServices(services.map((s) => (s.id === service.id ? service : s)));
      toast({ title: "Serviço atualizado com sucesso!" });
    } else {
      setServices([...services, service]);
      toast({ title: "Serviço adicionado com sucesso!" });
    }
  };

  const handleEdit = (service: Service) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  const handleDelete = (id: string) => {
    setServices(services.filter((s) => s.id !== id));
    toast({ title: "Serviço removido com sucesso!" });
  };

  const handleAdd = () => {
    setSelectedService(undefined);
    setModalOpen(true);
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Lista de Serviços</CardTitle>
          <Button onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Serviço
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nome</TableHead>
                <TableHead>Descrição</TableHead>
                <TableHead>Data de Criação</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {services.map((service) => (
                <TableRow key={service.id}>
                  <TableCell className="font-medium">{service.id}</TableCell>
                  <TableCell>{service.name}</TableCell>
                  <TableCell className="max-w-xs truncate">{service.description}</TableCell>
                  <TableCell>{new Date(service.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Badge variant={service.status === "Ativo" ? "default" : "secondary"}>
                      {service.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleEdit(service)}>
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(service.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <ServiceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        service={selectedService}
      />
    </>
  );
};

export default ServicesList;
