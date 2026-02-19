'use client'

import { useState } from 'react'
import { products, type Product } from '@/lib/products'
import { ProductCard } from './product-card'
import { ProductModal } from './product-modal'

export function CollectionGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section id="collection" className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mb-16 text-center">
        <h2 className="font-serif text-3xl tracking-[0.1em] text-foreground md:text-4xl">
          GRAVITAS 01.
        </h2>
        <p className="mt-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
          2026 Spring Season
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onQuickAdd={setSelectedProduct}
          />
        ))}
      </div>
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  )
}
