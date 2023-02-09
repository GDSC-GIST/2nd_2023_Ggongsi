import axios from "axios";
import { answerNoAtom } from "./atom";

axios({
  method: "post",
  url: "/user/${studentID}", //studentID
  transformRequest: [
    function (data, headers) {
      const ans1 = answerNo[0];
      const ans2 = answerNo[1];
      const ans3 = answerNo[2];
      const ans4 = answerNo[3];
      const ans5 = answerNo[4];
      const ans6 = answerNo[5];
      const ans7 = answerNo[6];
      return data;
    },
  ],
  //headers: { "X-Requested-With": "XMLHttpRequest" },
  //여기에서 header가 필요한가?
  data: {
    name: "",
    studentID: "",
    major: "",
    answer1: ans1,
    answer2: ans2,
    answer3: ans3,
    answer4: ans4,
    answer5: ans5,
    answer6: ans6,
    answer7: ans7,
  },
  timeout: 2000, //해당 시간보다 지연될 경우 요청 종료
});

//transformRequest : 서버에 전달되기 전에 요청 데이터를 바꿀 수 있다

//put method는 서버 내부적으로 get -> post 과정을 거침
//post method와 비슷한 형태
/* axios
  .put("url", {
    username: "",
    password: "",
  })
  .then(function (response) {
    // response
  })
  .catch(function (error) {
    // 오류발생시 실행
  }); */

/* transformRequest: [function (data, headers) {
    // 데이터를 변환하려는 작업 수행

    return data;
  }], */
