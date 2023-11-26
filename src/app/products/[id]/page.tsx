import { notFound } from 'next/navigation'

import { getProductById } from '@/lib'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import ProductInfo from '@/components/ProductInfo/ProductInfo'
import ProductPreview from '@/components/ProductPreview/ProductPreview'

type Props = {
  params: {
    id: string
  }
}

export default async function Page({ params }: Props) {
  const id = params.id
  const product = await getProductById(id)

  if (!product) {
    return notFound()
  }

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Homepage', href: '/' },
          { label: 'Products', href: '/products' },
          {
            label: `${product?.name}`,
            href: `/products/${id}`,
            active: true,
          },
        ]}
      />
      <ProductPreview product={product} />
      <ProductInfo product={product} />
    </main>
  )
}
