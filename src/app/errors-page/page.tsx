'use client'
import { useState } from 'react'

import Button from '@/components/UI/Button/Button'
import Content from '@/components/UI/Content/Content'
import Divider from '@/components/UI/Divider/Divider'
import Header from '@/components/UI/Heading/Heading'

import DummyServerComponent from './DummyServerComponent'

export default function Page() {
  const [showServerComponent, setShowServerComponent] = useState(false)

  const errorThrower = () => {
    throw new Error('This is an error thrown on purpose in client component')
  }

  const makeRequestToErrorEndpoint = async () => {
    const response = await fetch('/api/errors-route')

    if (!response.ok) {
      throw new Error('Error in response from API in client component')
    }
  }

  const showServerComponentThatThrowsError = () => {
    setShowServerComponent(() => true)
  }

  return (
    <Content>
      <Header type={1}>Page with errors</Header>

      <p>This page throws an error.</p>

      <Button onClick={errorThrower} text="Click to throw new Error" />

      <Divider className="m-4" />

      <p className="mt-5">
        This page also makes a request to the endpoint that throws an error.
      </p>

      <Button
        onClick={makeRequestToErrorEndpoint}
        text="Click to make request to error endpoint"
      />

      <Divider />

      <p className="mt-5">
        This page also has a server component that throws an error.
      </p>

      <Button
        onClick={showServerComponentThatThrowsError}
        text="Click to show server component throwing an error"
      />

      {showServerComponent && <DummyServerComponent />}
    </Content>
  )
}
