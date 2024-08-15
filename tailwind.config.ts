import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                background: "#FAFEFD",
                card: "#F9F9F8",
                'card-dark': "#E6E8EB",
                border: "#DAD9D6",

                foreground: "#21201C",
                secondary: "#63635E",
                muted: "#82827C",

                primary: "#0D9B8A"
            },

            letterSpacing: {
                font: '0.5%'
            },

            fontFamily: {
                k2d: ['K2D', 'sans-serif'],
            }
        }
    },

    plugins: [],
}