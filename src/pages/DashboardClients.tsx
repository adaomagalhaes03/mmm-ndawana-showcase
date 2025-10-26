import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/Sidebar";
import ClientsList from "@/components/admin/ClientsList";

const DashboardClients = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <Sidebar />
      <main className="pt-16 pl-0 md:pl-16 lg:pl-64 transition-all duration-300">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Clientes</h1>
          <ClientsList />
        </div>
      </main>
    </div>
  );
};

export default DashboardClients;
