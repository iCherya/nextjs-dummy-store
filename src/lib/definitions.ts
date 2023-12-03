// Shop types

export type Product = {
  id: string
  name: string
  description: string
  amount: number
  price: number
  image: string
}

// Blog types

export type Author = {
  name: string
  picture: string
}

export type Post = {
  slug: string
  title: string
  description: string
  coverImage: string
  date: string
  author: Author
  ogImage: {
    url: string
  }
  content: string
}
