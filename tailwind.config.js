module.exports = {
    important: true,
    content: [
        "./src/**/*.{html,ts}", "./projects/**/*.{html,ts}"
    ],
    theme: {
        extend: {
            spacing: {
                '1': '8px',
                '2': '12px',
                '3': '16px',
                '3.5': '20px',
                '4': '24px',
                '4.5': '28px',
                '5': '32px',
                '6': '48px',

                '10': '2.5rem',
                '18': '4.5rem',
                '22': '5.5rem',
                '88': '22rem',
                '112': '28rem',
                '128': '32rem',
                '144': '36rem',
                '160': '40rem',
                '176': '44rem',
                '192': '48rem',
                '208': '52rem',
                '224': '56rem',

                '980': '980px',
            },
            maxWidth: {
                '10/12': '83.333333%',
                '11/12': '91.666667%',
            },
            inset: {
                '5.5': '1.75rem',
            }
        },
        container: {
            center: true,
          },
        plugins: [],
    }
}
