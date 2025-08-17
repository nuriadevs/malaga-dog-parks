"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation"; // ← USAR TUS UTILIDADES
import { useState, useTransition } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "de", name: "Deutschland", flag: "🇩🇪" },
  { code: "fr", name: "France", flag: "🇫🇷" },
];

/**
 * Language switcher component.
 */
export function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname(); 
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
      setIsOpen(false);
    });
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          disabled={isPending}
          className="flex items-center space-x-2 px-3 py-2 bg-input/30 hover:bg-muted/50 focus:ring-2 focus:ring-cyan-600 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50"
        >
          <span className="text-base">{currentLanguage?.flag}</span>
          <span className="text-sm font-medium">{currentLanguage?.name}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48" align="end" sideOffset={8}>
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center space-x-3 px-4 py-2 cursor-pointer transition-colors duration-150 ${
              locale === language.code
                ? "bg-cyan-50 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300 font-medium"
                : "text-foreground hover:bg-muted/50"
            }`}
          >
            <span className="text-lg">{language.flag}</span>
            <span>{language.name}</span>
            {locale === language.code && (
              <div className="ml-auto w-2 h-2 bg-cyan-600 rounded-full"></div>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}