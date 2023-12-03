import Image from 'next/image'

import type { Product } from '@/lib/definitions'

type Props = {
  product: Product
  className?: string
  width?: number
  height?: number
}

export default function ProductPreview({ product, className = '' }: Props) {
  return (
    <div className={`h-72 w-72 relative ${className}`}>
      <Image
        src={`/store/products/${product.image}`}
        alt={product.name}
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}
