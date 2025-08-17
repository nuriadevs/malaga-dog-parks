"use client";
import { useTranslations } from "next-intl";
import { FaPaw } from "react-icons/fa6";

/* Hero section for the homepage */
export function HeroSection() {
  const t = useTranslations("homepage");

  return (
    <section aria-labelledby="main-heading">
      <div className="max-w-7xl mx-auto mb-8 md:mb-12 lg:mb-16 px-3 xs:px-4 sm:px-6 lg:px-8">
        <h1
          id="main-heading"
          className="text-4xl xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-normal xs:tracking-wide
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
          className="text-xl md:text-2xl lg:text-3xl mb-2 font-medium text-muted-foreground leading-relaxed tracking-wide
         mx-auto max-w-7xl px-1 xs:px-0
         animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200 text-center"
        >
          {t("subtitle")}
        </p>
      </div>
    </section>
  );
}
