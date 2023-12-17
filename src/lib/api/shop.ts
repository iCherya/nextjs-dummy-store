import { cookies } from 'next/headers'

import type { Product } from '@/lib/definitions'
import { createClient } from '@/lib/supabase/server'

export const getProducts = async (
  size: number = 50,
): Promise<Product[] | null> => {
  if (size < 0) {
    throw new Error('Invalid size')
  }

  const supabase = createClient(cookies())
  const { data: products } = await supabase.from('products').select('*')

  return products
}

export const getProductById = async (id: string): Promise<Product | null> => {
  if (!id) {
    throw new Error('Id should not be empty')
  }

  const supabase = createClient(cookies())
  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .single()

  return product || null
}
