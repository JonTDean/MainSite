"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigationLinks } from "@/config/navigation"
import { cn } from "@/lib/utils"

/**
 * Navbar Component
 * 
 * @component
 * @description A responsive navigation bar component that displays the main navigation links
 * and highlights the current active route. The navbar is sticky and includes a subtle
 * backdrop blur effect.
 * 
 * Features:
 * - Responsive design
 * - Active link highlighting
 * - Sticky positioning
 * - Backdrop blur effect
 * 
 * @example
 * ```tsx
 * // In your layout or page component:
 * import { Navbar } from "@/components/navbar/Navbar"
 * 
 * export default function Layout() {
 *   return (
 *     <>
 *       <Navbar />
 *       { Other content }
 *     </>
 *   )
 * }
 * ```
 */
export function Navbar() {
  // Get current pathname for active link highlighting
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 py-4 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 items-center max-w-screen-xl px-6">
        <div className="flex w-full justify-center">
          {/* Navigation Links */}
          <ul className="flex items-center gap-6">
            {navigationLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  <span className="flex flex-col items-center gap-1">
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}