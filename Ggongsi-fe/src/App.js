import Layout from "components/Layout";
import ResultPage from "pages/ResultPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
