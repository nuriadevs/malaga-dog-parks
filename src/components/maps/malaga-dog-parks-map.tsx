"use client";
import { useTranslations } from "next-intl";
import { useMapLoader } from "@/hooks/use-map-loader";

/**
 * Map iframe component for displaying the dog park map.
 */
export function MapIframe() {
  const tMaps = useTranslations("maps");
  const { iframeRef } = useMapLoader();

  return (
    <div className="w-full flex-1 animate-in fade-in duration-1000">
      <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
        <div className="bg-card/30 backdrop-blur-sm border border-border/30 rounded-2xl overflow-hidden shadow-xl h-[70vh]">
          <iframe
            ref={iframeRef}
            className="w-full h-full border-0 rounded-2xl"
            aria-label={tMaps("ariatitle")}
            title={tMaps("title")}
            loading="lazy"
            style={{
              minHeight: "400px",
            }}
          />
        </div>
      </div>
    </div>
  );
}