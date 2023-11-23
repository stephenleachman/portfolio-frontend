import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-gradient': 'linear-gradient(to bottom right, #18BFFF, #2CD673))',
      },
      colors: {
        'custom-gray': '#F3F4F6',
        'custom-gray-1': '#F9FAFB',
        'custom-gray-link': '#64748B',
        'custom-blue-opacaty': '#CBEAF8',
        'custom-blue': '#18BFFF',
        'custom-green': '#2CD673',
        'custom-dark-1': '#4B5563',
        'custom-dark-2': '#374151',
        'custom-dark-3': '#1F2A37',
        'custom-dark-text': '#8899A8',

        'custom-Opacity-blue': '#EBF6FB',
        'custom-Opacity-green': '#ECF7F3',
      },
    },
  },
  plugins: [],
}
export default config
