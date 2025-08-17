import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

// Plugin next-intl que configura automáticamente la internacionalización
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  /* config options here */

    // Force traditional metadata behavior for bots and auditing tools
    htmlLimitedBots: /bot|crawl|spider|lighthouse|twitterbot|facebookexternalhit|discordbot|slackbot|linkedinbot|whatsapp|telegram/i
  
};


export default withNextIntl(nextConfig);
