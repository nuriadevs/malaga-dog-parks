import { icons } from "@/data/icons";

export interface ContactItem {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  href?: string;
  text: string;
  type?: 'email' | 'phone' | 'address';
}

export const contactData: ContactItem[] = [
  {
    icon: icons.email,
    href: "mailto:info@loremipsum.com",
    text: "info@loremipsum.com",
    type: 'email'
  },
  {
    icon: icons.phone,
    href: "tel:+000000",
    text: "000 00 00 00",
    type: 'phone'
  },
  {
    icon: icons.location,
    text: "Málaga, España",
    type: 'address'
  }
];