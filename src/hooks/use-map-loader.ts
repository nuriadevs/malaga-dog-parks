"use client";
import { useRef, useEffect } from "react";
import { useLocale } from "next-intl";

/**
 * Custom hook to load a map iframe based on the current locale.
 */
export function useMapLoader() {
  const locale = useLocale();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      iframeRef.current.src = `/maps/parqueCanino_${locale}.html`;
    }
  }, [locale]);

  return {
    iframeRef
  };
}