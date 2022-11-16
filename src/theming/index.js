import { createTheming } from '@/plugins/theming'
import { dark, light } from './themes'

const prefersDarkTheme =
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const theming = createTheming({
  default:
    localStorage.getItem('theme') || (prefersDarkTheme ? 'dark' : 'light'),
  themes: {
    dark,
    light,
  },
})

export default theming
