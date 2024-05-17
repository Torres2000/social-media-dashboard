import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },

    colors: {
      LimeGreen: "hsl(163, 72%, 41%)",
      BrightRed: "hsl(356, 69%, 56%)",
      Facebook: "hsl(208, 92%, 53%)",
      Twitter: "hsl(203, 89%, 53%)",
      Instagram: "linear gradient hsl(37, 97%, 70%) to hsl(329, 70%, 58%)",
      YouTube: "hsl(348, 97%, 39%)",

      /*
    #### Dark Theme
    */
      Toggle1: "hsl(210, 78%, 56%)",
      Toggle2: " hsl(146, 68%, 55%)",
      /*
      ####    Light Theme
      */
      Cambio: "hsl(230, 22%, 74%)",
      /*
    ### Neutral

      #### Dark Theme
      */
      "Very-Dark-Blue": "hsl(230, 17%, 14%)" /* (BG)*/,
      "Very-Dark-Blue1": "hsl(232, 19%, 15%)" /*(Top BG Pattern)*/,
      "Dark-Desaturated-Blue": "hsl(228, 28%, 20%)" /* (Card BG)*/,
      "Desaturated-Blue": "hsl(228, 34%, 66%)" /*(Text)*/,
      White: "hsl(0, 0%, 100%)" /* (Text)*/,

      /*
#### Light Theme
*/
      Blanco: "hsl(0, 0%, 100%)" /* (BG)*/,
      "Very-Pale-Blue": "hsl(225, 100%, 98%)" /* (Top BG Pattern)*/,
      "Light-Grayish-Blue": "hsl(227, 47%, 96%)" /* (Card BG)*/,
      "Dark-Grayish-Blue": "hsl(228, 12%, 44%)" /* (Text)*/,
      "Very-Dark-Blue2": "hsl(230, 17%, 14%)" /* (Text)*/,
    },
    letterSpacing: {
      spacing: "4px",
    },
  },
  plugins: [],
};
export default config;
