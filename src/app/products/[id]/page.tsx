import { notFound } from 'next/navigation'

import { getProductById } from '@/lib'
import Content from '@/components/UI/Content/Content'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import ProductInfo from '@/components/ProductInfo/ProductInfo'

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
    <Content>
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

      <ProductInfo product={product} />
    </Content>
  )
}
