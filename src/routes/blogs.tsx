import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/blogs')({
  component: Blogs,
})

function Blogs() {
  return (
    <div className="p-2">
      <h3>Blogs</h3>
    </div>
  )
}
