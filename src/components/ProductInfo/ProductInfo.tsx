import ProductPreview from '@/components/ProductPreview/ProductPreview'
import Button from '@/components/UI/Button/Button'
import Heading from '@/components/UI/Heading/Heading'
import type { Product } from '@/lib/definitions'

type Props = {
  product: Product
}

export default function ProductInfo({ product }: Props) {
  return (
    <div className="flex flex-col items-start justify-between rounded-lg bg-white p-6 shadow-md md:flex-row md:items-center">
      <div className="w-full md:w-1/2">
        <ProductPreview
          preloadImage
          product={product}
          className="h-96 w-full overflow-hidden rounded-3xl border object-cover"
        />
      </div>
      <div className="mt-6 w-full md:mt-0 md:w-1/2 md:pl-6">
        <Heading type={1}>{product.name}</Heading>
        <p className="mt-2 text-lg text-gray-700">{product.description}</p>
        <p className="mt-2 text-xl font-bold text-gray-900">{product.price}</p>
        {product.amount < 1 && (
          <p className="mt-2 text-red-600">Out of stock</p>
        )}
        {product.amount > 0 && <Button text="Add to cart" className="mt-4" />}
      </div>
    </div>
  )
}
