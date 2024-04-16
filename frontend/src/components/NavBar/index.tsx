/* eslint-disable */
/* prettier-ignore */
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import headicon from 'src/assets/head-icon.png'
import Box from 'src/theme/components/Box'
import { Row } from 'src/theme/components/Flex'
import * as Text from 'src/theme/components/Text'

import Web3Status from '../Web3Status'
import * as styles from './style.css'

export const links = [
  {
    name: 'Deploy',
    path: '/deploy',
  },
  {
    name: 'My tokens',
    path: '/tokens',
  },
]

export default function NavBar() {
  // state
  const [scrolledOnTop, setScrolledOnTop] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    const scrollListener = () => {
      setScrolledOnTop(!window.scrollY)
    }

    window.addEventListener('scroll', scrollListener)

    return () => window.removeEventListener('scroll', scrollListener)
  }, [])

  return (
    <Box as="nav" className={styles.nav({ onTop: scrolledOnTop })}>
      <Row justifyContent="space-between">
        <Row gap="24">
          <Box as="img" src={headicon} className={styles.logoContainer} onClick={() => {
            navigate({ pathname: '/' })
          }} />
          <Box className={styles.navLinksContainer}>
            {links.map(({ name, path }) => (
              <Link key={path} to={path}>
                <Text.Body className={styles.navLink}>{name}</Text.Body>
              </Link>
            ))}
          </Box>
        </Row>

        <Box>
          <Web3Status />
        </Box>
      </Row>
    </Box>
  )
}
