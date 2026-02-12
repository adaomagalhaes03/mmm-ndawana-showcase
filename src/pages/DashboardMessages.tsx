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
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { contactAPI, ContactMessage } from "@/lib/api";
import { toast } from "sonner";
import { Loader2, Mail, MailOpen, Trash2, Eye } from "lucide-react";
import { format } from "date-fns";

const DashboardMessages = () => {
    const [loading, setLoading] = useState(true);
    const [messages, setMessages] = useState<ContactMessage[]>([]);
    const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    useEffect(() => {
        loadMessages();
    }, []);

    const loadMessages = async () => {
        try {
            setLoading(true);
            const data = await contactAPI.getAll();
            setMessages(data);
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Failed to load messages");
        } finally {
            setLoading(false);
        }
    };

    const handleViewMessage = async (message: ContactMessage) => {
        setSelectedMessage(message);
        setDialogOpen(true);

        // Mark as read if not already read
        if (!message.isRead) {
            try {
                await contactAPI.markAsRead(message.id);
                setMessages((prev) =>
                    prev.map((m) => (m.id === message.id ? { ...m, isRead: true } : m))
                );
            } catch (error: any) {
                console.error("Failed to mark as read:", error);
            }
        }
    };

    const handleDeleteMessage = async (messageId: string) => {
        if (!confirm("Tem certeza que deseja deletar esta mensagem?")) {
            return;
        }

        try {
            await contactAPI.delete(messageId);
            setMessages((prev) => prev.filter((m) => m.id !== messageId));
            toast.success("Mensagem deletada com sucesso!");
            setDialogOpen(false);
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Failed to delete message");
        }
    };

    const unreadCount = messages.filter((m) => !m.isRead).length;

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
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold">Mensagens de Contato</h1>
                        <p className="text-muted-foreground mt-2">
                            Gerencie as mensagens recebidas pelo formulário de contato
                        </p>
                    </div>
                    <Badge variant="secondary" className="text-lg px-4 py-2">
                        {unreadCount} {unreadCount === 1 ? "não lida" : "não lidas"}
                    </Badge>
                </div>

                {messages.length === 0 ? (
                    <div className="text-center py-12 border rounded-lg">
                        <Mail className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                        <h3 className="text-lg font-semibold mb-2">Nenhuma mensagem</h3>
                        <p className="text-muted-foreground">
                            Você ainda não recebeu nenhuma mensagem de contato.
                        </p>
                    </div>
                ) : (
                    <div className="border rounded-lg">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className="w-12"></TableHead>
                                    <TableHead>Nome</TableHead>
                                    <TableHead>Email</TableHead>
                                    <TableHead>Assunto</TableHead>
                                    <TableHead>Data</TableHead>
                                    <TableHead className="text-right">Ações</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {messages.map((message) => (
                                    <TableRow
                                        key={message.id}
                                        className={message.isRead ? "opacity-60" : "font-medium"}
                                    >
                                        <TableCell>
                                            {message.isRead ? (
                                                <MailOpen className="h-4 w-4 text-muted-foreground" />
                                            ) : (
                                                <Mail className="h-4 w-4 text-primary" />
                                            )}
                                        </TableCell>
                                        <TableCell>{message.name}</TableCell>
                                        <TableCell>{message.email}</TableCell>
                                        <TableCell>{message.subject}</TableCell>
                                        <TableCell>
                                            {format(new Date(message.createdAt), "dd/MM/yyyy HH:mm")}
                                        </TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleViewMessage(message)}
                                            >
                                                <Eye className="h-4 w-4 mr-1" />
                                                Ver
                                            </Button>
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={() => handleDeleteMessage(message.id)}
                                            >
                                                <Trash2 className="h-4 w-4 text-destructive" />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </div>
                )}

                {/* Message Detail Dialog */}
                <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                    <DialogContent className="max-w-2xl">
                        <DialogHeader>
                            <DialogTitle>Detalhes da Mensagem</DialogTitle>
                            <DialogDescription>
                                Enviada em{" "}
                                {selectedMessage &&
                                    format(new Date(selectedMessage.createdAt), "dd/MM/yyyy 'às' HH:mm")}
                            </DialogDescription>
                        </DialogHeader>

                        {selectedMessage && (
                            <div className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-sm font-medium">Nome</label>
                                        <p className="text-sm mt-1">{selectedMessage.name}</p>
                                    </div>
                                    <div>
                                        <label className="text-sm font-medium">Email</label>
                                        <p className="text-sm mt-1">{selectedMessage.email}</p>
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Assunto</label>
                                    <p className="text-sm mt-1">{selectedMessage.subject}</p>
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Mensagem</label>
                                    <p className="text-sm mt-1 whitespace-pre-wrap bg-muted p-4 rounded-md">
                                        {selectedMessage.message}
                                    </p>
                                </div>

                                <div className="flex justify-end space-x-2">
                                    <Button
                                        variant="outline"
                                        onClick={() => setDialogOpen(false)}
                                    >
                                        Fechar
                                    </Button>
                                    <Button
                                        variant="destructive"
                                        onClick={() => handleDeleteMessage(selectedMessage.id)}
                                    >
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Deletar
                                    </Button>
                                </div>
                            </div>
                        )}
                    </DialogContent>
                </Dialog>
            </div>
        </DashboardLayout>
    );
};

export default DashboardMessages;
