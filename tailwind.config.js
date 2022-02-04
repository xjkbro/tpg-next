const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
    purge: ["./components/**/*.js", "./pages/**/*.js"],
    theme: {
        extend: {
            colors: {
                // all custom colors for website
                // Primary - light blue
                // Secondary - orange
                // Dark - dark blue
                // Success - success green
                // danger - danger red
                // primary: "#008ecc",
                // secondary: "#FC7019",
                // dark: "#005980",
                // success: "#71ED75",
                // danger: "#FC634B",
                primary: {
                    100: "#C9FAFC",
                    200: "#95EFF9",
                    300: "#5FD7EF",
                    400: "#38B8E0",
                    500: "#008ecc",
                    600: "#006EAF",
                    700: "#005292",
                    800: "#003A76",
                    900: "#002A61",
                },
                secondary: {
                    100: "#FEEDD0",
                    200: "#FED6A2",
                    300: "#FEB974",
                    400: "#FD9D52",
                    500: "#FC7019",
                    600: "#D85212",
                    700: "#B5380C",
                    800: "#922307",
                    900: "#781504",
                },
                dark: {
                    100: "#C6F6F8",
                    200: "#91E8F2",
                    300: "#56C2D8",
                    400: "#2C92B2",
                    500: "#005980",
                    600: "#00456E",
                    700: "#00335C",
                    800: "#00244A",
                    900: "#001A3D",
                },
                success: {
                    100: "#ECFEE3",
                    200: "#D4FDC8",
                    300: "#B6F9AB",
                    400: "#99F494",
                    500: "#71ED75",
                    600: "#52CB61",
                    700: "#38AA50",
                    800: "#248942",
                    900: "#157139",
                }, danger: {
                    100: "#FEEBDB",
                    200: "#FED1B7",
                    300: "#FEB293",
                    400: "#FD9477",
                    500: "#FC634B",
                    600: "#D84036",
                    700: "#B52528",
                    800: "#921724",
                    900: "#780E21"
                }
            },
            container: {
                center: true,
                padding: {
                    default: "1rem",
                    md: "2rem",
                },
            },
        },
    },
};
