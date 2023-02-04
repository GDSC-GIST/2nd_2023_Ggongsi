import QuestionsAnswers from "components/QuestionsAnswers";
import QuestionSteps from "components/QuestionSteps";
import { useAtom } from "jotai";
import { questionNoAtom } from "utils/atom";
const QuestionPage = () => {
  const [questionNo, setQuestionNo] = useAtom(questionNoAtom);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", gap: "8px", marginTop: "50px" }}>
        {[0, 1, 2, 3, 4, 5, 6].map((no, index) => (
          <QuestionSteps
            stepsFilled={index <= questionNo}
            key={`steps-${index}`}
          />
        ))}
      </div>

      <QuestionsAnswers question={questionNo} />

      <div style={{ display: "flex", gap: "15px", marginTop: "50px" }}></div>
    </div>
  );
};

export default QuestionPage;
