import ProductsList from '@/components/ProductsList/ProductsList'
import Content from '@/components/UI/Content/Content'
import Heading from '@/components/UI/Heading/Heading'

export default function Page() {
  return (
    <Content>
      <Heading type={1}>Our Products</Heading>
      <ProductsList />
    </Content>
  )
}
