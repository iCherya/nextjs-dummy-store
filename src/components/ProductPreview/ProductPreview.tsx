import Image from 'next/image'

import { REMOTE_STORAGE } from '@/config/remoteStorage'
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
    <div className={`relative h-72 w-72 ${className}`}>
      <Image
        src={`${REMOTE_STORAGE.PRODUCTS_IMAGES}/${product.image}`}
        alt={product.name}
        fill
        style={{ objectFit: 'cover' }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={preloadImage}
      />
    </div>
  )
}
