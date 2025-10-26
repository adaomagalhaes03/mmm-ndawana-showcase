import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  FileText,
  UserCog,
  Settings as SettingsIcon,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Painel de Controle", icon: LayoutDashboard, path: "/dashboard" },
  { label: "Serviços", icon: Briefcase, path: "/dashboard/services" },
  { label: "Clientes", icon: Users, path: "/dashboard/clients" },
  { label: "Relatórios", icon: FileText, path: "/dashboard/reports" },
  { label: "Usuários", icon: UserCog, path: "/dashboard/users" },
  { label: "Configurações", icon: SettingsIcon, path: "/dashboard/settings" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-20 left-4 z-40 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      <aside
        className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border transition-all duration-300 z-30 ${
          isOpen ? "w-64" : "w-0 md:w-16"
        }`}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                } ${!isOpen && "md:justify-center"}`
              }
            >
              <item.icon className="h-5 w-5 flex-shrink-0" />
              {isOpen && <span className="font-medium">{item.label}</span>}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
