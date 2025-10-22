import React from "react";
import ggpenLogo from "../assets/ggpen.jpeg";
import refriLogo from "../assets/refri.png";
import sonangolLogo from "../assets/Sonangol_Logo.svg";

const Clients = () => {
  const clients = [
    { name: "CGPN", logo: ggpenLogo },
    { name: "Refriango", logo: refriLogo },
    { name: "Sonangol", logo: sonangolLogo },
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
