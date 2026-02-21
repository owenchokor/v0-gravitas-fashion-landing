export interface Product {
  id: string
  name: string
  price: number
  description: string
  images: string[]
  sizes: string[]
}

export const products: Product[] = [
  {
    id: 'gravity-grey',
    name: 'GRAVITY GREY.',
    price: 66700,
    description:
      'Architectural shoulders, clean lines. Constructed from Italian double-faced wool with a muted grey palette.',
    images: [
      '/images/gravity-grey-1.jpg',
      '/images/gravity-grey-2.jpg',
      '/images/gravity-grey-3.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'orbit-ecru',
    name: 'ORBIT ECRU.',
    price: 66700,
    description:
      'Fluid linen-blend. Falls without trying. For those who understand that ease is earned.',
    images: [
      '/images/orbit-ecru-1.jpg',
      '/images/orbit-ecru-2.jpg',
      '/images/orbit-ecru-3.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 'event-black',
    name: 'EVENT BLACK.',
    price: 66700,
    description:
      'Precision-tailored. The silhouette commands attention with intention, nothing wasted.',
    images: [
      '/images/event-black-1.jpg',
      '/images/event-black-2.jpg',
      '/images/event-black-3.jpg',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
]

export function formatPrice(price: number): string {
  return `\u20A9${price.toLocaleString('ko-KR')}`
}
