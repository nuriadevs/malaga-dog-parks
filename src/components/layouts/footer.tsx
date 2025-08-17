"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation"; // ✅ Importar Link de next-intl
import { socialLinks } from "@/data/social-links";
import { contactData } from "@/data/footer-data";
import { Timestamp } from "@/components/ui/timestamp";
import { FaHeart } from "react-icons/fa";
import { NavigationLink } from "@/types/navigation";

/**
 * Footer component.
 */
export function Footer() {
  const tFooter = useTranslations("footer");
  const tAccess = useTranslations("accessibility.footer");
  const tNav = useTranslations("navigation");

  const navigationItems: NavigationLink[] = tNav.raw("links") as NavigationLink[];

  return (
    <footer
      className="border-t border-border/50 shadow-sm relative z-50"
      aria-label={tAccess("footerLabel")}
    >
      <div className="mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 lg:py-12 flex flex-col min-h-full">
        <div className="flex flex-col sm:flex-row sm:justify-between items-start gap-8 sm:gap-6 lg:gap-8 flex-grow">
          {/* Contact Section */}
          <div className="space-y-3 flex flex-col items-start sm:items-start min-w-0">
            <h3 className="text-success text-xl md:text-2xl lg:text-3xl font-semibold text-left">
              {tFooter("contact.title")}
            </h3>
            <ul className="space-y-1 text-base md:text-lg lg:text-xl text-muted-foreground text-left leading-relaxed">
              {contactData.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <item.icon className="flex-shrink-0 text-cyan-600 w-5 h-5 md:w-6 md:h-6" />
                  {item.href ? (
                    <a
                      href={item.href}
                      className={`${
                        item.type === "email" ? "break-all" : ""
                      } hover:text-cyan-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-success/50 focus:ring-offset-2 rounded-sm py-1 inline-block`}
                    >
                      {item.text}
                    </a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Links Section */}
          <div className="space-y-3 flex flex-col items-start sm:items-start min-w-0">
            <h3 className="text-success text-xl md:text-2xl lg:text-3xl font-semibold text-left">
              {tFooter("navigation.title")}
            </h3>
            <nav aria-label={tAccess("mainLinksNav")}>
              <ul className="space-y-1 text-base md:text-lg lg:text-xl text-muted-foreground text-left leading-relaxed">
                {navigationItems.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={item.href}
                      className="hover:text-cyan-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-success/50 focus:ring-offset-2 focus:ring-offset-background rounded-sm py-1 inline-block"
                    >
                      {tNav(item.labelKey)} 
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social Section */}
          <div className="space-y-3 flex flex-col items-start sm:items-start min-w-0">
            <h3 className="text-success text-xl md:text-2xl lg:text-3xl font-semibold text-left">
              {tFooter("social.title")}
            </h3>
            <nav aria-label={tAccess("socialNav")}>
              <div className="flex flex-wrap gap-6 sm:gap-2 xs:gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-foreground hover:text-cyan-600 focus:text-cyan-600 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0097b2]/50 focus:ring-offset-2 focus:ring-offset-background rounded-full p-2 sm:p-2.5 md:p-3 flex items-center justify-start touch-manipulation"
                  >
                    <link.icon
                      className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8"
                      aria-hidden="true"
                    />
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 text-center mt-auto pt-8 lg:pt-12 border-t border-border/50">
          <span className="text-muted-foreground text-sm md:text-base leading-relaxed flex items-center gap-2 flex-wrap justify-center">
            © <Timestamp /> {tFooter("copyright.developedWith")}
            <FaHeart
              className="text-red-500 animate-pulse w-4 h-4"
              aria-label={tAccess("loveLabel")}
            />
            {tFooter("copyright.by")}
            <span className="font-semibold text-foreground">
              {tFooter("copyright.author")}
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}