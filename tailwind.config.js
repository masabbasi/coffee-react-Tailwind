/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brown: {
          100: "##ECE0D1",
          300: "##DBC1AC",
          600: "##967259",
          900: "##634832",
        },
      },
      boxShadow: {
        primary: "0 1px 10px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
				"5xl":"6.25rem",
      },
      fontFamily: {
        DanaDemiBold: "Dana DemiBold",
        DanaMedium: "Dana Medium",
        DanaRegular: "Dana Regular",
        MorabbaLight: "Morabba Light",
        MorabbaMedium: "Morabba Medium",
        MorabbaBold: "Morabba Bold",
      },
      letterSpacing: {
        menu: "-0.065em",
      },
      backgroundImage: {
        "header-desktop": "url('/headerBgDesktop.webp')",
        "header-mobile": "url('/headerBgMobile.webp')",
      },
			spacing: {
				'22.5':'5.625rem',
				'30': '7.5rem',
				'100': '25rem',
			}
    },
    plugins: [
      function ({ addVariant }) {
        addVariant("child", "& > *");
        addVariant("child-hover", "& > *:hover");
      },
    ],
  },
};