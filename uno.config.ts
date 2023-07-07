import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import { presetGrid } from 'unocss-preset-grid'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  theme: {
    colors: {
      primary: {
        '50': '#f4f3ff',
        '100': '#e5e3ff',
        '200': '#d0ccff',
        '300': '#aba5ff',
        '400': '#776bff',
        '500': '#4434ff',
        '600': '#1d0dff',
        '700': '#0900f1',
        '800': '#0f05c4',
        '900': '#10069f',
        '950': '#020077',
        DEFAULT: "#10069f",
      },
      accent: "#6059BF",
    }
  },
  presets: [presetUno(), presetGrid()],
  transformers: [
    transformerDirectives(),
  ],
})