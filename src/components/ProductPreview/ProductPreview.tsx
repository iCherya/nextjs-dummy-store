import Image from 'next/image'

import type { Product } from '@/lib/definitions'

type Props = {
  product: Product
}

export default function ProductPreview({ product }: Props) {
  return (
    <Image
      src={`/store/products/${product.image}`}
      alt={product.name}
      width={400}
      height={400}
    />
  )
}
