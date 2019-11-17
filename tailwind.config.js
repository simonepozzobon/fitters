const {
    colors,
    opacity,
} = require('tailwindcss/defaultTheme')

module.exports = {
    theme: {
        extend: {
            colors: {
                ...colors,
                dark: '#282323',
                light: '#E6E6E6',
                orange: {
                    '400': '#FF5900',
                    '500': '#FF2A00',
                }
            }
        },
        minHeight: {
            'slide': 'calc(100vh - 12rem)',
        }
    },
    variants: {},
    plugins: []
}
