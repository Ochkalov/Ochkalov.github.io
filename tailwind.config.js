/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#05080A',
        charcoal: '#070B0D',
        graphite: '#10171A',
        emerald: '#14F195',
        amber: '#F6C343',
        cyan: '#5EEAD4',
        ink: '#EAF7F0',
        muted: '#8EA39A',
        panel: 'rgb(8 15 17 / <alpha-value>)',
        line: 'rgb(148 163 184 / <alpha-value>)',
      },
      boxShadow: {
        glow: '0 0 36px rgba(20, 241, 149, 0.16)',
        amber: '0 0 32px rgba(246, 195, 67, 0.14)',
        panel: '0 18px 80px rgba(0, 0, 0, 0.36)',
      },
      fontFamily: {
        sans: [
          'InterVariable',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
        mono: ['SFMono-Regular', 'Cascadia Code', 'Consolas', 'monospace'],
      },
      backgroundImage: {
        'radial-emerald':
          'radial-gradient(circle at 20% 20%, rgba(20, 241, 149, 0.14), transparent 32rem)',
        'radial-amber':
          'radial-gradient(circle at 86% 14%, rgba(246, 195, 67, 0.13), transparent 30rem)',
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        13: '0.13',
        14: '0.14',
        15: '0.15',
        16: '0.16',
        18: '0.18',
        26: '0.26',
        34: '0.34',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        86: '0.86',
      },
    },
  },
  plugins: [],
}
