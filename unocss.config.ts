import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'
// loader helpers
export default defineConfig({
  theme: {
    colors: {
      primary: '#186DED',
    },
    boxShadow: {
      DEFAULT: '0px 2px 16px rgba(186,194,209,0.5)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
      },
    }),
  ],
  rules: [
    [
      /bg-img-([\w-]+)/,
      ([_, name]) => {
        return {
          'background-image': `url(/images/bg-${name}.png)`,
          'background-repeat': 'no-repeat',
        }
      },
    ],
  ],
  shortcuts: [
    ['wrapper', 'mx-5 xl:w-1200px xl:mx-a'], // max-w-1200px mx-a
    // [
    //   'plain-btn',
    //   'inline-block bg-white border-1 border-primary px-3 py-1 text-primary hover:(bg-primary bg-op-5)',
    // ],
  ],
})
