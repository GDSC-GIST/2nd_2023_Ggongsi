import { colorSet } from "utils/style";

const Header = () => {
  return (
    <div
      style={{ height: "20px", margin: "0px 0px 30px 0px", padding: "20px" }}
    >
      <button style={{ padding: "0px", border: "none", background: "none" }}>
        <p
          style={{
            margin: "0px",
            lineHeight: "20px",
            color: colorSet.pink,
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
