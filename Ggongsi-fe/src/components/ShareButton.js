import { colorSet } from "utils/style";
import KakaoImage from "assets/kakaotalk_sharing_btn_small.png";

const ShareButton = ({ type = "" }) => {
  const onClick = () => {
    switch (type) {
      case "instagram":
        /* window.location.assign(
          "Intent://instagram.com/#intent;scheme=https;package=com.instagram.share.ADD_TO_STORY;end"
        ); */
        break;

      case "kakao":
        if (!window.Kakao.isInitialized()) {
          window.Kakao.init(process.env.REACT_APP_KAKAO_JAVASCRIPT_KEY);
        }

        window.Kakao.Share.sendDefault({
          objectType: "text",
          text: "지공시링크",
          link: { webUrl: "http://localhost:3000" },
        });

        break;

      default:
        navigator.clipboard.writeText("지공시 링크가 들어갈 예정!");
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
        background: type === colorSet.white,
      }}
    >
      <img
        src={KakaoImage}
        style={{ width: "40px", height: "40px", borderRadius: "20px" }}
      />
    </button>
  );
};

export default ShareButton;
