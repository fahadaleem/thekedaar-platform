// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";

// 1. Colors
const colors = {
  brand: {
    primary: "#FFC000",
    secondary: "#262626",
    "secondary-300": "#3D424A",
  },
};

export const theme = extendTheme({
  colors,
  components: {
    Container: {
      baseStyle: {
        maxWidth: "1440px",
        // padding: "16px",
      },
    },
  },
});
