"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/* Provider for theme context */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}