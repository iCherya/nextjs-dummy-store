import Content from '@/components/UI/Content/Content'
import Heading from '@/components/UI/Heading/Heading'
import Posts from '@/components/Blog/PostsList/PostsList'

export default function Page() {
  return (
    <Content>
      <Heading type={1}>Blog</Heading>

      <Posts />
    </Content>
  )
}
