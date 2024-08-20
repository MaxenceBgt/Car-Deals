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

            boxShadow: {
                'step': '0px 0px 14px 0px rgba(206, 206, 206, 1)',
            },

            fontFamily: {
                k2d: ['K2D', 'sans-serif'],
            }
        }
    },

    plugins: [],
}