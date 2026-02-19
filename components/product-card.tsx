'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Product } from '@/lib/products'
import { formatPrice } from '@/lib/products'

interface ProductCardProps {
  product: Product
  onQuickAdd: (product: Product) => void
}

export function ProductCard({ product, onQuickAdd }: ProductCardProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrentImage((prev) => (prev + 1) % product.images.length)
    },
    [product.images.length]
  )

  const prevImage = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      setCurrentImage((prev) =>
        prev === 0 ? product.images.length - 1 : prev - 1
      )
    },
    [product.images.length]
  )

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        {product.images.map((img, i) => (
          <Image
            key={img}
            src={img}
            alt={`${product.name} - image ${i + 1}`}
            fill
            className={`object-cover transition-all duration-700 ${
              i === currentImage ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
            }`}
            sizes="(max-width: 768px) 100vw, 33vw"
            priority={i === 0}
          />
        ))}

        {/* Carousel navigation arrows */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center bg-background/80 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-label="Previous image"
        >
          <ChevronLeft className="size-4" strokeWidth={1.5} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center bg-background/80 text-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-label="Next image"
        >
          <ChevronRight className="size-4" strokeWidth={1.5} />
        </button>

        {/* Image indicators */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentImage(i)
              }}
              className={`h-0.5 transition-all duration-300 ${
                i === currentImage
                  ? 'w-5 bg-foreground'
                  : 'w-2.5 bg-foreground/30'
              }`}
              aria-label={`View image ${i + 1}`}
            />
          ))}
        </div>

        {/* Quick Add overlay */}
        <div className="absolute inset-0 flex items-end justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <button
            onClick={(e) => {
              e.stopPropagation()
              onQuickAdd(product)
            }}
            className="mb-10 border border-foreground bg-foreground px-6 py-2.5 text-xs tracking-[0.15em] uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground"
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
