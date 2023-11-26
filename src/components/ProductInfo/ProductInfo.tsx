import type { Product } from '@/lib/definitions'

type Props = {
  product: Product
}

export default function ProductInfo({ product }: Props) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>{product.price}</p>
      {product.amount < 1 && <p>Out of stock</p>}
      {product.amount > 0 && <button>Buy now</button>}
    </div>
  )
}
