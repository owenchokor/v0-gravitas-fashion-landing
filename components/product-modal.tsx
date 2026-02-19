'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'
import type { Product } from '@/lib/products'
import { formatPrice } from '@/lib/products'
import { useCart } from '@/lib/cart-context'
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog'

interface ProductModalProps {
  product: Product | null
  onClose: () => void
}

export function ProductModal({ product, onClose }: ProductModalProps) {
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [sizeError, setSizeError] = useState(false)
  const [added, setAdded] = useState(false)
  const { addItem, setIsCartOpen } = useCart()

  const handleAddToCart = () => {
    if (!product) return
    if (!selectedSize) {
      setSizeError(true)
      return
    }
    addItem(product, selectedSize)
    setAdded(true)
    setTimeout(() => {
      setAdded(false)
      setSelectedSize(null)
      onClose()
      setIsCartOpen(true)
    }, 600)
  }

  const handleClose = () => {
    setSelectedSize(null)
    setSizeError(false)
    setAdded(false)
    onClose()
  }

  if (!product) return null

  return (
    <Dialog open={!!product} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent
        showCloseButton={false}
        className="max-w-3xl gap-0 overflow-hidden border border-border bg-background p-0 sm:max-w-3xl"
      >
        <DialogTitle className="sr-only">{product.name}</DialogTitle>
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square bg-secondary md:aspect-auto md:min-h-[480px]">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-between p-8 md:p-10">
            <div>
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-foreground/50 hover:text-foreground transition-colors duration-300 z-10"
                aria-label="Close"
              >
                <X className="size-5" strokeWidth={1.5} />
              </button>
              <h2 className="font-serif text-2xl tracking-wide text-foreground">
                {product.name}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {formatPrice(product.price)}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-foreground/70">
                {product.description}
              </p>
              <div className="mt-8">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  Size
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => {
                        setSelectedSize(size)
                        setSizeError(false)
                      }}
                      className={`flex h-10 w-12 items-center justify-center border text-xs tracking-wider transition-all duration-300 ${
                        selectedSize === size
                          ? 'border-foreground bg-foreground text-primary-foreground'
                          : 'border-border text-foreground hover:border-foreground'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {sizeError && (
                  <p className="mt-2 text-xs text-destructive">
                    Please select a size
                  </p>
                )}
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              className="mt-8 w-full border border-foreground bg-foreground py-3.5 text-xs tracking-[0.15em] uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground"
            >
              {added ? 'Added' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
