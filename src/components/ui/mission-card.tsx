import { LucideIcon } from "lucide-react";

interface MissionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
/**
 * MissionCard component.
 * @param param - Props for the MissionCard component.
 */
export const MissionCard = ({ icon: Icon, title, description }: MissionCardProps) => {
  return (
    <div className="bg-card rounded-2xl p-5 shadow-md border">
      <div className="mb-4 flex justify-center">
        <Icon
          className="w-12 h-12 text-cyan-600"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-4 text-center tracking-wide">
        {title}
      </h3>
      <p className="text-lg text-muted-foreground text-center tracking-normal">
        {description}
      </p>
    </div>
  );
};
