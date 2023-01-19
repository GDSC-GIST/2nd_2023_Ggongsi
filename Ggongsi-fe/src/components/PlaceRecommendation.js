import { getPlaceObject } from "utils/place";
import { colorSet } from "utils/style";

const PlaceRecommendation = ({ place }) => {
  const placeObject = getPlaceObject(place);

  return (
    <>
      <p
        style={{
          margin: "0px 0px 30px 0px",
          lineHeight: "20px",
          color: colorSet.white,
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        나에게 맞는 공부 장소는
      </p>
      <p
        style={{
          margin: "0px",
          lineHeight: "20px",
          color: colorSet.white,
          fontSize: "20px",
          fontWeight: "bold",
          wordBreak: "keep-all",
        }}
      >
        {placeObject.name}
      </p>

      <img src={placeObject.image} alt={placeObject.alt} />

      <p
        style={{
          maxWidth: "300px",
          margin: "0px 0px 100px 0px",
          color: colorSet.white,
          fontSize: "16px",
          fontWeight: "normal",
        }}
      >
        {placeObject.description}
      </p>
    </>
  );
};

export default PlaceRecommendation;
