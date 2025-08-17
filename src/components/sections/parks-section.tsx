"use client"
import { useTranslations } from "next-intl";
import { MapIframe } from "@/components/maps/malaga-dog-parks-map";

/* Section for displaying park maps */
export function ParksMapsSection() {
  const tparks = useTranslations("parks");

  return (
    <section aria-labelledby="parks-heading">
      <div className="w-full mx-auto mb-8 md:mb-12 lg:mb-16 text-center">

          <h1
            id="parks-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-wide"
          >
            {tparks("title")}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-2 font-medium text-muted-foreground leading-relaxed">
            {tparks.rich("descriptionRich", {
              highlight: (chunks) => (
                <span className="text-cyan-600 font-bold">{chunks}</span>
              ),
            })}
          </p>
        
      </div>
      <MapIframe  />
    </section>
  );
}
