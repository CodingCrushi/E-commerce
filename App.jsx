// import ErrorBoundary from "./Error/ErrorBoundary";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      {/* <ErrorBoundary> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      {/* </ErrorBoundary> */}
    </>
  );
};

export default App;
