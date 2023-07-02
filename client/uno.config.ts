import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      provider: 'none',
      fonts: {
        sans: 'Proxima Nova',
      },
    }),
  ],
  theme: {
    container: {
      center: true,
    },
  },
})
