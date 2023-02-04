import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "components/Layout";
import QuestionPage from "pages/QuestionPage";
import Main from "./Main";
import Input from "./Input";
import ResultPage from "pages/ResultPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/input" element={<Input />} />
          <Route path="/question" element={<QuestionPage />} />
          <Route path="/result" element={<ResultPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
