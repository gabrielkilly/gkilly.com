import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: "#FFFFFF",
      purple: "#655D6D",
      gray: { //1 - 10, light to dark
        1: "#929292",
        2: "#303030"
      },
      orange: {
        1: "#F3D3B5",
        2: "#FFCC80",
        3: "#EB861E"
      }
    },
  },
  plugins: [],
}
export default config
