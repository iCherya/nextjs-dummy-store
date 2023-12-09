import Image from 'next/image'

import type { Product } from '@/lib/definitions'

type Props = {
  product: Product
  className?: string
  preloadImage?: boolean
}

export default function ProductPreview({
  product,
  preloadImage = false,
  className = '',
}: Props) {
  return (
    <div className={`h-72 w-72 relative ${className}`}>
      <Image
        src={`/store/products/${product.image}`}
        alt={product.name}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={preloadImage}
      />
    </div>
  )
}
