const plugin = require('tailwindcss/plugin');
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: [
      "./**/*.html",
      "./*.html",
      "./**/*.js",
      "./*.js",
      "./**/*.vue",
      "./*.vue",
    ],
    options: {
      whitelist: [],
    },
  },
  theme: {
    extend: {
      aspectRatio: { // defaults to {}
        "none": 0,
        "square": [1, 1], // or 1 / 1, or simply 1
        "16/9": [16, 9],  // or 16 / 9
        "4/3": [4, 3],    // or 4 / 3
        "21/9": [21, 9],  // or 21 / 9
        "30/9": [30, 9],  // or 21 / 9
      },
      lineClamp: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
      },
      minHeight: {
        "screen-75": "75vh",
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
        'montserrat' : ['Montserrat','sans-serif'],
      },
      fontSize: {
        "55": "55rem",
      },
      opacity: {
        "30": ".3",
        "60": ".6",
        "80": ".8",
      },
      zIndex: {
        "2": 2,
        "3": 3,
      },
      inset: {
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      width: {
        '15/100': '15%',
        '30/100': '30%',
      },
      height: {
        "70-px": "70px",
        "95-px": "95px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "580-px": "580px",
      },
      minWidth: {
        "140-px": "140px",
        "48": "12rem",
      },
      lineHeight: {
        '16': '4rem',
        '32': '8rem',
      },
      backgroundSize: {
        full: "100%",
      },
      backgroundOpacity: {
        '5': '0.05',
        '10': '0.1',
        '35': '0.35',
        '45': '0.45',
        '55': '0.55',
        '65': '0.65',
        '85': '0.85',
      },
      transitionTimingFunction: {
        'ease-default': 'ease',
      }
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
    "before",
    "after",
    "hover_before",
    "hover_after",
    "focus_before",
    "focus_after",
  ],
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'), 
    require("@tailwindcss/custom-forms"),
    require('tailwindcss-line-clamp'),
    require('tailwindcss-pseudo-elements'),
    require('tailwindcss-aspect-ratio'),
    plugin(function ({ addUtilities }) {
      addUtilities(
        {
          '.empty-content': {
            content: "''",
          },
        },
        ['before', 'after']
      )
    }),
  ],
};
