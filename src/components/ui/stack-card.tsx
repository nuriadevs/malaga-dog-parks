import { IconType } from "react-icons";

interface StackCardProps {
  icon: IconType;
  title: string;
}

/**  */
export const StackCard = ({ icon: Icon, title }: StackCardProps) => {
  return (
    <div className="bg-card rounded-lg p-6 text-center border">
      <div className="text-2xl mb-4 flex justify-center">
        <Icon
          className="w-12 h-12"
          aria-hidden="true"
        />
      </div>
      <h3 className="text-2xl font-semibold text-foreground mb-2">
        {title}
      </h3>
    </div>
  );
};