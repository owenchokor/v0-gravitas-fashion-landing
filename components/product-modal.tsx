'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
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
  const [modalImage, setModalImage] = useState(0)
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
    setModalImage(0)
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
          <div className="group/modal relative aspect-square bg-secondary md:aspect-auto md:min-h-[480px]">
            {product.images.map((img, i) => (
              <Image
                key={img}
                src={img}
                alt={`${product.name} - image ${i + 1}`}
                fill
                className={`object-cover transition-opacity duration-500 ${
                  i === modalImage ? 'opacity-100' : 'opacity-0'
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ))}
            {product.images.length > 1 && (
              <>
                <button
                  onClick={() =>
                    setModalImage((prev) =>
                      prev === 0 ? product.images.length - 1 : prev - 1
                    )
                  }
                  className="absolute left-3 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center bg-background/80 text-foreground opacity-0 transition-opacity duration-300 group-hover/modal:opacity-100"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="size-4" strokeWidth={1.5} />
                </button>
                <button
                  onClick={() =>
                    setModalImage((prev) => (prev + 1) % product.images.length)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 flex size-8 items-center justify-center bg-background/80 text-foreground opacity-0 transition-opacity duration-300 group-hover/modal:opacity-100"
                  aria-label="Next image"
                >
                  <ChevronRight className="size-4" strokeWidth={1.5} />
                </button>
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
                  {product.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setModalImage(i)}
                      className={`h-0.5 transition-all duration-300 ${
                        i === modalImage
                          ? 'w-5 bg-foreground'
                          : 'w-2.5 bg-foreground/30'
                      }`}
                      aria-label={`View image ${i + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
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
