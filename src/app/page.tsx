import ProductsList from '@/components/ProductsList/ProductsList'

export default function Home() {
  return (
    <main>
      <h1>
        Welcome to <b>Whimsy Wonders</b> - the home of the delightfully
        unnecessary!
      </h1>

      <p>
        At Whimsy Wonders, we believe that life is just too serious, and
        sometimes, you need a little dose of the absurd to brighten your day.
        Our e-commerce store is a treasure trove of utterly useless products
        that serve no practical purpose but are guaranteed to tickle your funny
        bone and spark joy in the most unexpected ways.
      </p>

      <hr />

      <h2>Featured Uselessness</h2>
      <ProductsList size={6} />

      <hr />
    </main>
  )
}
