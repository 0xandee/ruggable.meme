/* eslint-disable */
/* prettier-ignore */
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import homeImage from 'src/assets/homeImage.png'
import { PrimaryButton, SecondaryButton } from 'src/components/Button'
import { ImportTokenModal } from 'src/components/ImportTokenModal'
import { useImportTokenModal } from 'src/hooks/useModal'
import Box from 'src/theme/components/Box'
import { Column, Row } from 'src/theme/components/Flex'
import * as Text from 'src/theme/components/Text'

import * as styles from './style.css'

export default function HomePage() {
  // modal
  const [, toggleImportTokenModel] = useImportTokenModal()

  return (
    <>
      <Box className={styles.container}>
        <Box as="span" className={clsx(styles.backgroundContainer, styles.background)} />

        <Column className={styles.titleContainer}>
          <Box as="img" src={homeImage} className={styles.upperTitle} />
          <Text.Custom as="h1" className={styles.title}>
            Ruggable Meme
          </Text.Custom>
        </Column>

        <Column as="article" className={styles.firstArticle}>
          <Text.Custom className={styles.firstArticleText}>
            Tired of being unruggable? Introducing Ruggable Meme, a project designed with no security and no transparency at its core. Our degenz contracts ensure unfair but secure experience for all users.
          </Text.Custom>

          {/* <Row gap="16" className={styles.buttonContainer}>
            <Link to="/deploy">
              <PrimaryButton className={styles.firstArticleButton}>Deploy</PrimaryButton>
            </Link>

            <SecondaryButton className={styles.firstArticleButton} onClick={toggleImportTokenModel}>
              Check token
            </SecondaryButton>
          </Row> */}
          <SecondaryButton className={styles.firstArticleButton}>
            Comming soon
          </SecondaryButton>
        </Column>
      </Box>

      <ImportTokenModal />
    </>
  )
}
