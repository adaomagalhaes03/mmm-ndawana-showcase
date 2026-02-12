import { useState, ReactNode } from "react";
import AdminNavbar from "@/components/admin/AdminNavbar";
import Sidebar from "@/components/admin/Sidebar";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className="min-h-screen bg-background">
            <AdminNavbar
                isSidebarOpen={isSidebarOpen}
                onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
            />
            <Sidebar isOpen={isSidebarOpen} />
            <main className={`pt-16 transition-all duration-300 ${isSidebarOpen ? "pl-0 md:pl-64" : "pl-0 md:pl-16"
                }`}>
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
};

export default DashboardLayout;
