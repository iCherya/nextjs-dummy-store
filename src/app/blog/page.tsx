import Posts from '@/components/Blog/PostsList/PostsList'
import Content from '@/components/UI/Content/Content'
import Heading from '@/components/UI/Heading/Heading'

export default function Page() {
  return (
    <Content>
      <Heading type={1}>Blog</Heading>
      <Posts />
    </Content>
  )
}
