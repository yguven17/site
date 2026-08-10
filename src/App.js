import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchGitHubInfo,
  selectError,
  selectIsLoading,
} from "./pages/homeSlice";
import { fetchGitHubReops } from "./pages/allProjectsSlice";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Loading } from "./components/globalStyledComponents";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/GlobalStyles";
// Pages
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import NotFound from "./pages/NotFound";

const theme = {
  name: "dark",
  color: "#E8EEF4",
  background: "#0B0F14",
  accent: "#FFB454",
  muted: "#94A3B1",
};

export default function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  React.useEffect(
    function () {
      dispatch(fetchGitHubInfo());
      dispatch(fetchGitHubReops());
    },
    [dispatch]
  );

  if (isLoading) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container className="d-flex vh-100 align-items-center">
          <Loading />
        </Container>
      </ThemeProvider>
    );
  } else if (error) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container className="d-flex vh-100 align-items-center justify-content-center">
          <h2>{error}</h2>
        </Container>
      </ThemeProvider>
    );
  } else {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <ScrollToTop />
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/All-Projects" element={<AllProjects />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}
