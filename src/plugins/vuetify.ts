import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'
import { mdiThemeLightDark } from '@mdi/js'

const yellow = '#b58900'
const orange = '#cb4b16'
const red = '#dc322f'
const magenta = '#d33682'
const violet = '#6c71c4'
const blue = '#268bd2'
const cyan = '#2aa198'
const green = '#859900'

const sharedColors = {
  primary: cyan,
  secondary: violet,
  error: red,
  info: blue,
  success: green,
  warning: orange,
  anchor: blue,
  yellow,
  orange,
  red,
  magenta,
  violet,
  blue,
  cyan,
  green,
}

const darkMode: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#002b36',
    surface: '#073642',
    'on-background': '#839496',
    'on-surface': '#93a1a1',
    ...sharedColors,
  },
}

const lightMode: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#fdf6e3',
    surface: '#eee8d5',
    'on-background': '#657b83',
    'on-surface': '#586e75',
    ...sharedColors,
  },
}

export const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'darkMode',
    variations: {
      colors: [
        'primary',
        'secondary',
        'yellow',
        'orange',
        'red',
        'magenta',
        'violet',
        'blue',
        'cyan',
        'green',
      ],
      lighten: 1,
      darken: 2,
    },
    themes: { lightMode, darkMode },
  },

  icons: {
    defaultSet: 'mdi',
    aliases: { ...aliases, mdiThemeLightDark },
    sets: { mdi },
  },
})
