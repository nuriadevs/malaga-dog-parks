import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

/**
 * Utilities for localized navigation
 * These functions automatically handle the current locale
 */


export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);