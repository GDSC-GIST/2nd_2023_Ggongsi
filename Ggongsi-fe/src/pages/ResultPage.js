import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAtom } from "jotai";
import axios from "axios";
import MateRecommendation from "components/MateRecommendation";
import KakaoShareButton from "components/KakaoShareButton";
import PlaceRecommendation from "components/PlaceRecommendation";
import ShareButton from "components/ShareButton";
import { infoAtom } from "utils/atom";
import { getPlaceFromQuery } from "utils/place";
import { BASE_URL } from "utils/util";

const ResultPage = () => {
  const [info] = useAtom(infoAtom);
  const [place, setPlace] = useState("");
  const [mate, setMate] = useState({});
  const [query] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (query.get("n")) {
      setPlace(getPlaceFromQuery(query.get("n")).name);
    } else if (!info.studentID) {
      navigate("/");
    }
  }, [query, info]);

  useEffect(() => {
    const getPlace = async () => {
      const response = await axios.get(
        `${BASE_URL}/studymate/findplace/${info.studentID}`
      );

      setPlace(response.data.name);
    };

    const getMate = async () => {
      const response = await axios.get(
        `${BASE_URL}/studymate/findmate/${info.studentID}`
      );

      setMate(response.data);
    };

    if (!query.get("n") && info.studentID) {
      getPlace();
      getMate();
    }
  }, [query, info]);

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
      <PlaceRecommendation place={place} />

      {mate.name ? (
        <>
          <MateRecommendation
            major={mate.major}
            sid={mate.studentID}
            name={mate.name}
          />

          <div style={{ display: "flex", gap: "15px", marginTop: "50px" }}>
            <KakaoShareButton place={place} />
            <ShareButton place={place} />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ResultPage;
