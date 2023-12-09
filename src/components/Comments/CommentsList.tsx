'use client'

import { nanoid } from 'nanoid'
import { useEffect, useState } from 'react'
import { tss } from 'tss-react'

import Comment, { CommentSkeleton } from '@/components/Comments/Comment'
import Button from '@/components/UI/Button/Button'
import { getJokes } from '@/lib/api/jokes'
import type { Joke } from '@/lib/definitions'

type Props = {
  size?: number
}

const useStyles = tss.create({
  masonry: {
    display: 'grid',
    gridGap: '1rem',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridTemplateLayout: 'masonry',
  },
})

export default function CommentsList({ size = 20 }: Props) {
  const { classes } = useStyles()
  const [jokes, setJokes] = useState<Joke[]>([])
  const [page, setPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchJokes = async () => {
      setIsLoading(true)

      const newJokes = await getJokes(size, page)

      if (page === 1) {
        setJokes(newJokes)
      } else {
        setJokes((oldJokes) => [...oldJokes, ...newJokes])
      }

      setIsLoading(false)
    }

    fetchJokes()
  }, [page, size])

  return (
    <>
      {/* <ul className={'masonry sm:masonry-sm md:masonry-md'}> */}
      <ul className={classes.masonry}>
        {jokes.map((joke) => (
          <Comment key={joke.id} {...joke} />
        ))}
        {isLoading &&
          Array.from({ length: size }).map(() => (
            <CommentSkeleton key={nanoid()} />
          ))}
      </ul>

      <div className="my-5 flex justify-center">
        <Button text="Load more" onClick={() => setPage(page + 1)} />
      </div>
    </>
  )
}
