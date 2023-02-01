//import { getPlaceObject } from "utils/placE";
import { getQuestions } from "utils/question";
import { colorSet } from "utils/style";
import { useNavigate} from 'react-router';


const QuestionsAnswers = ({ question }) => {
  const Questions = getQuestions(question);

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
      >
      </p>


      <img src={Questions.image} alt={Questions.alt} />
      <p
        //onClick = {answersaving}
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
      <div
      style = {{
        border: '2px solid white',
        borderRadius: '20px',
        width: '250px',
        height: '50px',
        margin: "10px",
      }}>
      <p
        style={{
          maxWidth: "300px",
          margin: "10px 10px 10px 10px",
          color: colorSet.white,
          fontSize: "16px",
          fontWeight: "normal",
          //border: '2px solid',
          //borderRadius: "20px",
          fontFamily: 'BMHANNA',

          
        }}
      >
        {Questions.answer1}
      </p>
      </div>
      <div
      style = {{
        border: '2px solid white',
        borderRadius: '20px',
        height: '50px',
        width: '250px',
        margin: '10px',
      }}>
      <p
        style={{
          maxWidth: "300px",
          margin: "10px 10px 10px 10px",
          color: colorSet.white,
          fontSize: "16px",
          fontWeight: "normal",
          //border: '2px solid',
          //borderRadius: "20px",
          fontFamily:'BMHANNA',

          
        }}
      >
        {Questions.answer2}
      </p>
      </div>
      <div
      style = {{
        border: '2px solid white',
        borderRadius: '20px',
        height: '50px',
        width: '250px',
        margin: '10px',
      }}>
      <p
        style={{
          maxWidth: "300px",
          margin: "10px 10px 10px 10px",
          color: colorSet.white,
          fontSize: "16px",
          fontWeight: "normal",
          //border: '2px solid',
          //borderRadius: "20px",
          fontFamily:'BMHANNA',

          
        }}
      >
        {Questions.answer3}
      </p>
      </div>
    </>
  );
};

export default QuestionsAnswers;
