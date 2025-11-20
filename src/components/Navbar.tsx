import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import logo from "../assets/logi1.png"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Início", id: "hero" },
    { label: "Quem Somos", id: "about" },
    { label: "Serviços", id: "services" },
    { label: "Clientes", id: "clients" },
    { label: "Contato", id: "contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/80"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo/Brand */}
            <div
              className="cursor-pointer md:flex-1 flex items-center"
              onClick={() => scrollToSection("hero")}
            >
              <img
                src={logo}
                alt="Logo MMM Ndawana"
                className="h-10 w-auto object-contain"
              />
            </div>

            {/* Desktop Menu - Centered */}
            <div className="hidden md:flex items-center justify-center space-x-8 flex-1 whitespace-nowrap">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-300 font-medium whitespace-nowrap"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right side - Cart and Mobile Menu */}
            <div className="flex items-center gap-2 md:flex-1 justify-end">
              {/* Shopping Cart Button */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowCartModal(true)}
                className="relative transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                  0
                </span>
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden pb-4 animate-fade-in">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-3 px-4 text-foreground hover:text-primary hover:bg-muted/50 transition-all duration-300 font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Shopping Cart Modal */}
      <Dialog open={showCartModal} onOpenChange={setShowCartModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Loja Virtual em Breve! 🛍️
            </DialogTitle>
            <DialogDescription className="text-center space-y-4 pt-4">
              <div className="space-y-3">
                <p className="text-base text-foreground/90">
                  Estamos preparando uma experiência de compras incrível para você!
                </p>
                <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                  <p className="font-semibold text-foreground">
                    Em breve você poderá:
                  </p>
                  <ul className="text-sm space-y-2 text-left pl-4">
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Navegar por nosso catálogo completo de produtos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Fazer compras online com segurança e praticidade</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Receber suas encomendas no conforto da sua casa</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">✓</span>
                      <span>Acompanhar seus pedidos em tempo real</span>
                    </li>
                  </ul>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Fique atento! Nossa loja virtual estará disponível em breve com ofertas exclusivas para os primeiros clientes.
                </p>
              </div>
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center pt-2">
            <Button
              onClick={() => setShowCartModal(false)}
              className="px-8"
            >
              Entendi
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;