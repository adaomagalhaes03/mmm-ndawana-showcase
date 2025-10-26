import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Report {
  id: string;
  title: string;
  type: string;
  dateGenerated: string;
  author: string;
  startDate: string;
  endDate: string;
  notes: string;
}

interface ReportModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (report: Report) => void;
  report?: Report;
}

const ReportModal = ({ open, onClose, onSave, report }: ReportModalProps) => {
  const [formData, setFormData] = useState<Partial<Report>>({
    title: "",
    type: "Financeiro",
    author: "",
    startDate: "",
    endDate: "",
    notes: "",
  });

  useEffect(() => {
    if (report) {
      setFormData(report);
    } else {
      setFormData({
        title: "",
        type: "Financeiro",
        author: "",
        startDate: "",
        endDate: "",
        notes: "",
      });
    }
  }, [report, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReport: Report = {
      id: report?.id || Date.now().toString(),
      title: formData.title || "",
      type: formData.type || "Financeiro",
      dateGenerated: report?.dateGenerated || new Date().toISOString(),
      author: formData.author || "",
      startDate: formData.startDate || "",
      endDate: formData.endDate || "",
      notes: formData.notes || "",
    };
    onSave(newReport);
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>{report ? "Editar Relatório" : "Gerar Novo Relatório"}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Título</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="type">Tipo</Label>
            <Select
              value={formData.type}
              onValueChange={(value) => setFormData({ ...formData, type: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Financeiro">Financeiro</SelectItem>
                <SelectItem value="Operacional">Operacional</SelectItem>
                <SelectItem value="Serviços">Serviços</SelectItem>
                <SelectItem value="Clientes">Clientes</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate">Data Início</Label>
              <Input
                id="startDate"
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="endDate">Data Fim</Label>
              <Input
                id="endDate"
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="author">Autor</Label>
            <Input
              id="author"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="notes">Observações</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
            />
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancelar
            </Button>
            <Button type="submit">Salvar</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReportModal;
