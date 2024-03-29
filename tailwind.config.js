/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wolf-gray": {
          0: "#101213",
          25: "#151819",
          50: "#1b1e20",
          75: "#202426",
          100: "#262a2d",
          125: "#2b3133",
          150: "#31373a",
          175: "#363d40",
          200: "#3b4347",
          225: "#41494d",
          250: "#464f53",
          275: "#4c555a",
          300: "#515b60",
          325: "#576167",
          350: "#5c686d",
          375: "#616e74",
          400: "#67747a",
          425: "#6c7a81",
          450: "#728087",
          475: "#78868d",
          500: "#7e8c92",
          525: "#859198",
          550: "#8b979d",
          575: "#919da3",
          600: "#98a3a8",
          625: "#98a3a8",
          650: "#9ea8ae",
          675: "#a5aeb3",
          700: "#abb4b8",
          725: "#b2babe",
          750: "#b8c0c3",
          775: "#bfc5c9",
          800: "#c5cbce",
          825: "#cbd1d4",
          850: "#d2d7d9",
          875: "#d8dcde",
          900: "#dfe2e4",
          925: "#e5e8e9",
          950: "#eceeef",
          975: "#f2f3f4",
          1000: "#f9f9fa"


        },
        "wolf-gray-blue": {
          100: "#161a26",
          200: "#1a1f2d",
          300: "#1e2333",
          400: "#21283a",
          500: "#21283a",
          600: "#2c354d",
          700: "#343e5a",
          800: "#3b4767",
          900: "#435074",
          1000: "#4a5981",
          1100: "#52618e",
        },

        "wolf-gray-light": {
          100: "#4D5668",
          200: "#535c70",
          300: "#586377",
          400: "#5e697f",
          500: "#636f86",
          600: "#69758e",
          700: "#6f7c95",
          800: "#77839a",
          900: "#7e8aa0",
          1000: "#8690a5",
          1100: "#8e97ab",
          1200: "#959eb1",
          1300: "#9da5b6",
          1400: "#a4acbc",
          1500: "#acb3c1",
          1600: "#b3bac7",
          1700: "#bbc1cd",
          1800: "#c3c8d2",
          1900: "#cacfd8",
          2000: "#d2d6dd",
          2100: "#d9dce3",
          2200: "#e1e3e9"

        },

        "wolf-gray-dark": {
          100: "#08090a",
          200: "#0c0d10",
          300: "#0f1115",
          400: "#13161a",
          500: "#171a1f",
          600: "#1b1e24",
          700: "#1f222a",
          800: "#23272f",
          900: "#272b34",
          1000: "#2a2f39",
          1100: "#2e343e",
          1200: "#323844",
          1300: "#363c49",
          1400: "#3a414e",
          1550: "#3e4553",
          1600: "#414958",
          1700: "#454d5e",
          1800: "#495263",
        },

        "wolf-blue-purple": {
          100: "#191f8f",
          200: "#1d24a7",
          300: "#2129bf",
          400: "#252ed7",
          500: "#3B43DD",
          600: "#4f56e0",
          700: "#6269e4",
          800: "#767be7",
          900: "#898eeb",
          1000: "#9da1ee",

        },


        "wolf-gray-accent": {
          100: "#2f343e",
          200: "#373c48",
          300: "#3e4552",
          400: "#464d5d",
          500: "#4e5667",
          600: "#5c667a",
          700: "#6a758c",
          800: "#7c869c",
          900: "#8f97aa",
          1000: "#a1a9b8"
        },

        "wolf-off-blue": {
          100: "#264073",
          200: "#2c4a86",
          300: "#325599",
          400: "#395fac",
          500: "#3F6ABF",
          600: "#4b74c4",
          700: "#587ec8",
          800: "#6588cc",
          900: "#7292d0",
          1000: "#7f9cd5"
        },

        "wolf-off-light-blue": {
          100: "#284b90",
          200: "#2c529e",
          300: "#3059ab",
          400: "#3360b8",
          500: "#3767c5",
          600: "#4270ca",
          700: "#507ace",
          800: "#5d84d2",
          900: "#6a8ed5",
          1000: "#7798D9"
        },

        "wolf-dull-purple": {
          100: "#521953",
          200: "#621f64",
          300: "#732474",
          400: "#832985",
          500: "#942e95",
          600: "#A433A6",
          700: "#bd3bbf",
          800: "#c751c9",
          900: "#cf6ad1",
          1000: "#d782d9"
        },

        "wollf-red": {
          100: "#861016",
          200: "#9c1319",
          300: "#b2161d",
          400: "#c91820",
          500: "#DF1B24",
          600: "#e62e37",
          700: "#e9454d",
          800: "#eb5d63",
          900: "#ee7479",
          1000: "#f18b90"
        },
        "wolf-yellow": {
          100: "#867410",
          200: "#9c8713",
          300: "#b29a16",
          400: "#c9ae18",
          500: "#DFC11B",
          600: "#e6ca2e",
          700: "#e9d045",
          800: "#ebd65d",
          900: "#eedb74",
          1000: "#f1e18b"
        },

        "wolf-blue": {
          100: "#023373",
          200: "#033b86",
          300: "#034499",
          400: "#044cac",
          500: "#0455BF",
          600: "#0563de",
          700: "#0871fa",
          800: "#2783fa",
          900: "#4694fb",
          1000: "#65a6fc",
        },

        "wolf-pulple": {
          100: "#610273",
          200: "#710386",
          300: "#820399",
          400: "#9204ac",
          500: "#A204BF",
          600: "#bc05de",
          700: "#d408fa",
          800: "#da27fa",
          900: "#df46fb",
          1000: "#e465fc"
        },

        "wolf-green": {
          100: "#10861b",
          200: "#139c20",
          300: "#16b224",
          400: "#18c929",
          500: "#1BDF2D",
          600: "#2ee63f",
          700: "#45e954",
          800: "#5deb6a",
          900: "#74ee7f",
          1000: "#8bf194"
        },

        "wolf-social": {
          facebook: "#3b5998",
          instagram: "#962fbf",
          twitch: "#6441a5",
          behance: "#053eff",
          twitter: "#00acee",
          discord: "#5865F2",
          youtube: "#FF0000"
        }


      }
    },
  },
  plugins: [],
}
