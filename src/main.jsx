import ReactDOM from "react-dom/client";
import {ChakraProvider} from "@chakra-ui/react";

import App from "./App.jsx";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>,
);
