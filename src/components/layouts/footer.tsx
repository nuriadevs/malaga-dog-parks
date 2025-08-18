"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { socialLinks } from "@/data/social-links";
import { contactData } from "@/data/footer-data";
import { Timestamp } from "@/components/ui/timestamp";
import { FaHeart, FaLongArrowAltLeft } from "react-icons/fa";
import { NavigationLink } from "@/types/navigation";
import { FaPaw } from "react-icons/fa6";

/**
 * Footer component.
 */
export function Footer() {
  const tFooter = useTranslations("footer");
  const t = useTranslations("homepage");
  const tAccess = useTranslations("accessibility.footer");
  const tNav = useTranslations("navigation");

  const navigationItems: NavigationLink[] = tNav.raw(
    "links"
  ) as NavigationLink[];

  return (
    <footer aria-label={tAccess("footerLabel")}>
      <div className="flex mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl  ">
        {/* Main Content */}
        <div className="border-t py-10 sm:py-12 lg:py-16 w-full">
          <div className=" flex flex-col md:flex-row md:justify-between md:items-start gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
            {/* Logo */}
            <div className="md:w-80 md:flex-shrink-0 space-y-6">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-card border rounded-lg flex items-center justify-center">
                <FaPaw className="text-cyan-600" aria-hidden="true" />
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                {t("subtitle")}
              </p>
              {/* Social Links */}
              <nav aria-label={tAccess("socialNav")}>
                <ul className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={link.label}
                        className="text-muted-foreground hover:text-cyan-600 focus:text-cyan-600 transition-all duration-200 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0097b2]/50 focus:ring-offset-2 focus:ring-offset-background rounded-full flex items-center justify-center"
                      >
                        <link.icon className="w-5 h-5 md:w-6 md:h-6" />
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Links Section */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-cyan-600 font-semibold text-lg md:text-22xl lg:text-2xl">
                {tFooter("navigation.title")}
              </h3>
              <nav aria-label={tAccess("mainLinksNav")}>
                <ul className="space-y-3">
                  {navigationItems.map((item) => (
                    <li
                      key={item.key}
                      className="min-h-[28px] flex items-center"
                    >
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-cyan-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-success/50 focus:ring-offset-2 focus:ring-offset-background rounded-sm py-1 inline-block leading-normal text-sm sm:text-base"
                      >
                        {tNav(item.labelKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Section */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-cyan-600 font-semibold text-lg md:text-22xl lg:text-2xl">
                {tFooter("contact.title")}
              </h3>
              <ul className="space-y-3">
                {contactData.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 min-h-[28px]"
                  >
                    <item.icon className="flex-shrink-0 text-cyan-600 w-5 h-5" />
                    <div className="min-w-0 flex-1">
                      {item.href ? (
                        <a
                          href={item.href}
                          className={`text-muted-foreground hover:text-cyan-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-success/50 focus:ring-offset-2 rounded-sm py-1 inline-block leading-normal ${
                            item.type === "email" ? "break-all" : ""
                          }`}
                        >
                          {item.text}
                        </a>
                      ) : (
                        <span className="text-muted-foreground leading-normal text-sm sm:text-base">
                          {item.text}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer bottom */}
          <div className="border-t py-6 sm:py-8 mt-10 sm:mt-12 lg:mt-16">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-muted-foreground text-sm sm:text-base flex items-center gap-1 text-center sm:text-left">
                © <Timestamp /> {tFooter("copyright.developedWith")}
                <FaHeart
                  className="text-red-500 animate-pulse w-4 h-4"
                  aria-label={tAccess("loveLabel")}
                />
                {tFooter("copyright.by")}
                <span className="font-semibold text-foreground">
                  {tFooter("copyright.author")}
                </span>
              </p>
              <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6 lg:gap-8">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Privacidad
                </Link>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Términos
                </Link>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-cyan-600 transition-colors"
                >
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
