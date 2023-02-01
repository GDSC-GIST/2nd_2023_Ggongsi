import QuestionsAnswers from "components/QuestionsAnswers";
import QuestionSteps from "components/QuestionSteps";

const QuestionPage= () => {
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
    <div style={{ display: "flex", gap: "15px", marginTop: "50px" }}>
    <QuestionSteps />
    <QuestionSteps />
    <QuestionSteps />
    <QuestionSteps />
    <QuestionSteps />
    <QuestionSteps />
    <QuestionSteps />
    </div>
      <QuestionsAnswers question="question1" />

      <div style={{ display: "flex", gap: "15px", marginTop: "50px" }}>

      </div>
    </div>
  );
};

export default QuestionPage;
