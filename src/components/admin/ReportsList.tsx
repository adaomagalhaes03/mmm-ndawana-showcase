import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Download, Trash2, Eye } from "lucide-react";
import ReportModal from "./ReportModal";
import { useToast } from "@/hooks/use-toast";

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

const ReportsList = () => {
  const [reports, setReports] = useState<Report[]>([
    {
      id: "1",
      title: "Relatório Financeiro - Q1 2024",
      type: "Financeiro",
      dateGenerated: "2024-04-01",
      author: "Osvaldo Domingos",
      startDate: "2024-01-01",
      endDate: "2024-03-31",
      notes: "Relatório trimestral de receitas e despesas",
    },
    {
      id: "2",
      title: "Relatório de Serviços - Janeiro",
      type: "Serviços",
      dateGenerated: "2024-02-01",
      author: "Osvaldo Domingos",
      startDate: "2024-01-01",
      endDate: "2024-01-31",
      notes: "Análise de serviços prestados no mês",
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState<Report | undefined>();
  const { toast } = useToast();

  const handleSave = (report: Report) => {
    if (selectedReport) {
      setReports(reports.map((r) => (r.id === report.id ? report : r)));
      toast({ title: "Relatório atualizado com sucesso!" });
    } else {
      setReports([...reports, report]);
      toast({ title: "Relatório gerado com sucesso!" });
    }
  };

  const handleDelete = (id: string) => {
    setReports(reports.filter((r) => r.id !== id));
    toast({ title: "Relatório removido com sucesso!" });
  };

  const handleAdd = () => {
    setSelectedReport(undefined);
    setModalOpen(true);
  };

  const getTypeBadgeVariant = (type: string) => {
    const variants: Record<string, "default" | "secondary" | "outline"> = {
      Financeiro: "default",
      Operacional: "secondary",
      Serviços: "outline",
      Clientes: "outline",
    };
    return variants[type] || "default";
  };

  return (
    <>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Relatórios e Análises</CardTitle>
          <Button onClick={handleAdd}>
            <Plus className="mr-2 h-4 w-4" />
            Gerar Relatório
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Título</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Data de Geração</TableHead>
                <TableHead>Autor</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell className="font-medium">{report.id}</TableCell>
                  <TableCell>{report.title}</TableCell>
                  <TableCell>
                    <Badge variant={getTypeBadgeVariant(report.type)}>{report.type}</Badge>
                  </TableCell>
                  <TableCell>{new Date(report.dateGenerated).toLocaleDateString()}</TableCell>
                  <TableCell>{report.author}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(report.id)}>
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

      <ReportModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSave}
        report={selectedReport}
      />
    </>
  );
};

export default ReportsList;
