import { Users, Briefcase, UserCog, Building2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const stats = [
  { title: "Total de Clientes", value: "12", icon: Users, change: "+5%" },
  { title: "Serviços Ativos", value: "24", icon: Briefcase, change: "+12%" },
  { title: "Funcionários", value: "45", icon: UserCog, change: "+2%" },
  { title: "Imóveis Geridos", value: "18", icon: Building2, change: "+8%" },
];

const monthlyData = [
  { name: "Jan", servicos: 18, clientes: 8 },
  { name: "Fev", servicos: 20, clientes: 9 },
  { name: "Mar", servicos: 22, clientes: 10 },
  { name: "Abr", servicos: 21, clientes: 11 },
  { name: "Mai", servicos: 23, clientes: 11 },
  { name: "Jun", servicos: 24, clientes: 12 },
];

const DashboardStats = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-primary">{stat.change}</span> vs mês anterior
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Crescimento Mensal</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="servicos" stroke="#DC2626" />
                <Line type="monotone" dataKey="clientes" stroke="#000000" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Comparativo Semestral</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="servicos" fill="#DC2626" />
                <Bar dataKey="clientes" fill="#000000" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardStats;
