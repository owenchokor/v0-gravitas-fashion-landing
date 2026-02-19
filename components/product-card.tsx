'use client'

import Image from 'next/image'
import type { Product } from '@/lib/products'
import { formatPrice } from '@/lib/products'

interface ProductCardProps {
  product: Product
  onQuickAdd: (product: Product) => void
}

export function ProductCard({ product, onQuickAdd }: ProductCardProps) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onQuickAdd(product)
            }}
            className="mb-6 border border-foreground bg-foreground px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground"
          >
            Quick Add
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between">
        <h3 className="text-sm tracking-wide text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
      </div>
    </div>
  )
}
