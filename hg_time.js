let hello = document.querySelector("#hello"); //인삿말
let famous = document.querySelector("#famous"); //랜덤명언10개
function updateTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
    hello.textContent = "Good Morning,"; //시간별 인삿말
  } else if (hours > 12) {
    hours = hours - 12;
    hello.textContent = "Good afternoon,"; //시간별 인삿말
  } else if (hours > 8) {
    hello.textContent = "Good night,"; //시간별 인삿말
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  document.getElementById("nowTime").textContent = `${hours}:${minutes}`;
}
updateTime(); //처음실행
setInterval(updateTime, 1000); //1초뒤실행

famousText = [
  //명언배열
  `"No matter how your heart is grieving,if you keep on believing, the dream that you wish will come true."`, //0번
  `"The flower that blooms in adversity is the most rare and beautiful of them all."`, //1번
  `"The past can hurt. But the way I see it, you can either run from it or learn from it."`, //2번
  `"All it takes is faith and trust, oh! and something I forgot: dust."`, //3번
  `"You're braver than you believe, stronger than you seem, and smarter than you think."`, //4번
  `"Once you've met someone, you never really forget them."`, //5번
  `"They say that the best blaze burns brightest, when circumstances are at their worst."`, //6번
  `"We each need to find our own inspiration..."`, //7번
  `"When you're old, all you want to do is stare at the scenery. It's so strange, I've never felt so peaceful."`, //8번
  `"Now I've got something I want to protect. It's you."`, //9번
];
let randomFamous = famousText[Math.floor(Math.random() * famousText.length)]; //famous 배열의  랜덤 숫자
famous.textContent = randomFamous;
// 처음 웹페이지를 켤때 실행하기 or 할일이 저장됐을때 실행하기
function getTodo() {
  // 할일 보여줄 p태그 가져오기
  let p = document.getElementById("word");
  // 로컬스토리지에 저장된 데이터 가져오기
  // *존재하지 않을경우 null이 출력됨
  let todo = localStorage.getItem("todo");
}
function setTodo() {
  // input에 적은 내용 가져오기
  let input = document.querySelector(".today").value;
  // 로컬스토리지에 적은내용 저장하기
  localStorage.setItem("todo", input);
}

let word = document.getElementById("word");
let today = document.querySelector(".today");
today.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setTodo();
    word.textContent = today.value;

    today.style.display = "none";

    event.preventDefault();

    // word.innerHTML = "-" + today.value;

    // let i = 0;
    // today.classList.add("hidden");
    // i++;
  }
});
// word.addEventListener("change", function (event) {
//   if (event.target.checked) {
//     getTodo();
//   } else {
//   }
// });
