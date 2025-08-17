"use client"
import { useTranslations } from "next-intl";


/** Section for displaying information about the project */
export function AboutSection () {

  const tabout = useTranslations("about");

  return (
    <section aria-labelledby="about-heading">
      {/* Project History */}
      <div className="max-w-7xl mx-auto mb-16 text-left">
        <h1  id="about-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-center tracking-wide"
        >
          {tabout("title")}
        </h1>
        <div className="space-y-6">
          {/* Access each element of the array individually */}
          {[0, 1, 2].map((index) => (
            <p 
              key={index}
              className="text-base md:text-lg lg:text-xl leading-relaxed text-muted-foreground tracking-wide"
            >
              {tabout(`paragraphs.${index}`)}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
