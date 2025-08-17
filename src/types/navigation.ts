import { routing } from "@/i18n/routing";


// Extract the pathnames from the routing configuration
type Pathname = keyof typeof routing.pathnames;

export interface NavigationLink {
  key: string;
  href: Pathname;
  labelKey: string;
}

export interface ThemeOption {
  key: string;
  value: string;
  label: string;
}
