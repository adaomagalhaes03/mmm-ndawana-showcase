import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { usersAPI, User } from "@/lib/api";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import { Loader2, Shield, ShieldAlert, Trash2, Info } from "lucide-react";
import { format } from "date-fns";

const DashboardPermissions = () => {
    const { user: currentUser, isAdmin } = useAuth();
    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState<User[]>([]);
    const [userToDelete, setUserToDelete] = useState<User | null>(null);

    useEffect(() => {
        if (!isAdmin) {
            toast.error("Você não tem permissão para acessar esta página");
            return;
        }
        loadUsers();
    }, [isAdmin]);

    const loadUsers = async () => {
        try {
            setLoading(true);
            const data = await usersAPI.getAll();
            setUsers(data);
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Failed to load users");
        } finally {
            setLoading(false);
        }
    };

    const handleRoleChange = async (userId: string, newRole: "ADMIN" | "EDITOR") => {
        try {
            await usersAPI.updateRole(userId, newRole);
            setUsers((prev) =>
                prev.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
            );
            toast.success("Função do usuário atualizada com sucesso!");
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Failed to update role");
        }
    };

    const handleDeleteUser = async () => {
        if (!userToDelete) return;

        try {
            await usersAPI.deleteUser(userToDelete.id);
            setUsers((prev) => prev.filter((u) => u.id !== userToDelete.id));
            toast.success("Usuário deletado com sucesso!");
            setUserToDelete(null);
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Failed to delete user");
        }
    };

    if (!isAdmin) {
        return (
            <DashboardLayout>
                <div className="flex flex-col items-center justify-center h-96">
                    <ShieldAlert className="h-16 w-16 text-destructive mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Acesso Negado</h2>
                    <p className="text-muted-foreground">
                        Você não tem permissão para acessar esta página.
                    </p>
                </div>
            </DashboardLayout>
        );
    }

    if (loading) {
        return (
            <DashboardLayout>
                <div className="flex items-center justify-center h-96">
                    <Loader2 className="h-8 w-8 animate-spin" />
                </div>
            </DashboardLayout>
        );
    }

    return (
        <DashboardLayout>
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold">Gestão de Permissões</h1>
                    <p className="text-muted-foreground mt-2">
                        Gerencie usuários e suas permissões de acesso (Apenas Administradores)
                    </p>
                </div>

                {/* Role Information */}
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-center space-x-2">
                            <Shield className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">ADMIN</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Acesso total ao sistema. Pode gerenciar usuários, alterar permissões,
                            editar conteúdo e visualizar todas as mensagens.
                        </p>
                    </div>
                    <div className="border rounded-lg p-4 space-y-2">
                        <div className="flex items-center space-x-2">
                            <Info className="h-5 w-5 text-blue-500" />
                            <h3 className="font-semibold">EDITOR</h3>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            Acesso limitado. Pode visualizar a dashboard, editar conteúdo do site
                            e visualizar mensagens. Não pode gerenciar usuários.
                        </p>
                    </div>
                </div>

                {/* Users Table */}
                <div className="border rounded-lg">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Função</TableHead>
                                <TableHead>Criado em</TableHead>
                                <TableHead className="text-right">Ações</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => {
                                const isCurrentUser = user.id === currentUser?.id;
                                return (
                                    <TableRow key={user.id}>
                                        <TableCell className="font-medium">
                                            {user.name}
                                            {isCurrentUser && (
                                                <Badge variant="outline" className="ml-2">
                                                    Você
                                                </Badge>
                                            )}
                                        </TableCell>
                                        <TableCell>{user.email}</TableCell>
                                        <TableCell>
                                            <Select
                                                value={user.role}
                                                onValueChange={(value: "ADMIN" | "EDITOR") =>
                                                    handleRoleChange(user.id, value)
                                                }
                                                disabled={isCurrentUser}
                                            >
                                                <SelectTrigger className="w-32">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="ADMIN">
                                                        <div className="flex items-center">
                                                            <Shield className="h-4 w-4 mr-2" />
                                                            ADMIN
                                                        </div>
                                                    </SelectItem>
                                                    <SelectItem value="EDITOR">
                                                        <div className="flex items-center">
                                                            <Info className="h-4 w-4 mr-2" />
                                                            EDITOR
                                                        </div>
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            {user.createdAt
                                                ? format(new Date(user.createdAt), "dd/MM/yyyy")
                                                : "-"}
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => setUserToDelete(user)}
                                                disabled={isCurrentUser}
                                            >
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </div>

                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Info className="h-4 w-4" />
                    <p>
                        Total de usuários: {users.length} | Administradores:{" "}
                        {users.filter((u) => u.role === "ADMIN").length} | Editores:{" "}
                        {users.filter((u) => u.role === "EDITOR").length}
                    </p>
                </div>
            </div>

            {/* Delete Confirmation Dialog */}
            <AlertDialog
                open={!!userToDelete}
                onOpenChange={() => setUserToDelete(null)}
            >
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Confirmar Exclusão</AlertDialogTitle>
                        <AlertDialogDescription>
                            Tem certeza que deseja deletar o usuário{" "}
                            <strong>{userToDelete?.name}</strong>? Esta ação não pode ser
                            desfeita.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteUser}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Deletar
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </DashboardLayout>
    );
};

export default DashboardPermissions;
