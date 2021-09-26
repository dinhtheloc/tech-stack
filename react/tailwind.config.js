const colors = require('tailwindcss/colors');
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            backgroundImage: {
                'guided-tour': "url('https://www.apple.com/v/iphone/home/ba/images/overview/subhero/guided_tour__efq13m207wae_large_2x.jpg')"
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
