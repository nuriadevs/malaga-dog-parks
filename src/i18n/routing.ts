import { defineRouting } from "next-intl/routing";

/**
 * Routing configuration for the application
 */
export const routing = defineRouting({
  locales: ["es", "en", "de", "fr"], 
  defaultLocale: "es",

  localeDetection: false,  
  localePrefix: 'always', 

  pathnames: {
    "/": "/",
    "/parks": {
      en: "/parks",
      es: "/parques",
      de: "/parks",
      fr: "/parcs",
    },
    "/about": {
      en: "/about",
      es: "/acerca",
      de: "/über",
      fr: "/à-propos",
    },
  },
});

export type Locale = (typeof routing.locales)[number];

