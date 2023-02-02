import MateRecommendation from "components/MateRecommendation";
import PlaceRecommendation from "components/PlaceRecommendation";
import ShareButton from "components/ShareButton";

const ResultPage = () => {
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
      <PlaceRecommendation place="library" />

      <MateRecommendation major="전기전자컴퓨터공학부" sid={20} name="김여원" />

      <div style={{ display: "flex", gap: "15px", marginTop: "50px" }}>
        <ShareButton type="kakao" />
        <ShareButton />
      </div>
    </div>
  );
};

export default ResultPage;
