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
export const MissionCard = ({
  icon: Icon,
  title,
  description,
}: MissionCardProps) => {
  return (
    <div className="w-full group bg-card hover:bg-card/30 p-5 sm:p-6 lg:p-5 xl:p-6 rounded-2xl sm:rounded-3xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 border border-border hover:border-cyan-600/20">
      <div className="mb-4 sm:mb-6 flex justify-center">
        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-cyan-600/10 group-hover:bg-cyan-600 rounded-lg flex items-center justify-center transition-colors duration-300">
          <Icon
            className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7 text-cyan-600 group-hover:text-primary-foreground transition-colors duration-300"
            aria-hidden="true"
          />
        </div>
      </div>
      <h3 className="text-xl sm:text-2xl lg:text-xl xl:text-2xl font-bold text-foreground mb-3 sm:mb-4 text-center tracking-tight leading-tight">
        {title}
      </h3>
      <p className="text-base sm:text-lg lg:text-base text-muted-foreground text-center leading-relaxed tracking-normal">
        {description}
      </p>
    </div>
  );
};
