import { encodePlace } from "utils/place";
import KakaoImage from "assets/kakaotalk_share.png";
import ShareImage from "assets/share.png";

const ShareButton = ({ type = "", place = "" }) => {
  const onClick = () => {
    switch (type) {
      case "kakao":
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

        break;

      default:
        navigator.clipboard.writeText(
          `http://ggongsi.site/result?n=${encodePlace(place)}`
        );
        break;
    }
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
        background: type ? "#FEE500" : "none",
      }}
    >
      {type ? (
        <img
          src={KakaoImage}
          style={{ width: "34px", height: "34px", borderRadius: "17px" }}
        />
      ) : (
        <img
          src={ShareImage}
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      )}
    </button>
  );
};

export default ShareButton;
