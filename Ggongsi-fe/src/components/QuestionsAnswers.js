//import { getPlaceObject } from "utils/placE";
import { getQuestions } from "utils/question";
import { colorSet } from "utils/style";
import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import { answerNoAtom, questionNoAtom } from "utils/atom";
import { useEffect } from "react";

const QuestionsAnswers = ({ question }) => {
  const Questions = getQuestions(question);
  const [answerNo, setAnswerNo] = useAtom(answerNoAtom);
  const [questionNo, setQuestionNo] = useAtom(questionNoAtom);
  //const 답변 저장 함수
  const savingAnswer = (index) => {
    if (answerNo.length <= questionNo) {
      setAnswerNo((prev) => [...prev, index]);
    }

    if (questionNo < 6) {
      setQuestionNo((prev) => prev + 1);
    }
  };

  useEffect(() => {
    console.log(answerNo);
  }, [answerNo]);
  return (
    <>
      <p
        style={{
          margin: "0px 0px 30px 0px",
          lineHeight: "20px",
          color: colorSet.white,
          fontSize: "20px",
          fontWeight: "bold",
        }}
      ></p>

      <img src={Questions.image} alt={Questions.alt} />
      <p
        style={{
          margin: "20px",
          lineHeight: "20px",
          color: colorSet.white,
          fontSize: "20px",
          fontWeight: "bold",
          wordBreak: "keep-all",
          fontFamily: "BMHANNA",
        }}
      >
        {Questions.name}
      </p>

      {Questions.answers.map((answer, index) => (
        <button
          //onclick 함수
          onClick={() => {
            savingAnswer(index);
          }}
          key={`answer-${index}`}
          style={{
            border: "2px solid white",
            border: "2px solid white",
            width: "250px",
            height: "50px",
            borderRadius: "20px",
            margin: "10px 10px 10px 10px",
            color: colorSet.white,
            backgroundColor: colorSet.blue,
            fontSize: "16px",
            fontWeight: "normal",
            fontFamily: "BMHANNA",
          }}
        >
          {answer}
        </button>
      ))}
    </>
  );
};

export default QuestionsAnswers;
