const REMOTE_STORAGE_HOST = 'https://rnszqhyihsvmhkgsxned.supabase.co'
const BUCKET_PATH = 'storage/v1/object/public/nextjs-dummy-store-images'

const COMMON_ASSETS_FOLDER = 'assets'
const PRODUCTS_IMAGES_FOLDER = 'products'
const BLOG_IMAGES_FOLDER = 'blog'

export const REMOTE_STORAGE = {
  ASSETS: `${REMOTE_STORAGE_HOST}/${BUCKET_PATH}/${COMMON_ASSETS_FOLDER}`,
  PRODUCTS_IMAGES: `${REMOTE_STORAGE_HOST}/${BUCKET_PATH}/${PRODUCTS_IMAGES_FOLDER}`,
  BLOG_IMAGES: `${REMOTE_STORAGE_HOST}/${BUCKET_PATH}/${BLOG_IMAGES_FOLDER}`,
}
