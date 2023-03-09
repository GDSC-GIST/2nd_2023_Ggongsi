import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useAtom } from "jotai";
import Layout from "components/Layout";
import QuestionPage from "pages/QuestionPage";
import Main from "./Main";
import Input from "./Input";
import ResultPage from "pages/ResultPage";
import { infoAtom } from "utils/atom";

const App = () => {
  const [info] = useAtom(infoAtom);
  const [studentID, setStudentID] = useState(0);

  useEffect(() => {
    setStudentID(info.studentID);
  }, [info]);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Navigate to="/" replace />} />

          <Route path="/input" element={<Input />} />
          {studentID ? (
              <Route path="/question" element={<QuestionPage />} />
          ) : null}
              <Route path="/result" element={<ResultPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
