import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  /*safelist: [
    'bg-red-500',
    'text-3xl',
    'lg:text-4xl',
  ],*/
  safelist: [
    'top-[0%]',
    'top-[10%]',
    'top-[20%]',
    'top-[30%]',
    'top-[40%]',
    'top-[50%]',
    'top-[60%]',
    'top-[70%]',
    'top-[80%]',
    'top-[90%]',
    'top-[100%]',
    'left-[0%]',
    'left-[10%]',
    'left-[20%]',
    'left-[30%]',
    'left-[40%]',
    'left-[50%]',
    'left-[60%]',
    'left-[70%]',
    'left-[80%]',
    'left-[90%]',
    'left-[100%]',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    }),
  ],
};
export default config;
