import { colorSet } from "utils/style";

const MateRecommendation = ({ major = "", sid = 0, name = "" }) => {
  return (
    <>
      <p
        style={{
          margin: "0px 0px 30px 0px",
          lineHeight: "20px",
          color: colorSet.white,
          fontFamily: "Hanna",
          fontSize: "20px",
        }}
      >
        추천 스터디 메이트
      </p>
      <p
        style={{
          margin: "0px 0px 30px 0px",
          lineHeight: "16px",
          color: colorSet.white,
          fontFamily: "Hanna",
          fontSize: "16px",
          fontWeight: "normal",
        }}
      >
        {`${major}\n${sid.toString().padStart(2, 0)}학번 ${name}`}
      </p>
    </>
  );
};

export default MateRecommendation;
