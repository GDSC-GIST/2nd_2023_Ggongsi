import { encodePlace } from "utils/place";
import KakaoImage from "assets/kakaotalk_share.png";

const KakaoShareButton = ({ place = "" }) => {
  const onClick = () => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
    }

    window.Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "지공시",
        imageUrl: "",
        link: {
          webUrl: `http://ggongsi.site/result?n=${encodePlace(place)}`,
        },
      },
    });
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: "0px",
        width: "40px",
        height: "40px",
        border: "none",
        borderRadius: "20px",
        background: "#FEE500",
      }}
    >
      <img
        src={KakaoImage}
        style={{ width: "34px", height: "34px", borderRadius: "17px" }}
      />
    </button>
  );
};

export default KakaoShareButton;
