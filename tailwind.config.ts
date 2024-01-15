import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:'#7856ff',
        background:"#FAF8F5",
        buttonshade:"#F7F3EE",
        buttonhover:"#FA7921",
        shadedgray:"rgba(204, 204, 204, 0.20)",
        formheading:"rgba(32, 30, 28, 0.80)",
        error:"#FF4141"
      },
      fontFamily:{
        switzer:['var(--font-switzer)']
      }
    },
  },
  plugins: [],
}
export default config
