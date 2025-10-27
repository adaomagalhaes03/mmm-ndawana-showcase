import { useState } from "react";
import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/Sidebar";
import DashboardStats from "@/components/admin/DashboardStats";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar 
        isSidebarOpen={isSidebarOpen} 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
      <Sidebar isOpen={isSidebarOpen} />
      <main className="pt-16 pl-0 md:pl-16 lg:pl-64 transition-all duration-300">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Painel de Controle</h1>
          <DashboardStats />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
