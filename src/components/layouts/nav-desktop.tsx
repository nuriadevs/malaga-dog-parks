"use client";

import { useTranslations } from "next-intl";
import { NavigationLink } from "@/types/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";
import { useEffect, useState } from "react";



export const DesktopNav = () => {
  const tNav = useTranslations("navigation");
  const pathname = usePathname();
  const [enabled, setEnabled] = useState(false);

  const navigationItems: NavigationLink[] = tNav.raw("links") as NavigationLink[];


  useEffect(() => {
    setEnabled(true);
  }, []);

  useKeyboardNavigation({
    enabled,
    selector: "[data-desktop-nav-link]",
    orientation: "horizontal",
  });

  return (
    <>
      <nav aria-label={tNav("mainNav")} className="flex items-center">
        <ul className="flex items-center space-x-6 lg:space-x-4">
          {navigationItems.map((item: NavigationLink) => {
            const isActive = pathname === item.href;
            const label = tNav(item.labelKey); 

            return (
              <li key={item.key}>
                <Link
                  href={item.href}
                  data-desktop-nav-link
                  aria-current={isActive ? "page" : undefined}
                  className={`
      px-3 py-2 text-lg font-medium rounded-lg
      transition-colors duration-300 ease-in-out
      focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2
      ${
        isActive
          ? "text-cyan-600 bg-muted/50 font-semibold"
          : "text-foreground/80 hover:text-cyan-600 hover:bg-muted/50"
      }
    `}
                >
                  {label}
                  {isActive && (
                    <span className="sr-only"> {tNav("currentPage")}</span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};