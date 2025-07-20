import { LucideIcon } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

export const FeatureCard = ({ icon: Icon, title, description, color = "primary" }: FeatureCardProps) => {
  return (
    <Card className="glass-card p-6 hover-lift group">
      <div className="space-y-4">
        <div className={`w-12 h-12 rounded-lg bg-gradient-${color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="space-y-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};