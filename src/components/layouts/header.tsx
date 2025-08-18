"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { SettingsPanel } from "@/components/ui/settings-panel";
import { FaPaw } from "react-icons/fa6";
import { DesktopNav } from "@/components/layouts/nav-desktop";
import { MobileNav } from "@/components/layouts/nav-mobile";
import { ModeToggle } from "@/components/ui/model-toggle";
import { LanguageSwitch } from "@/components/ui/language-switch";

/**
 * Header component.
 */
export function Header() {
  const tAccess = useTranslations("accessibility.header");

  return (
    <header
      className="sticky top-0 z-50 w-full 
            border-b border-border/50 backdrop-blur-md bg-background/80
            shadow-sm transition-all duration-300"
      aria-label={tAccess("headerLabel")}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">
          {/* Logo/ Main Title */}
          <div className="flex-1 flex items-center space-x-2 sm:space-x-5">
            <Link
              href="/"
              aria-label={tAccess("logoLabel")}
              className="flex items-center
                     focus:outline-none focus:ring-2 focus:ring-cyan-600
                     focus:ring-offset-2 rounded-lg p-1"
            >
              <FaPaw className="mr-3 text-cyan-600 text-2xl" />
              <span className=" hidden sm:inline-block text-base  md:text-l lg:text-xl xl:text-2xl font-medium text-foreground leading-tight tracking-tight">
                MálagaDogParks
              </span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden lg:flex flex-1 justify-end mr-6">
            <DesktopNav />
            {/* Visible only from lg onwards (1024px+) */}
            <div className="hidden lg:flex items-center space-x-2 ml-4">
              <ModeToggle />
              <LanguageSwitch />
            </div>
          </div>

          {/* User Controls */}
          <div
            className="flex items-center space-x-2 sm:space-x-3"
            role="toolbar"
            aria-label={tAccess("navigationToolbar")}
          >
            {/* Mobile Navigation - visible until lg */}
            <div className="lg:hidden">
              <MobileNav />
            </div>

            {/* Settings - mobile and tablet only */}
            <div className="lg:hidden">
              <SettingsPanel />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
