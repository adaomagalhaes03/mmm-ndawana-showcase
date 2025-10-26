import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/Sidebar";
import ReportsList from "@/components/admin/ReportsList";

const DashboardReports = () => {
  return (
    <div className="min-h-screen bg-background">
      <AdminNavbar />
      <Sidebar />
      <main className="pt-16 pl-0 md:pl-16 lg:pl-64 transition-all duration-300">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">Relatórios</h1>
          <ReportsList />
        </div>
      </main>
    </div>
  );
};

export default DashboardReports;
