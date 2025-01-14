import { Home, User, FolderKanban, FileText, Mail, LucideIcon } from "lucide-react"

/**
 * Navigation link interface defining the structure of navigation items
 */
export interface NavigationLink {
  /** The text to display for the navigation item */
  title: string;
  /** The URL path that the link points to */
  href: string;
  /** The icon to display for the navigation item */
  icon: LucideIcon;
}

/*
 * Main navigation links for the application
 * It's designed to be extendable, so if necessary
 * I can add more links to the navigation bar.
*/
export const navigationLinks: NavigationLink[] = [
  {
    title: "Home",
    href: "/",
    icon: Home,
  },
  {
    title: "About",
    href: "/about",
    icon: User,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: FolderKanban,
  },
  {
    title: "Resume",
    href: "/resume",
    icon: FileText,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Mail,
  },
]