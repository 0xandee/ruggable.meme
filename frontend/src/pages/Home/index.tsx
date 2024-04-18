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
        <Box as="span" className={clsx(styles.backgroundContainer, styles.backgroundImage)} />
        <video autoPlay loop muted className={clsx(styles.backgroundContainerVideo)}>
          <source src={"https://videocdn.cdnpk.net/joy/content/video/free/video0485/large_preview/_import_61b86b354a7052.93508645.mp4?filename=1118595_macro_4k_pattern_3840x2160.mp4"} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Column className={styles.titleContainer}>
          {/* <Box as="img" src={homeImage} className={styles.upperTitleImage} /> */}
          <Text.Custom as="h1" className={styles.title}>
            Ruggable Meme
          </Text.Custom>
        </Column>

        <Column as="article" className={styles.firstArticle}>
          <Text.Custom className={styles.firstArticleText}>
            Launch → Challenge → Rug 💨
          </Text.Custom>
        </Column>
        {/* <Row gap="16" className={styles.buttonContainer}>
            <Link to="/deploy">
              <PrimaryButton className={styles.firstArticleButton}>Deploy</PrimaryButton>
            </Link>

            <SecondaryButton className={styles.firstArticleButton} onClick={toggleImportTokenModel}>
              Check token
            </SecondaryButton>
          </Row> */}
        <PrimaryButton className={styles.firstArticleButton} large>
          Comming soon
        </PrimaryButton>
      </Box>

      <ImportTokenModal />
    </>
  )
}
