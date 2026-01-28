import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  delay?: string;
}

const ServiceCard = ({ icon: Icon, title, description, features, delay = "0s" }: ServiceCardProps) => {
  return (
    <Card
      className="group border-border bg-card overflow-hidden animate-fade-in-up h-full"
      style={{ animationDelay: delay }}
    >
      <CardContent className="p-6">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
          <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
        </div>
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-3">
          {description}
        </p>
        {features && features.length > 0 && (
          <ul className="space-y-1.5 text-sm text-foreground/80 border-t border-border pt-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
