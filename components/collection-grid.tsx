'use client'

import { useState } from 'react'
import { products, type Product } from '@/lib/products'
import { ProductCard } from './product-card'
import { ProductModal } from './product-modal'

export function CollectionGrid() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

  return (
    <section id="collection" className="px-6 py-24 lg:px-12 lg:py-32">
      <h2 className="mb-16 text-center font-serif text-3xl tracking-[0.1em] text-foreground md:text-4xl">
        The Collection
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:gap-8 lg:grid-cols-3">
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
