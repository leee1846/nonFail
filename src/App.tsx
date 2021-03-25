import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import TestComponent from "./components/TestComponent/TestComponent";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <TestComponent />
    </ThemeProvider>
  );
};

export default App;
