'use client'

import { useEffect, useState } from 'react'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/lib/cart-context'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { totalItems, setIsCartOpen } = useCart()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-6 py-5 lg:px-12">
        <a href="#" className="font-serif text-xl tracking-widest text-foreground">
          GRAVITAS
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#collection"
            className="hidden text-xs tracking-widest uppercase text-foreground/70 hover:text-foreground transition-colors duration-300 md:block"
          >
            Collection
          </a>
          <a
            href="#philosophy"
            className="hidden text-xs tracking-widest uppercase text-foreground/70 hover:text-foreground transition-colors duration-300 md:block"
          >
            About
          </a>
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative text-foreground hover:text-foreground/70 transition-colors duration-300"
            aria-label="Open cart"
          >
            <ShoppingBag className="size-5" strokeWidth={1.5} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 flex size-4 items-center justify-center bg-foreground text-primary-foreground text-[10px] font-medium">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  )
}
