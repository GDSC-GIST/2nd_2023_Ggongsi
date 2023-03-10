import main from "./images/mainlo2.png";
import { useNavigate } from "react-router";
import { colorSet } from "utils/util";

const Main = () => {
  const navigate = useNavigate();

  const navigateToInput = () => {
    navigate("/Input");
  };
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
      <div>
        <img style={{ width: "400px", minWidth: "400px" }} src={main} alt="" />
        <p
          style={{
            margin: "-10px 0px 25px 0px",
            lineHeight: "20px",
            color: colorSet.white,
            fontSize: "20px",
            fontFamily: "HannaAir",
            fontWeight: "bold",
          }}
        >
          나에게 맞는 스터디 메이트는?
        </p>
      </div>
      <div>
        <button
          onClick={navigateToInput}
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
            fontFamily: "Hanna",
          }}
        >
          {" "}
          Start{" "}
        </button>
      </div>
    </div>
  );
};
export default Main;
