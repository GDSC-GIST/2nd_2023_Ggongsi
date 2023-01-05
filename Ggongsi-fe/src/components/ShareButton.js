import { colorSet } from "utils/style";

const ShareButton = () => {
  const onClick = () => {};

  return (
    <button
      onClick={onClick}
      style={{
        width: "40px",
        height: "40px",
        border: "none",
        borderRadius: "20px",
        background: colorSet.white,
      }}
    >
      <img />
    </button>
  );
};

export default ShareButton;
