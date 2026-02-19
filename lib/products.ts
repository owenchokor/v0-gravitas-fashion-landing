export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  sizes: string[]
}

export const products: Product[] = [
  {
    id: 'structured-overcoat',
    name: 'Structured Overcoat',
    price: 890000,
    description:
      'Architectural shoulders, clean lines. A coat that enters the room before you do. Constructed from Italian double-faced wool.',
    image: '/images/structured-overcoat.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'minimal-turtleneck',
    name: 'Minimal Turtleneck',
    price: 320000,
    description:
      'The quietest luxury. Mongolian cashmere, seamless construction. Silence has never felt this soft.',
    image: '/images/minimal-turtleneck.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'tapered-trousers',
    name: 'Tapered Trousers',
    price: 420000,
    description:
      'Precision-cut from Japanese wool crepe. The silhouette narrows with intention, nothing wasted.',
    image: '/images/tapered-trousers.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'drape-shirt',
    name: 'Drape Shirt',
    price: 280000,
    description:
      'Fluid silk-cotton blend. Falls without trying. For those who understand that ease is earned.',
    image: '/images/drape-shirt.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'heavy-knit-vest',
    name: 'Heavy Knit Vest',
    price: 360000,
    description:
      'Hand-loomed chunky gauge. Weight you feel but never carry. Each stitch placed with calm deliberation.',
    image: '/images/heavy-knit-vest.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
  {
    id: 'wide-leg-trousers',
    name: 'Wide Leg Trousers',
    price: 460000,
    description:
      'Volume with restraint. A flowing silhouette grounded in structure. Moves like you mean it.',
    image: '/images/wide-leg-trousers.jpg',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
  },
]

export function formatPrice(price: number): string {
  return `\u20A9${price.toLocaleString('ko-KR')}`
}
