"use client";

import { useState, useRef, useEffect } from "react";
import { NavigationLink } from "@/types/navigation";
import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { MenuIcon, X } from "lucide-react";
import { FaPaw } from "react-icons/fa6";
import { Timestamp } from "@/components/ui/timestamp";
import { useKeyboardNavigation } from "@/hooks/use-keyboard-navigation";

/**
 * Mobile navigation component.
 * @returns {JSX.Element}
 */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [announcementText, setAnnouncementText] = useState("");
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const tNav = useTranslations("navigation");
  const tNameApp = useTranslations("app");

  const navigationItems: NavigationLink[] = tNav.raw(
    "links"
  ) as NavigationLink[];

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => firstLinkRef.current?.focus(), 100);
      setAnnouncementText(tNav("menuOpened"));
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      setAnnouncementText(tNav("menuClosed"));
      setTimeout(() => triggerRef.current?.focus(), 100);
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, tNav]);

  const closeDrawer = () => setIsOpen(false);

  useKeyboardNavigation({
    enabled: isOpen,
    selector: "[data-mobile-nav-link]",
    onEscape: closeDrawer,
  });

  return (
    <>
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        {announcementText}
      </div>

      <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <button
            ref={triggerRef}
            className="p-2 hover:bg-muted/50 rounded-lg transition-colors duration-200
                 focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
            aria-label={isOpen ? tNav("closeMenu") : tNav("openMenu")}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <MenuIcon
              size={24}
              className="text-foreground"
              aria-hidden="true"
            />
          </button>
        </DrawerTrigger>

        <DrawerContent
          className="h-full w-[280px] fixed right-0 top-0"
          aria-labelledby="mobile-nav-title"
        >
          <div className="flex flex-col h-full bg-background border-l border-border">
            {/* Header */}
            <DrawerHeader>
              <DrawerTitle className="sr-only">
                {tNav("mainNav")}
              </DrawerTitle>
              <div className="flex justify-end p-4">
                <DrawerClose asChild>
                  <button
                    className="p-2 hover:bg-muted/50 rounded-lg transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2"
                    aria-label={tNav("closeMenu")}
                  >
                    <X
                      size={20}
                      className="text-muted-foreground"
                      aria-hidden="true"
                    />
                  </button>
                </DrawerClose>
              </div>
            </DrawerHeader>

            {/* Navigation */}
            <nav
              className="flex-1 px-4 py-2"
              aria-label={tNav("mobileNav")}
              id="mobile-navigation"
            >
              <ul className="space-y-2">
                {navigationItems.map((item: NavigationLink, index: number) => {
                  const isActive = pathname === item.href;
                  const isFirst = index === 0;
                  const label = tNav(item.labelKey);

                  return (
                    <li key={item.key}>
                      <Link
                        ref={isFirst ? firstLinkRef : null}
                        href={item.href}
                        onClick={closeDrawer}
                        aria-current={isActive ? "page" : undefined}
                        data-mobile-nav-link
                        tabIndex={isOpen ? 0 : -1}
                        className={`
                    flex items-center px-4 py-3 rounded-lg 
                    transition-all duration-200 font-medium
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
                          <span className="sr-only">
                            {" "}
                            {tNav("currentPage")}
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Footer */}
            <div className="p-4 border-t border-border bg-muted/20">
              <div className="flex items-center justify-center">
                <p className="text-xs text-muted-foreground flex items-center">
                  © <Timestamp />
                  <FaPaw className="mx-1 text-cyan-600" />
                  {tNameApp("title")}
                </p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}
