
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const colors = {
  primary: '#5F3DF7',

}
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:colors,
      transitionTimingFunction: {
        DEFAULT: 'ease-in-out',
      },
      transitionDuration: {
        DEFAULT: '300ms'
      }
    },
  },
  plugins: [
    plugin(({ addUtilities}) => {
      addUtilities({
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        '.flex-center-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }
      })
    })
  ],
}
export default config
