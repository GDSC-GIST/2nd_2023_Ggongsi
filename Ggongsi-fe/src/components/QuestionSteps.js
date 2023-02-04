import { colorSet } from "utils/style";

const QuestionSteps = ({ stepsFilled }) => {
  return (
    <button
      style={{
        width: "5px",
        height: "14px",
        margin: "30px 10px 30px 10px",
        border: "solid 1.4px white ",
        borderRadius: "100%",
        background: stepsFilled ? colorSet.white : "none",
        //props
      }}
    >
      <img />
    </button>
  );
};

export default QuestionSteps;
