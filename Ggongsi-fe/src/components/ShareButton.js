import { encodePlace } from "utils/place";
import CopyToClipboard from "react-copy-to-clipboard";
import ShareImage from "assets/share.png";

const ShareButton = ({ place = "" }) => {
  return (
    <CopyToClipboard
      text={`http://ggongsi.site/result?n=${encodePlace(place)}`}
    >
      <button
        style={{
          padding: "0px",
          width: "40px",
          height: "40px",
          border: "none",
          borderRadius: "20px",
        }}
      >
        <img
          src={ShareImage}
          style={{ width: "40px", height: "40px", borderRadius: "20px" }}
        />
      </button>
    </CopyToClipboard>
  );
};

export default ShareButton;
