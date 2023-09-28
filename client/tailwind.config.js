/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js}'],
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                'chat-background': "url('https://shorturl.at/efitT')",
            }),
        },
    },
    plugins: [
        // https://github.com/tailwindlabs/tailwindcss.com/blob/ceb07ba4d7694ef48e108e66598a20ae31cced19/tailwind.config.js#L280-L284
        function ({ addVariant }) {
            addVariant(
                'supports-backdrop-blur',
                '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
            )
            addVariant(
                'supports-scrollbars',
                '@supports selector(::-webkit-scrollbar)'
            )
            addVariant('children', '& > *')
            addVariant('scrollbar', '&::-webkit-scrollbar')
            addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
            addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
        },
    ],
}
