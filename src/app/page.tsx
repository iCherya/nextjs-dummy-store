import Image from 'next/image'
import ProductsList from '@/components/ProductsList/ProductsList'

import Content from '@/components/UI/Content/Content'
import Divider from '@/components/UI/Divider/Divider'
import Heading from '@/components/UI/Heading/Heading'

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

      <section className="px-5 py-5">
        <Heading type={2}>Featured Uselessness</Heading>
        <ProductsList size={6} />
      </section>

      <Divider />

      <section className="px-5 py-5">
        <Heading type={2}>Absurdity Blog</Heading>
        <p className="text-xl text-center">
          We are currently working on our blog. Check back soon!
        </p>
      </section>

      <Divider />

      <section className="px-5 py-5">
        <Heading type={2}>Whimsy Wonders Community</Heading>

        <div></div>
      </section>
    </Content>
  )
}
