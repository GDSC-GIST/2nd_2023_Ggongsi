import Layout from "components/Layout";
import QuestionPage from "pages/QuestionPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<QuestionPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
