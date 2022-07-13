import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../global/styles";
import theme from "../global/theme";
const HomePage = dynamic(() => import("./home"), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <HomePage />
    </ThemeProvider>
  );
};

export default Home;
