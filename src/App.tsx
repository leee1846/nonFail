import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import TestComponent from "./components/TestComponent/TestComponent";
import RootPage from "./pages/RootPage";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootPage />
    </ThemeProvider>
  );
};

export default App;
