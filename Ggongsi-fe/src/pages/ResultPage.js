import MateRecommendation from "components/MateRecommendation";
import PlaceRecommendation from "components/PlaceRecommendation";
import ShareButton from "components/ShareButton";
import { library } from "utils/place";
import { colorSet } from "utils/style";

const ResultPage = () => {
  return (
    <div style={{ height: "100%" }}>
      <div style={{ height: "60px", padding: "20px" }}>
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

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "calc(100%- 60px)",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <PlaceRecommendation place="library" />

        <MateRecommendation
          major="전기전자컴퓨터공학부"
          sid={20}
          name="김여원"
        />

        <div style={{ display: "flex", gap: "15px", marginTop: "50px" }}>
          <ShareButton />
          <ShareButton />
          <ShareButton />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
