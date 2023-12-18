import Image from 'next/image'

import Content from '@/components/UI/Content/Content'
import Heading from '@/components/UI/Heading/Heading'
import { REMOTE_STORAGE } from '@/config/remoteStorage'

export default function Page() {
  return (
    <Content>
      <Heading type={1}>About us</Heading>

      <Image
        src={`${REMOTE_STORAGE.ASSETS}/logo_562x119.png`}
        width={562}
        height={119}
        alt="Whimsy Wonders Logo"
        className="float-right p-5"
      />

      <article>
        <p className="my-5 text-xl">
          Welcome to <span className="font-bold">Whimsy Wonders</span>, where
          the pursuit of the pointless is an art form! Our mission is to bring
          joy, laughter, and a touch of absurdity into your life through a
          collection of wonderfully useless products.
        </p>

        <p className="my-5 text-xl">
          At Whimsy Wonders, we believe in the power of whimsy to brighten your
          day. Our curated selection of products defies convention and embraces
          the wonderfully absurd side of life. From quirky gadgets to absurd
          home decor, each item in our store is a celebration of the
          superfluous.
        </p>

        <p className="my-5 text-xl">
          But Whimsy Wonders is more than just a store. Its a community of
          like-minded individuals who appreciate the beauty of the unnecessary.
          Join us in spreading smiles, one pointless product at a time.
        </p>

        <p className="my-5 text-xl">
          Thank you for being a part of the whimsical journey with Whimsy
          Wonders!
        </p>
      </article>
    </Content>
  )
}
