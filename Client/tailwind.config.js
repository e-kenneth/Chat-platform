/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
   extend: {
    keyframes: {
      pulseScale: {
        '0%, 100%': {
          transform: 'scale(1)',
          opacity: '0.6',
          boxShadow: '0 0 0 0 rgba(59, 130, 246, 0.5)', // blue-500
        },
        '50%': {
          transform: 'scale(1.2)',
          opacity: '1',
          boxShadow: '0 0 0 10px rgba(59, 130, 246, 0)',
        },
      },
    },
    animation: {
      pulseScale: 'pulseScale 1.2s ease-in-out infinite',
    },
  },
},
  plugins: [daisyui],
}