
import { Config } from 'tailwindcss'

declare module 'tailwindcss/types/config' {
    interface ThemeConfig {
        extend?: {
            colors?: {
                primary?: {
                    light: string
                    DEFAULT: string
                    dark: string
                }
                secondary?: {
                    light: string
                    DEFAULT: string
                    dark: string
                }
            }
            fontFamily?: {
                sans?: string[]
                heading?: string[]
            }
        }
    }
}

