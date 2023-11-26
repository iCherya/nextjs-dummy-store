import { getProducts } from '@/lib'
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
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            <ProductPreview product={product} />
            {product.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
