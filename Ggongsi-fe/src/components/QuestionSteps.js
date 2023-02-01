import { colorSet } from "utils/style";

const QuestionSteps = ({ stepsFilled }) => {
  return (
    <button
      style={{
        width: "13px",
        height: "15px",
        margin: "30px 10px 30px 10px",
        border: "solid 2px white ",
        borderRadius: "50%",
        background: stepsFilled ? colorSet.white : "none",
        //props
      }}
    >
      <img />
    </button>
  );
};

export default QuestionSteps;
