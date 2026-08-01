/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#173E2F",
                "primary-glow": "rgba(23, 62, 47, 0.45)",
                bronze: "#B68A4E",
                "accent-gold": "#B68A4E",
                beige: "#EFE5D2",
                brown: "#4A3325",
                walnut: "#2A2017",
                "bg-obsidian": "#2A2017",
            },
        },
    },
    plugins: [],
}
