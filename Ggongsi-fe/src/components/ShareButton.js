import KakaoImage from "assets/kakaotalk_share.png";
import ShareImage from "assets/share.png";

const ShareButton = ({ type = "" }) => {
  const onClick = () => {
    switch (type) {
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
