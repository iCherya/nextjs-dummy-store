import Image from 'next/image'

export default function Page() {
  return (
    <>
      <main>
        <Image
          src="/identity/logo_562x119.png"
          width={562}
          height={119}
          alt="Whimsy Wonders Logo"
        />
        <article>
          <h1>About us</h1>

          <p>
            Welcome to Whimsy Wonders, where the pursuit of the pointless is an
            art form! Our mission is to bring joy, laughter, and a touch of
            absurdity into your life through a collection of wonderfully useless
            products.
          </p>

          <p>
            At Whimsy Wonders, we believe in the power of whimsy to brighten
            your day. Our curated selection of products defies convention and
            embraces the wonderfully absurd side of life. From quirky gadgets to
            absurd home decor, each item in our store is a celebration of the
            superfluous.
          </p>

          <p>
            But Whimsy Wonders is more than just a store. Its a community of
            like-minded individuals who appreciate the beauty of the
            unnecessary. Join us in spreading smiles, one pointless product at a
            time.
          </p>

          <p>
            Thank you for being a part of the whimsical journey with Whimsy
            Wonders!
          </p>
        </article>
      </main>
    </>
  )
}
