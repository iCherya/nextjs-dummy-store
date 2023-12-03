import { getProducts } from '@/lib/api/shop'
import Link from 'next/link'
import ProductPreview from '../ProductPreview/ProductPreview'

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
      {products.map((product) => (
        <li key={product.id}>
          <Link
            href={`/products/${product.id}`}
            className="flex p-2 flex-col items-center shadow-md hover:shadow-xl transition-all duration-200 ease-in-out border overflow-hidden"
          >
            <ProductPreview product={product} />
            <p className="text-center p-3 text-lg">{product.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
