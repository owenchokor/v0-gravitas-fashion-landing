'use client'

import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'
import { useCart } from '@/lib/cart-context'
import { formatPrice } from '@/lib/products'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet'

export function CartDrawer() {
  const {
    items,
    removeItem,
    updateQuantity,
    subtotal,
    isCartOpen,
    setIsCartOpen,
  } = useCart()

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent side="right" className="flex w-full flex-col border-l border-border bg-background p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 py-5">
          <SheetTitle className="font-serif text-lg tracking-wide text-foreground">
            Cart
          </SheetTitle>
          <SheetDescription className="sr-only">
            Your shopping cart items
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6">
            <p className="font-serif text-lg text-foreground/40">
              Your cart is empty.
            </p>
            <p className="mt-2 text-xs tracking-wide text-muted-foreground">
              Begin with intention.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="flex flex-col gap-6">
                {items.map((item) => (
                  <div
                    key={`${item.product.id}-${item.size}`}
                    className="flex gap-4"
                  >
                    <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-secondary">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-sm text-foreground">
                            {item.product.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            Size: {item.size}
                          </p>
                        </div>
                        <button
                          onClick={() =>
                            removeItem(item.product.id, item.size)
                          }
                          className="text-foreground/40 hover:text-foreground transition-colors duration-300"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <X className="size-4" strokeWidth={1.5} />
                        </button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-border">
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity - 1
                              )
                            }
                            className="flex size-7 items-center justify-center text-foreground/60 hover:text-foreground transition-colors duration-300"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="size-3" strokeWidth={1.5} />
                          </button>
                          <span className="flex w-8 items-center justify-center text-xs text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(
                                item.product.id,
                                item.size,
                                item.quantity + 1
                              )
                            }
                            className="flex size-7 items-center justify-center text-foreground/60 hover:text-foreground transition-colors duration-300"
                            aria-label="Increase quantity"
                          >
                            <Plus className="size-3" strokeWidth={1.5} />
                          </button>
                        </div>
                        <p className="text-sm text-foreground">
                          {formatPrice(item.product.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-border px-6 py-6">
              <div className="flex items-center justify-between">
                <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  Subtotal
                </p>
                <p className="text-sm text-foreground">{formatPrice(subtotal)}</p>
              </div>
              <button className="mt-6 w-full border border-foreground bg-foreground py-3.5 text-xs tracking-[0.15em] uppercase text-primary-foreground transition-all duration-300 hover:bg-transparent hover:text-foreground">
                Checkout
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
