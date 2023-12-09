import Image from 'next/image'

import Section from '@/components/UI/Section/Section'
import Content from '@/components/UI/Content/Content'
import Divider from '@/components/UI/Divider/Divider'
import Heading from '@/components/UI/Heading/Heading'

import ProductsList from '@/components/ProductsList/ProductsList'
import PostsList from '@/components/Blog/PostsList/PostsList'
import CommentsList from '@/components/Comments/CommentsList'

export default function Home() {
  return (
    <Content>
      <section className="bg-transparent text-black px-5 py-10 flex flex-wrap lg:flex-nowrap gap-5">
        <div>
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
          src="/identity/hero.webp"
          alt="Whimsy Wonders"
          width={400}
          height={250}
          priority
          className="mx-auto rounded-md shadow-md"
        />
      </section>
      <Divider />

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
