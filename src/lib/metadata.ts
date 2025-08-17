import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n/routing";
import type { Metadata } from "next";

// Correct types for layout according to Next.js 15
type Props = {
  params: Promise<{ locale: Locale }>;
};

/**
 * Generate metadata for the root layout
 * @param param0 - Props containing the locale
 * @returns Metadata for the root layout
 */
export async function generateRootMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  // Validate locale
  const validLocales: Locale[] = ['es', 'en', 'de', 'fr'];
  const finalLocale = validLocales.includes(locale) ? locale : 'es';

  const t = await getTranslations({ locale: finalLocale, namespace: "metadata" });
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://nuriavazquez.dev";

  // Mapping locales to OpenGraph locales
  const ogLocaleMap: Record<Locale, string> = {
    es: "es_ES",
    en: "en_US", 
    de: "de_DE",
    fr: "fr_FR"
  };

  return {
    title: t("title"),
    description: t("description"),
    keywords: t.raw("keywords") as string[],
    generator: "Next.js",
    applicationName: "MálagaDogParks",
    referrer: "origin-when-cross-origin",
    authors: [{ name: "Nuria", url: "https://nuriavazquez.dev" }],
    creator: "Nuria Vázquez",
    publisher: "Nuria Vázquez",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: "/",
      languages: {
        es: "/es",
        en: "/en",
        de: "/de",
        fr: "/fr",
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      type: "website",
      locale: ogLocaleMap[finalLocale],
      url: baseUrl,
      siteName: "MálagaDogParks",
      images: [
        {
          url: "/images/pets.png",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
      images: ["/images/pets.png"],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}