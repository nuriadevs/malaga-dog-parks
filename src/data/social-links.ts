import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa6" // Iconos de las redes sociales
import { IconType } from "react-icons"
/**
 * Types for social media links
 */
export type SocialLink = {
  label: string
  href: string
  icon: IconType
  alt: string
}

/**
 * Social media links
 */
export const socialLinks: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/nuriadevs",
    icon: FaGithub,
    alt: "GitHub",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/nuria-vazquez",
    icon: FaLinkedin,
    alt: "LinkedIn",
  },
  {
    label: "Web",
    href: "https://nuriavazquez.dev",
    icon: FaGlobe,
    alt: "Sitio web personal",
  },
]
