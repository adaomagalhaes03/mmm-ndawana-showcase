import { NavLink } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  LayoutDashboard,
  Briefcase,
  Users,
  FileText,
  UserCog,
  Settings as SettingsIcon,
  FileEdit,
  Mail,
  Shield,
} from "lucide-react";

const menuItems = [
  { label: "Resumo", icon: LayoutDashboard, path: "/dashboard", adminOnly: false },
  { label: "Editar Conteúdo", icon: FileEdit, path: "/dashboard/content", adminOnly: false },
  { label: "Mensagens", icon: Mail, path: "/dashboard/messages", adminOnly: false },
  { label: "Serviços", icon: Briefcase, path: "/dashboard/services", adminOnly: false },
  { label: "Clientes", icon: Users, path: "/dashboard/clients", adminOnly: false },
  { label: "Relatórios", icon: FileText, path: "/dashboard/reports", adminOnly: false },
  { label: "Usuários", icon: UserCog, path: "/dashboard/users", adminOnly: false },
  { label: "Permissões", icon: Shield, path: "/dashboard/permissions", adminOnly: true },
  { label: "Configurações", icon: SettingsIcon, path: "/dashboard/settings", adminOnly: false },
];

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const { isAdmin } = useAuth();

  // Filter menu items based on user role
  const visibleMenuItems = menuItems.filter(
    (item) => !item.adminOnly || isAdmin
  );

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border transition-all duration-300 z-30 overflow-y-auto ${isOpen ? "w-64" : "w-0 md:w-16"
        }`}
    >
      <nav className="p-4 space-y-2">
        {visibleMenuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${isActive
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
              } ${!isOpen && "md:justify-center"}`
            }
          >
            <item.icon className="h-5 w-5 flex-shrink-0" />
            {isOpen && <span className="font-medium">{item.label}</span>}
            {isOpen && item.adminOnly && (
              <Shield className="h-3 w-3 ml-auto text-primary" />
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

