import {extendTheme} from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundColor: "brand.neutralOffWhite",
      },
    },
  },
  colors: {
    brand: {
      primaryPurple: "hsl(259, 100%, 65%)",
      primaryRed: "hsl(0, 100%, 67%)",
      neutralWhite: "hsl(0, 0%, 100%)",
      neutralOffWhite: "hsl(0, 0%, 94%)",
      neutralLightGrey: "hsl(0, 0%, 86%)",
      neutralSmokeyGrey: "hsl(0, 1%, 44%)",
      neutralOffBlack: "hsl(0, 0%, 8%)",
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
  },
  fontSizes: {
    input: "32px",
  },
  fontWeights: {
    regular: 400,
    bold: 700,
    extraBold: 800,
  },
});

export default theme;
