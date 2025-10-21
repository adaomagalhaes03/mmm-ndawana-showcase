const Clients = () => {
  const clients = [
    "CGPN",
    "MININT",
    "GPL",
    "Administrações",
    "Refriango",
    "Super Helô",
    "Contarte",
    "Sonangol",
    "Pitului",
    "Direção de Saúde do Kilamba Kiaxi",
    "Dispensário de Luanda",
    "CGD",
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

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center px-8 py-6 min-w-[200px]"
              >
                <span className="text-lg font-semibold text-foreground text-center">
                  {client}
                </span>
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
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Clients;
