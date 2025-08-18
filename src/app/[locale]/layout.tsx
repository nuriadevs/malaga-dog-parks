import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { generateRootMetadata } from "@/lib/metadata";
import { fontConfig } from "@/lib/fonts";
import { Locale } from "@/i18n/routing";
import "@/styles/globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";
import { Footer } from "@/components/layouts/footer";
import { Header } from "@/components/layouts/header";
import CookieConsent from "@/components/ui/cookie-consent";
import type { Metadata } from "next";



export async function generateMetadata({ 
  params 
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  return generateRootMetadata({ params });
}


export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const messages = await getMessages({ locale });

  

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${fontConfig.className} min-h-screen flex flex-col`}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
              {children}
            
            <Footer />
          </ThemeProvider>
          <CookieConsent />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
