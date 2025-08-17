"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { SettingsPanel } from "@/components/ui/settings-panel";
import { FaPaw } from "react-icons/fa6";
import { DesktopNav } from "@/components/layouts/nav-desktop";
import { MobileNav } from "@/components/layouts/nav-mobile";
import { TextSizeDropdown } from "@/components/ui/font-size-controls";
import { ModeToggle } from "@/components/ui/model-toggle";
import { LanguageSwitch } from "@/components/ui/language-switch";

/**
 * Header component.
 */
export function Header() {
  const tAccess = useTranslations("accessibility.header");

  return (
    <header
      className="sticky top-0 z-40 w-full 
            border-b border-border/50 backdrop-blur-md bg-background/80
            shadow-sm transition-all duration-300"
      aria-label={tAccess("headerLabel")}
    >
      <div className="w-full max-w-screen-4xl mx-auto">
        <div
          className="flex items-center justify-between
                 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
                 py-3 sm:py-4 md:py-5"
        >
          {/* Logo/ Main Title */}
          <div className="flex-1 flex items-center space-x-2 sm:space-x-5">
            <Link
              href="/"
              aria-label={tAccess("logoLabel")}
              className="flex items-center text-color-verde 
                     focus:outline-none focus:ring-2 focus:ring-cyan-600
                     focus:ring-offset-2 rounded-lg p-1"
            >
              <FaPaw className="mr-3 text-cyan-600 text-2xl" />
              <span className="text-2xl font-bold">MálagaDogParks</span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden lg:flex flex-1 justify-end mr-6">
            <DesktopNav />
            {/* Visible only from lg onwards (1024px+) */}
            <div className="hidden lg:flex items-center space-x-4 ml-2">
              <TextSizeDropdown />
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