import BoringAvatar from 'boring-avatars'
import clsx from 'clsx'
import Image from 'next/image'
import React from 'react'

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
      name={alt}
      variant="marble"
      colors={['lightblue', 'lightgreen', 'lightpink', 'lightyellow']}
    />
  )
}
