import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/Sidebar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const DashboardSettings = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <Sidebar />
      <main className="pt-16 pl-0 md:pl-16 lg:pl-64 transition-all duration-300">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Configurações</h1>
          <Card>
            <CardHeader>
              <CardTitle>Configurações do Sistema</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Conteúdo em desenvolvimento...</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default DashboardSettings;
