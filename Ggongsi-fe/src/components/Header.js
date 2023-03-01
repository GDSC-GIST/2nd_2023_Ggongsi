import { useNavigate } from "react-router-dom";
import { colorSet } from "utils/util";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ height: "20px", margin: "0px 0px 30px 0px", padding: "20px" }}
    >
      <button
        onClick={() => {
          navigate("/");
          window.location.reload();
        }}
        style={{ padding: "0px", border: "none", background: "none" }}
      >
        <p
          style={{
            margin: "0px",
            lineHeight: "20px",
            color: colorSet.pink,
            fontFamily: "Hanna",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          지공시
        </p>
      </button>
    </div>
  );
};

export default Header;
