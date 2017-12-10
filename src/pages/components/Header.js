import Link from 'next/link'

import locale from '~/constants/locale'

const ROUTES = [
  { name: 'forum', as: '/' },
  { name: 'card' },
  { name: 'channel' },
  { name: 'notification' },
  { name: 'user' }
]

export default () => (
  <header>
    {ROUTES.map((route, key) => (
      <React.Fragment key={key}>
        <Link as={route.as} href={`/${route.name}`}>
          <a>{locale(`drawer.${route.name}`)}</a>
        </Link>
      </React.Fragment>
    ))}
    <hr/>
  </header>
)
