import products from '../products'
import type { Product } from '../definitions'

export const getProducts = (size: number = 50): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (size < 0) {
        reject(new Error('Invalid size'))
        return
      }

      if (size === 0) {
        resolve([])
        return
      }

      resolve(
        products.slice(0, size).sort(() => (Math.random() > 0.5 ? 1 : -1)),
      )
    }, Math.random() * 1000)
  })
}

export const getProductById = (id: string): Promise<Product | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((p) => p.id === id)

      if (!product) {
        resolve(null)
        return
      }

      resolve(product)
    }, Math.random() * 1000)
  })
}
