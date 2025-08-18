"use client";
import { ReactNode } from "react";
import { useTranslations } from "next-intl";

interface MainProps {
  children: ReactNode;
  className?: string;
  ariaLabelKey?: string;
  ariaLabel?: string;
}

export const Main = ({
  children,
  className = "",
  ariaLabelKey,
  ariaLabel = "",
}: MainProps) => {
  const t = useTranslations("accessibility");

  const finalAriaLabel = ariaLabelKey ? t(ariaLabelKey) : ariaLabel;

  return (
    <main
      className={`flex-grow 
            
              ${className}`}
      aria-label={finalAriaLabel}
    >
      {children}
    </main>
  );
};
