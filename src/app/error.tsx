'use client'

import ErrorHolder from '@/components/ErrorHolder/ErrorHolder'

export default function PageError(props: any) {
  return <ErrorHolder {...props}>Error on root app level</ErrorHolder>
}
