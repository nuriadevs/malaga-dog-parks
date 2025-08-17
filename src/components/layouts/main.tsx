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
  ariaLabel = "" 
}: MainProps) => {
  const t = useTranslations("accessibility");
  
  const finalAriaLabel = ariaLabelKey ? t(ariaLabelKey) : ariaLabel;
  
  return (
    <main
      className={`flex flex-col justify-start
             w-full  
             mx-auto 
             px-3 xs:px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
             py-8 sm:py-12 lg:py-16 xl:py-20 
            
              ${className}`}
      aria-label={finalAriaLabel}
    >
      {children}
    </main>
  );
};