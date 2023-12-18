import Image from 'next/image'

import PostsList from '@/components/Blog/PostsList/PostsList'
import CommentsList from '@/components/Comments/CommentsList'
import ProductsList from '@/components/ProductsList/ProductsList'
import Content from '@/components/UI/Content/Content'
import Heading from '@/components/UI/Heading/Heading'
import Section from '@/components/UI/Section/Section'
import { REMOTE_STORAGE } from '@/config/remoteStorage'

export default function Home() {
  return (
    <Content>
      <Section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="lg:col-span-1">
          <Heading type={1}>Welcome to Whimsy Wonders</Heading>
          <p className="text-xl">
            At Whimsy Wonders, we believe that life is just too serious, and
            sometimes, you need a little dose of the absurd to brighten your
            day. Our e-commerce store is a treasure trove of utterly useless
            products that serve no practical purpose but are guaranteed to
            tickle your funny bone and spark joy in the most unexpected ways.
          </p>
        </div>
        <Image
          src={`${REMOTE_STORAGE.ASSETS}/hero.webp`}
          alt="Whimsy Wonders"
          width={400}
          height={250}
          priority
          className="m-2 mx-auto rounded-md shadow-md lg:col-span-1"
        />
      </Section>

      <Section>
        <Heading type={2}>Featured Uselessness</Heading>
        <ProductsList size={6} />
      </Section>

      <Section>
        <Heading type={2}>Absurdity Blog</Heading>
        <PostsList size={4} />
      </Section>

      <Section>
        <Heading type={2}>Whimsy Wonders Community</Heading>
        <CommentsList size={12} />
      </Section>
    </Content>
  )
}
