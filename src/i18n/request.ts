import { getRequestConfig } from 'next-intl/server';
import { routing, Locale } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Use defaultLocale if locale is undefined (normal during hydration)
  const resolvedLocale = locale || routing.defaultLocale;

  // Only validate if the resolved locale is supported
  const finalLocale = routing.locales.includes(resolvedLocale as Locale)
    ? resolvedLocale
    : routing.defaultLocale;

  try {
    const messages = (await import(`../messages/${finalLocale}.json`)).default;
    return {
      locale: finalLocale,
      messages,
      timeZone: 'Europe/Madrid',
      now: new Date(),
    };
  } catch (error) {
    console.error(`Error cargando mensajes para ${finalLocale}:`, error);
    const fallbackMessages = (await import(`../messages/${routing.defaultLocale}.json`)).default;
    return {
      locale: routing.defaultLocale,
      messages: fallbackMessages,
      timeZone: 'Europe/Madrid',
      now: new Date(),
    };
  }
});