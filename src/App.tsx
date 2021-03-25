import React from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import { Provider } from "react-redux";
import theme from "./styles/theme";
import TestComponent from "./components/TestComponent/TestComponent";
import RootPage from "./pages/RootPage";
import store from "./stores/rootReducer";

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RootPage />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
