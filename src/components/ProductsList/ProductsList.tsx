import Link from 'next/link'

import ProductPreview from '@/components/ProductPreview/ProductPreview'
import { getProducts } from '@/lib/api/shop'

type Props = {
  size?: number
}

export default async function ProductsList({ size }: Props) {
  const products = await getProducts(size)

  // Add Suspense with a Skeleton component in future
  if (!products) {
    return 'Loading...'
  }

  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product, index) => (
        <li
          key={product.id}
          className="overflow-hidden shadow-md transition-all duration-200 ease-in-out hover:shadow-xl"
        >
          <Link
            href={`/products/${product.id}`}
            className="flex flex-col items-center"
          >
            <ProductPreview product={product} preloadImage={index === 0} />
            <p className="m-2 text-center text-lg">{product.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
