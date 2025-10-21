const Clients = () => {
  const clients = [
    { name: "CGPN", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=CGPN" },
    { name: "MININT", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=MININT" },
    { name: "GPL", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=GPL" },
    { name: "Administrações", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=Administracoes" },
    { name: "Refriango", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=Refriango" },
    { name: "Super Helô", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=Super+Helo" },
    { name: "Contarte", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=Contarte" },
    { name: "Sonangol", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=Sonangol" },
    { name: "Pitului", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=Pitului" },
    { name: "Direção de Saúde do Kilamba Kiaxi", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=Direcao+Saude" },
    { name: "Dispensário de Luanda", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=Dispensario" },
    { name: "CGD", logo: "https://via.placeholder.com/150x80/FFFFFF/DC2626?text=CGD" },
  ];

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nossos Clientes
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas e instituições que confiam nos nossos serviços
          </p>
        </div>

        <div className="relative overflow-hidden py-8">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center p-6 min-w-[180px] h-[100px] hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;
