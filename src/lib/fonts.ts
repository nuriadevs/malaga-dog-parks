import { Montserrat, Fira_Code } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

/**
 * Configuration for font styles
 */
export const fontConfig = {
  className: `${montserrat.variable} ${firaCode.variable} font-sans antialiased`,
  variables: {
    montserrat: montserrat.variable,
    firaCode: firaCode.variable,
  }
};