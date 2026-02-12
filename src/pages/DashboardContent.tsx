import { useState, useEffect } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { contentAPI } from "@/lib/api";
import { toast } from "sonner";
import { Loader2, Save } from "lucide-react";

interface ContentItem {
    key: string;
    value: string;
    section: string;
}

const DashboardContent = () => {
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [content, setContent] = useState<Record<string, Record<string, string>>>({});

    useEffect(() => {
        loadContent();
    }, []);

    const loadContent = async () => {
        try {
            setLoading(true);
            const data = await contentAPI.getAll();
            setContent(data.bySection);
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Failed to load content");
        } finally {
            setLoading(false);
        }
    };

    const handleUpdateSection = async (section: string) => {
        try {
            setSaving(true);
            const sectionContent = content[section];
            const items = Object.entries(sectionContent).map(([key, value]) => ({
                key,
                value,
                section,
            }));

            await contentAPI.batchUpdate(items);
            toast.success(`${section} section updated successfully!`);
        } catch (error: any) {
            toast.error(error.response?.data?.error || "Failed to update content");
        } finally {
            setSaving(false);
        }
    };

    const updateValue = (section: string, key: string, value: string) => {
        setContent((prev) => ({
            ...prev,
            [section]: {
                ...prev[section],
                [key]: value,
            },
        }));
    };

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
                    <h1 className="text-3xl font-bold">Gestão de Conteúdo</h1>
                    <p className="text-muted-foreground mt-2">
                        Edite o conteúdo exibido no site institucional
                    </p>
                </div>

                <Tabs defaultValue="hero" className="space-y-4">
                    <TabsList>
                        <TabsTrigger value="hero">Hero</TabsTrigger>
                        <TabsTrigger value="about">Sobre Nós</TabsTrigger>
                        <TabsTrigger value="services">Serviços</TabsTrigger>
                    </TabsList>

                    {/* Hero Section */}
                    <TabsContent value="hero">
                        <Card>
                            <CardHeader>
                                <CardTitle>Seção Hero</CardTitle>
                                <CardDescription>
                                    Conteúdo principal da página inicial
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="hero_title">Título Principal</Label>
                                    <Input
                                        id="hero_title"
                                        value={content.hero?.hero_title || ""}
                                        onChange={(e) => updateValue("hero", "hero_title", e.target.value)}
                                        placeholder="M.M.M. Ndawana, LDA"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="hero_subtitle">Subtítulo</Label>
                                    <Input
                                        id="hero_subtitle"
                                        value={content.hero?.hero_subtitle || ""}
                                        onChange={(e) => updateValue("hero", "hero_subtitle", e.target.value)}
                                        placeholder="Excelência em Construção Civil"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="hero_description">Descrição</Label>
                                    <Textarea
                                        id="hero_description"
                                        value={content.hero?.hero_description || ""}
                                        onChange={(e) => updateValue("hero", "hero_description", e.target.value)}
                                        placeholder="Transformamos visões em realidade..."
                                        rows={3}
                                    />
                                </div>

                                <Button
                                    onClick={() => handleUpdateSection("hero")}
                                    disabled={saving}
                                    className="w-full"
                                >
                                    {saving ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Salvando...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="mr-2 h-4 w-4" />
                                            Salvar Alterações
                                        </>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* About Section */}
                    <TabsContent value="about">
                        <Card>
                            <CardHeader>
                                <CardTitle>Seção Sobre Nós</CardTitle>
                                <CardDescription>
                                    Informações sobre a empresa
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="about_title">Título</Label>
                                    <Input
                                        id="about_title"
                                        value={content.about?.about_title || ""}
                                        onChange={(e) => updateValue("about", "about_title", e.target.value)}
                                        placeholder="Quem Somos"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="about_description">Descrição</Label>
                                    <Textarea
                                        id="about_description"
                                        value={content.about?.about_description || ""}
                                        onChange={(e) => updateValue("about", "about_description", e.target.value)}
                                        placeholder="A M.M.M. Ndawana é uma empresa..."
                                        rows={5}
                                    />
                                </div>

                                <Button
                                    onClick={() => handleUpdateSection("about")}
                                    disabled={saving}
                                    className="w-full"
                                >
                                    {saving ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Salvando...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="mr-2 h-4 w-4" />
                                            Salvar Alterações
                                        </>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>

                    {/* Services Section */}
                    <TabsContent value="services">
                        <Card>
                            <CardHeader>
                                <CardTitle>Seção Serviços</CardTitle>
                                <CardDescription>
                                    Serviços oferecidos pela empresa
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <Label htmlFor="services_title">Título da Seção</Label>
                                    <Input
                                        id="services_title"
                                        value={content.services?.services_title || ""}
                                        onChange={(e) => updateValue("services", "services_title", e.target.value)}
                                        placeholder="Nossos Serviços"
                                    />
                                </div>

                                {/* Service 1: Construction */}
                                <div className="border-t pt-4 space-y-2">
                                    <h4 className="font-semibold">Serviço 1: Construção Civil</h4>
                                    <div className="space-y-2">
                                        <Label htmlFor="service_construction_title">Título</Label>
                                        <Input
                                            id="service_construction_title"
                                            value={content.services?.service_construction_title || ""}
                                            onChange={(e) => updateValue("services", "service_construction_title", e.target.value)}
                                            placeholder="Construção Civil"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="service_construction_description">Descrição</Label>
                                        <Textarea
                                            id="service_construction_description"
                                            value={content.services?.service_construction_description || ""}
                                            onChange={(e) => updateValue("services", "service_construction_description", e.target.value)}
                                            rows={2}
                                        />
                                    </div>
                                </div>

                                {/* Service 2: Materials */}
                                <div className="border-t pt-4 space-y-2">
                                    <h4 className="font-semibold">Serviço 2: Fornecimento de Materiais</h4>
                                    <div className="space-y-2">
                                        <Label htmlFor="service_materials_title">Título</Label>
                                        <Input
                                            id="service_materials_title"
                                            value={content.services?.service_materials_title || ""}
                                            onChange={(e) => updateValue("services", "service_materials_title", e.target.value)}
                                            placeholder="Fornecimento de Materiais"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="service_materials_description">Descrição</Label>
                                        <Textarea
                                            id="service_materials_description"
                                            value={content.services?.service_materials_description || ""}
                                            onChange={(e) => updateValue("services", "service_materials_description", e.target.value)}
                                            rows={2}
                                        />
                                    </div>
                                </div>

                                {/* Service 3: Consulting */}
                                <div className="border-t pt-4 space-y-2">
                                    <h4 className="font-semibold">Serviço 3: Consultoria</h4>
                                    <div className="space-y-2">
                                        <Label htmlFor="service_consulting_title">Título</Label>
                                        <Input
                                            id="service_consulting_title"
                                            value={content.services?.service_consulting_title || ""}
                                            onChange={(e) => updateValue("services", "service_consulting_title", e.target.value)}
                                            placeholder="Consultoria"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="service_consulting_description">Descrição</Label>
                                        <Textarea
                                            id="service_consulting_description"
                                            value={content.services?.service_consulting_description || ""}
                                            onChange={(e) => updateValue("services", "service_consulting_description", e.target.value)}
                                            rows={2}
                                        />
                                    </div>
                                </div>

                                <Button
                                    onClick={() => handleUpdateSection("services")}
                                    disabled={saving}
                                    className="w-full"
                                >
                                    {saving ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Salvando...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="mr-2 h-4 w-4" />
                                            Salvar Alterações
                                        </>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
        </DashboardLayout>
    );
};

export default DashboardContent;
