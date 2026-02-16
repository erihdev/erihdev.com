/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#3b82f6",
                "primary-glow": "rgba(59, 130, 246, 0.5)",
                "accent-gold": "#fbbf24",
                "bg-obsidian": "#020617",
            },
        },
    },
    plugins: [],
}
