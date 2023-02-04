//import { getPlaceObject } from "utils/placE";
import { getQuestions } from "utils/question";
import { colorSet } from "utils/style";
import { useNavigate } from "react-router";
import { useAtom } from "jotai";
import { answerNoAtom, questionNoAtom } from "utils/atom";
import { useEffect } from "react";
import axios from "axios";
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
  const sendAnswer = () => {
    axios({
      method: "post",
      //url: `/user/${studentID}`, //studentID
      url: "/user/studentID",
      //만약에 url에 변수를 넣고 싶다면 `(backtick,억음부호)를 넣어주고, ${변수}로 표시해야 적용됨
      transformRequest: [
        (data) => {
          const ans1 = answerNo[0];
          const ans2 = answerNo[1];
          const ans3 = answerNo[2];
          const ans4 = answerNo[3];
          const ans5 = answerNo[4];
          const ans6 = answerNo[5];
          const ans7 = answerNo[6];
          data = {
            name: "",
            studentID: "",
            major: "",
            answer1: ans1,
            answer2: ans2,
            answer3: ans3,
            answer4: ans4,
            answer5: ans5,
            answer6: ans6,
            answer7: ans7,
          };
          return data;
        },
      ],
      //headers: { "X-Requested-With": "XMLHttpRequest" },
      //여기에서 header가 필요한가?

      timeout: 2000, //해당 시간보다 지연될 경우 요청 종료
    });
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
            if (answerNo.length == 7) {
              console.log("sendAnswer 작동");
              sendAnswer();
            }
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
//store answer - POST
//URL / user/{studentID}
