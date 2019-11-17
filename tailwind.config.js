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
            },
            spacing: {
                '28': '7rem',
            }
        },
        minHeight: {
            'slide': 'calc(100vh - 12rem)',
        },
        gradients: theme => ({
            'orange': [theme('colors.orange.500'), theme('colors.orange.400')]
        }),
        textGradients: theme => ({
            'orange': [theme('colors.orange.500'), theme('colors.orange.400')]
        })
    },
    variants: {},
    plugins: [
        require('./src/plugins/gradients')
    ]
}
