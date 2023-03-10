import { infoAtom } from "utils/atom";
import { useAtom } from "jotai";
import { useNavigate } from "react-router";
import { colorSet } from "utils/util";

const Input = () => {
  let cnt = 0;
  const navigate = useNavigate();
  const navigateToQuestion = () => {
    if (info.name != "" && info.studentID != "" && info.major != "") {
      navigate("/question");
    }
  };

  const [info, setInfo] = useAtom(infoAtom);

  const savingID = (id) => {
    setInfo((prev) => ({ ...prev, studentID: id }));
  };
  const savingMajor = (major) => {
    setInfo((prev) => ({ ...prev, major: major }));
  };
  const savingName = (name) => {
    setInfo((prev) => ({ ...prev, name: name }));
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
      <h2
        style={{
          display: "flex",
          gap: "15px",
          marginTop: "110px",
          fontSize: "22px",
          fontWeight: "normal",
          fontFamily: "Hanna",
        }}
      >
        전공, 학번, 이름을 입력하세요.
      </h2>
      <div>
        <label
          style={{
            fontSize: "20px",
            fontWeight: "normal",
            fontFamily: "HannaAir",
            fontWeight: "bold",
          }}
        >
          {" "}
          전공 :{" "}
          <select
            name="choice"
            defaultValue=""
            onChange={(e) => {
              savingMajor(e.target.value);
            }}
            style={{
              border: "2px solid white",
              borderRadius: "20px",
              paddingLeft: "15px",
              fontSize: "15px",
              width: "200px",
              paddingTop: "7px",
              paddingBottom: "7px",
              marginTop: "20px",
            }}
          >
            <option value="" disabled>
              선택해주세요
            </option>
            <option value="기초교육학부">기초교육학부</option>
            <option value="전기전자컴퓨터공학부">전기전자컴퓨터공학부</option>
            <option value="화학과">화학과</option>
            <option value="물리광과학과">물리광과학과</option>
            <option value="생명과학부">생명과학부</option>
            <option value="지구환경공학부">지구환경공학부</option>
            <option value="기계공학부">기계공학부</option>
            <option value="신소재공학부">신소재공학부</option>
          </select>
        </label>
      </div>
      <div>
        <label
          style={{
            fontSize: "20px",
            fontWeight: "normal",
            fontFamily: "HannaAir",
            fontWeight: "bold",
          }}
        >
          {" "}
          학번 :{" "}
          <input
            id="number"
            type="text"
            placeholder="ex.20205001"
            maxLength={8}
            value={info.studentID}
            style={{
              paddingLeft: "15px",
              fontWeight: "normal",
              fontSize: "15px",
              border: "2px solid white",
              borderRadius: "20px",
              width: "180px",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingTop: "8px",
              marginTop: "15px",
            }}
            onChange={(e) => {
              savingID(e.target.value);
              cnt = cnt + 1;
            }}
          />{" "}
        </label>
      </div>
      <div>
        <label
          style={{
            fontSize: "20px",
            fontWeight: "normal",
            fontFamily: "HannaAir",
            fontWeight: "bold",
          }}
        >
          {" "}
          이름 :{" "}
          <input
            id="name"
            type="text"
            value={info.name}
            style={{
              paddingLeft: "15px",
              fontWeight: "normal",
              fontSize: "15px",
              border: "2px solid white",
              borderRadius: "20px",
              width: "180px",
              paddingTop: "8px",
              paddingBottom: "8px",
              paddingTop: "8px",
              marginTop: "15px",
              marginBottom: "40px",
            }}
            onChange={(e) => {
              savingName(e.target.value);
            }}
          />
        </label>
      </div>
      <div>
        <button
          onClick={navigateToQuestion}
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
          Next{" "}
        </button>
      </div>
    </div>
  );
};

export default Input;
