"use client";
import { useTranslations } from "next-intl";
import { FaPaw } from "react-icons/fa6";

/* Hero section for the homepage */
export function HeroSection() {
  const t = useTranslations("homepage");

  return (
    <section
      aria-labelledby="main-heading"
      className="relative pt-10 sm:pt-16 lg:pt-24 xl:pt-24 pb-2 sm:pb-4 lg:pb-6 xl:pb-8 bg-gradient-to-b"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 gap-4 lg:gap-6 xl:gap-8 items-center">
          <div className="space-y-4 lg:space-y-6 xl:space-y-8 text-center">
            <h1
              id="main-heading"
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight 
     animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200
     flex justify-center text-center"
            >
              {/* Container for icon and text */}
              <span className="flex items-center gap-2 xs:gap-3 sm:gap-4">
                <FaPaw
                  className="text-cyan-600 text-3xl xs:text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
               drop-shadow-sm animate-bounce flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="break-words">{t("title")}</span>
              </span>
            </h1>

            <p
              className="text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium text-muted-foreground  
         mx-auto max-w-7xl
         animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 text-center"
            >
              {t("subtitle")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
