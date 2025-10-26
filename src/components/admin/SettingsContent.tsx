import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContentSection {
  id: string;
  section: string;
  content: string;
  lastUpdated: string;
}

const SettingsContent = () => {
  const [sections, setSections] = useState<ContentSection[]>([
    {
      id: "1",
      section: "Quem Somos",
      content: "Somos uma empresa dedicada à prestação de serviços de qualidade...",
      lastUpdated: "2024-03-15",
    },
    {
      id: "2",
      section: "Serviços - Introdução",
      content: "Oferecemos uma ampla gama de serviços profissionais...",
      lastUpdated: "2024-03-10",
    },
    {
      id: "3",
      section: "Clientes",
      content: "Trabalhamos com os melhores clientes do mercado...",
      lastUpdated: "2024-03-05",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<ContentSection | null>(null);
  const [editContent, setEditContent] = useState("");
  const { toast } = useToast();

  const handleEdit = (section: ContentSection) => {
    setSelectedSection(section);
    setEditContent(section.content);
    setModalOpen(true);
  };

  const handleSave = () => {
    if (selectedSection) {
      setSections(
        sections.map((s) =>
          s.id === selectedSection.id
            ? { ...s, content: editContent, lastUpdated: new Date().toISOString() }
            : s
        )
      );
      toast({ title: "Conteúdo atualizado com sucesso!" });
      setModalOpen(false);
    }
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Gerenciar Conteúdo do Site</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Seção</TableHead>
                <TableHead>Conteúdo Atual</TableHead>
                <TableHead>Última Atualização</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sections.map((section) => (
                <TableRow key={section.id}>
                  <TableCell className="font-medium">{section.section}</TableCell>
                  <TableCell className="max-w-md truncate">{section.content}</TableCell>
                  <TableCell>{new Date(section.lastUpdated).toLocaleDateString()}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(section)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Editar Conteúdo - {selectedSection?.section}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea
                id="content"
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                rows={8}
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setModalOpen(false)}>
              Cancelar
            </Button>
            <Button onClick={handleSave}>Salvar Alterações</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SettingsContent;
