"use client"
import { useTranslations } from "next-intl";
import { MissionCard } from "@/components/ui/mission-card";
import { missionIcons } from "@/data/icons";

/* Mission section for displaying the project's mission */
export function MissionSection() {
  const tMission = useTranslations("mission");

  return (
    <section aria-labelledby="mission-heading">
      <div className="w-full mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 mb-8 md:mb-12 lg:mb-16   animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
        <h2
          id="mission-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center my-10 tracking-wide"
        >
          {tMission("heading")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-6 mt-10 sm:justify-items-center ">
          {missionIcons.map((Icon, index) => (
            <MissionCard
              key={index}
              icon={Icon}
              title={tMission(`cards.${index}.title`)}
              description={tMission(`cards.${index}.description`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
