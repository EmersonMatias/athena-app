import 'styled-components'
import { defaultTheme } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof defaultTheme.colors,
    fontFamily: typeof defaultTheme.fontFamily
  }
}