
import question_one from "assets/question1.png";
import question_two from "assets/question2.png";
import question_three from "assets/question3.png";
import question_four from "assets/question4.png";
import question_five from "assets/question5.png";
import question_six from "assets/question6.png";
import question_seven from "assets/question7.png";

export const getQuestions = (question) => {
  switch (question) {
    case "question1":
      return question1;

    case "qustion2":
      return question2;

    case "question3":
      return question3;

    case "question4":
      return question4;

    case "question5":
      return question5;
    case "question6":
      return question6;
    case "question7":
      return question7;
    default:
      return question1;
  }
};
var answers = new Array();
export const question1 = {
  //배민 한나체 git 확인하기
  name: "나의 공부 유형은",
  answer1:
  "아침형~ 일과 중에 계획대로!",
  answer2:
  "올빼미~ 밤샐거에요!",
  image: question_one,
  alt: "",
};

export const question2 = {
  name: "공부는 역시...여기에서!",
  answer1:
  "공부는 역시 혼자 방에서!",
  answer2:
  "방에서 멀리 나가야죠!",
  image: question_two,
  alt: "",
};

export const question3 = {
  name: "나의 공부 타입은",
  answer1:
  "친구랑 같이 이야기하면서 공부해요!",
  answer2:
  "혼자 집중하는게 좋아요!",
  image: question_three,
  alt: "",
};

export const question4 = {
  name: "공부할 때 먹는 간식은...",
  answer1:
  "주문해서 바로 먹는게 좋아요!",
  answer2:
  "직접 준비한 간식이 좋아요!",
  answer3:
  "식사는 없어~배고파도~",
  image: question_four,
  alt: "",
};

export const question5 = {
  name: "공부할 때 울려퍼지는 음악 소리!",
  answer1:
  "좋아요~ 리듬에 몸을 맡겨!",
  answer2:
  "다른 사람의 플레이리스트는 별로...",
  image: question_five,
  alt: "",
};

export const question6 = {
  name: "공부하다 모르는 게 생겼어요! 이럴때는 역시...",
  answer1:
  "(똑똑) 교수님, 질문이요!",
  answer2:
  "친구들이랑 상의해봐요!",
  answer3:
  "구글링이 최고! 끝까지 혼자 해보겠어요!",
  image: question_six,
  alt: "",
};

export const question7 ={
  name: "조용한 곳에서 공부하면 나는...",
  answer1:
  "졸려요...",
  answer2:
  "집중이 잘 돼요!",
  image: question_seven,
  alt: "",
}
