import { createFileRoute } from '@tanstack/react-router'
import { seo } from '~/utils/seo'

export const Route = createFileRoute('/')({
  component: Home,
  head: () => ({
    meta: [
          ...seo({
            title:
              'Fucking home page',
            description: `TanStack Start is a type-safe, client-first, full-stack React framework. `,
          }),
        ],
  }),
})

function Home() {
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <p>This is static text</p>
    </div>
  )
}
