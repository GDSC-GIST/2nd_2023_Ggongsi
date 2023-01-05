import LibraryImage from "assets/library.png";
import DormitoryImage from "assets/dormitory.png";
import SeminarImage from "assets/seminar.png";
import CafeImage from "assets/cafe.png";

export const getPlaceObject = (place) => {
  switch (place) {
    case "library":
      return library;

    case "dormitory":
      return dormitory;

    case "seminar":
      return seminar;

    case "cafe":
      return cafe;

    default:
      return library;
  }
};

export const library = {
  name: "중앙 도서관",
  description:
    "방에서 벗어나서 공부하는 걸 좋아하는 당신은 혼자서 집중할 수 있는 도서관이 가장 적합하겠네요! 공부를 할 때만큼은 주변 것들에 영향을 받지 않고 제대로 집중하는 타입이에요.",
  image: LibraryImage,
  alt: "",
};

export const dormitory = {
  name: "기숙사",
  description:
    "밖에 나가는 건 귀찮아하고 방에서 공부하는 걸 좋아하는 당신은 기숙사 방이 최고의 공부 장소입니다. 아마 mbti도 i일 가능성이 높을지도?",
  image: DormitoryImage,
  alt: "",
};

export const seminar = {
  name: "세미나실",
  description: "세미나실",
  image: SeminarImage,
  alt: "",
};

export const cafe = {
  name: "카페",
  description:
    "당신은 지속적인 카페인과 간식 수혈이 필요한 사람! 그래서 무한 공급 가능한 카페에서 공부하기에 적합해요. 카페에서 흘러나오는 노래도 즐기면서 공부하는 편!",
  image: CafeImage,
  alt: "",
};
