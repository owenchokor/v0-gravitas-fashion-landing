'use client'

import { CartProvider } from '@/lib/cart-context'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { CollectionGrid } from '@/components/collection-grid'
import { Philosophy } from '@/components/philosophy'
import { Footer } from '@/components/footer'
import { CartDrawer } from '@/components/cart-drawer'

export default function Home() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <CollectionGrid />
        <Philosophy />
      </main>
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
