import type { Product } from '@/lib/definitions'
import ProductPreview from '@/components/ProductPreview/ProductPreview'
import Button from '@/components/UI/Button/Button'
import Heading from '@/components/UI/Heading/Heading'

type Props = {
  product: Product
}

export default function ProductInfo({ product }: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-white shadow-md rounded-lg p-6">
      <div className="w-full md:w-1/2">
        <ProductPreview
          preloadImage
          product={product}
          className="border rounded-3xl w-full h-96 object-cover overflow-hidden"
        />
      </div>
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
        <Heading type={1}>{product.name}</Heading>
        <p className="text-lg text-gray-700 mt-2">{product.description}</p>
        <p className="text-xl text-gray-900 mt-2 font-bold">{product.price}</p>
        {product.amount < 1 && (
          <p className="text-red-600 mt-2">Out of stock</p>
        )}
        {product.amount > 0 && <Button text="Add to cart" className="mt-4" />}
      </div>
    </div>
  )
}
