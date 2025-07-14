"use client"

import Link from "next/link"
import LogoWrapper from "./logo-wrapper"

export function Navigation() {
  const navItems = [
    { href: "/consulting", label: "Consulting" },
    { href: "/solutions", label: "Custom Solutions" },
    { href: "/marketplace", label: "Marketplace" },
    { href: "/training", label: "Training" },
    { href: "/about", label: "About Us" },
  ]

  return (
    <header className="border-b border-gray-800 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <LogoWrapper size="header" />
              <span className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">ESHWA AI</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href} 
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
