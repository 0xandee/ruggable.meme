/* eslint-disable */
/* prettier-ignore */
import { style } from '@vanilla-extract/css'
import { transparentize } from 'polished'
import { sprinkles, vars } from 'src/theme/css/sprinkles.css'

export const container = style([
  sprinkles({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    overflow: 'auto',
    paddingBottom: {
      sm: '88',
      md: '32',
    },
  }),
])

export const backgroundContainer = style([
  {
    zIndex: '-99',
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    height: '100vh',
    maxHeight: '1000px',
  },
])

export const background = style([
  {
    backgroundImage: `
      linear-gradient(to bottom, ${transparentize(1, '#000000')}, ${vars.color.bg1}),
      url("src/assets/background-2.png")
    `,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  sprinkles({
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    width: 'full',
    height: 'full',
  }),
])

export const titleContainer = sprinkles({
  textAlign: 'center',
  gap: '16',
  paddingX: '32',
})

export const title = style([
  {
    textShadow: '1.5px 1.5px 0 #F84C00',
    color: '#FFFFFF',
    fontFamily: 'Lily Script One',
  },
  sprinkles({
    marginTop: '32',
    marginBottom: '0',
    fontSize: { sm: '36', md: '64', lg: '72', xl: '96' },
  }),
])

export const upperTitle = style([
  sprinkles({
    marginTop: '64',
    marginBottom: '0',
    maxHeight: { sm: 'full', md: 'full', lg: '180' },
    marginX: 'auto',
  }),
])

export const subtitle = style([
  sprinkles({
    maxHeight: { sm: '20', md: '32', lg: '42' },
    marginX: 'auto',
  }),
])

export const firstArticle = style([
  sprinkles({
    marginTop: '64',
    gap: '64',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingX: { sm: '32', md: '64' },
    color: 'white',
  }),
])

export const firstArticleText = style([
  {
    maxWidth: '1200px',
  },
  sprinkles({
    fontSize: { sm: '18', md: '24', lg: '24' },
    fontWeight: 'normal',
  }),
])

export const firstArticleButton = style([
  sprinkles({
    width: '180',
  }),
])

export const buttonContainer = style([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
])
