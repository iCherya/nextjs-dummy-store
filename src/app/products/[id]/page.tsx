import { getProductById } from '@/lib'
import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
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
    console.log('🚀 ~ Not found', product)
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
    </main>
  )
}
