import React from 'react'
import clsx from 'clsx'

import BoringAvatar from 'boring-avatars'
import Image from 'next/image'

type AvatarProps = {
  src?: string
  alt: string
  className?: string
  size?: number
}

export default function Avatar(props: AvatarProps) {
  const { src, alt, className, size = 40 } = props

  return src ? (
    <Image
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={clsx('rounded-full', className)}
    />
  ) : (
    <BoringAvatar
      size={size}
      name={Date.now().toString()}
      variant="pixel"
      colors={['lightblue', 'lightgreen', 'lightpink', 'lightyellow']}
    />
  )
}
