import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: {
          1: "#060809",
          2: "#ECF1F0",
          3: "#25A75C",
          4: "#979797",
          5: "#000E0C",
          6: "#4F4F4F",
          7: "#5CB23A",
          8: "#0F0919",
          9: "#555555",
          10: "#4F4F4F"
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "poppins": ["Poppins, sans-serif"]
      },
      gradientColorStops: {
        'primary-light': 'rgba(92, 178, 58, 0.80)',
        'primary-dark': 'rgba(4, 128, 2, 0.80)',
      },
    },
  },
  plugins: [],
}
export default config
