export default function DummyServerComponent() {
  throw new Error('An error occurred during rendering server component')

  return (
    <div className="p3 m-3 border-spacing-2 border">Dummy server component</div>
  )
}
