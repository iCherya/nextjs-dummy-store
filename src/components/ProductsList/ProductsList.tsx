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
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product, index) => (
        <li
          key={product.id}
          className="shadow-md hover:shadow-xl transition-all duration-200 ease-in-out overflow-hidden"
        >
          <Link
            href={`/products/${product.id}`}
            className="flex flex-col items-center"
          >
            <ProductPreview product={product} preloadImage={index === 0} />
            <p className="text-center text-lg m-2">{product.name}</p>
          </Link>
        </li>
      ))}
    </ul>
  )
}
