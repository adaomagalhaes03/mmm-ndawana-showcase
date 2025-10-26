import { useState } from "react";
import { Eye, Edit, Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ClientModal from "./ClientModal";

const initialClients = [
  { id: 1, name: "CGPN", contact: "912345678", email: "contato@cgpn.ao" },
  { id: 2, name: "MININT", contact: "923456789", email: "info@minint.ao" },
  { id: 3, name: "GPL", contact: "934567890", email: "geral@gpl.ao" },
  { id: 4, name: "Refriango", contact: "945678901", email: "comercial@refriango.ao" },
  { id: 5, name: "Sonangol", contact: "956789012", email: "contact@sonangol.ao" },
];

const ClientsList = () => {
  const [clients, setClients] = useState(initialClients);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<any>(null);

  const handleEdit = (client: any) => {
    setSelectedClient(client);
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    setClients(clients.filter((c) => c.id !== id));
  };

  const handleSave = (client: any) => {
    if (client.id) {
      setClients(clients.map((c) => (c.id === client.id ? client : c)));
    } else {
      setClients([...clients, { ...client, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setSelectedClient(null);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Lista de Clientes</CardTitle>
        <Button onClick={() => setIsModalOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Adicionar Cliente
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nome</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Email</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id}>
                <TableCell className="font-medium">{client.name}</TableCell>
                <TableCell>{client.contact}</TableCell>
                <TableCell>{client.email}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(client)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(client.id)}
                    >
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>

      <ClientModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedClient(null);
        }}
        onSave={handleSave}
        client={selectedClient}
      />
    </Card>
  );
};

export default ClientsList;
