import NotFoundHolder from '@/components/NotFoundHolder/NotFoundHolder'

export default function NotFound() {
  return (
    <NotFoundHolder
      customLink={{
        label: 'product',
        href: '/products',
        callToAction: 'Back to products',
      }}
    />
  )
}
