"use client";
import { useTranslations } from "next-intl";
import { StackCard } from "@/components/ui/stack-card";
import { stackIcons } from "@/data/icons";

/* Section for displaying the technology stack */
export function StackSection() {
  const tStack = useTranslations("stack");

  return (
    <section aria-labelledby="tech-stack-heading" className="py-2 sm:py-4 lg:py-6 xl:py-8">
      {/* Technology Stack */}
      <div className="py-4 container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2
          id="tech-stack-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-8 text-center tracking-wide"
        >
          {tStack("heading")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {stackIcons.map((Icon, index) => (
            <StackCard
              key={index}
              icon={Icon}
              title={tStack(`cards.${index}.title`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
