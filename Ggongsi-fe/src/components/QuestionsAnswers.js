//import { getPlaceObject } from "utils/placE";
import { getQuestions } from "utils/question";
import { colorSet } from "utils/util";
import { useAtom } from "jotai";
import { answerNoAtom, questionNoAtom } from "utils/atom";
import React, { useEffect } from "react";
import axios from "axios";
import { infoAtom } from "utils/atom";
import { BASE_URL } from "utils/util";
import { useNavigate } from "react-router-dom";

const QuestionsAnswers = ({ question }) => {
  const Questions = getQuestions(question);
  const [answerNo, setAnswerNo] = useAtom(answerNoAtom);
  const [questionNo, setQuestionNo] = useAtom(questionNoAtom);
  const [info] = useAtom(infoAtom);
  
  
  const navigate = useNavigate()
  //const 답변 저장 함수
  const savingAnswer = (index) => {
    if (answerNo.length <= questionNo) {
      setAnswerNo((prev) => [...prev, index]);
    }

    if (questionNo < 6) {
      setQuestionNo((prev) => prev + 1);
    }
  };
  const getcheckAnwser = async() => {

    const response = await axios.get(
      `${BASE_URL}/studymate/test/${info.studentID}`
    );
return(response);
  };


  const sendAnswer = (method,index) => {
    axios({
      method: method,
      url: `${BASE_URL}/studymate/user/${info.studentID}`,
      //만약에 url에 변수를 넣고 싶다면 `(backtick,억음부호)를 넣어주고, ${변수}로 표시해야 적용됨

      data: {
        name: info.name,
        studentID: info.studentID,
        major: info.major,
        answer1: answerNo[0] + 1,
        answer2: answerNo[1] + 1,
        answer3: answerNo[2] + 1,
        answer4: answerNo[3] + 1,
        answer5: answerNo[4] + 1,
        answer6: answerNo[5] + 1,
        answer7: index + 1,
      },
    })
      .then(function (response) {
        navigate("/result");
      })
      .catch((error) => {
        console.error(error.message);
      });

  };

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
            if (answerNo.length==6){
            getcheckAnwser().then((result)=>{
              result.data === "True"? sendAnswer("PUT",index) : sendAnswer("POST",index);
            })
          }
            // savingAnswer(index);
            // if (answerNo.length == 6) {
            //   sendAnswer(index);
            // }
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

/*       transformRequest: [
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
      ], */
//headers: { "X-Requested-With": "XMLHttpRequest" },
//여기에서 header가 필요한가?

//timeout: 2000, //해당 시간보다 지연될 경우 요청 종료
