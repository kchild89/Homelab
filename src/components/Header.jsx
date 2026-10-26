"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Homelab", href: "/homelab" },
    { name: "About", href: "/about" },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav aria-label="Main navigation" className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap justify-between items-center gap-4">
        <Link href="/" className="text-2xl font-bold tracking-tight">Kevin’s HomeLab</Link>
        <ul className="flex flex-wrap gap-x-6 gap-y-3">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                className={`hover:text-blue-400 transition ${
                  pathname === item.href ? "text-blue-400" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
