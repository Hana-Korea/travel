//  *****  *****
// ***** footer에 있는 &copy 연도 자동 설정 *****
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();
//  ***** close links *****
// link ul 보이도록 하기!!!!! 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
navToggle.addEventListener("click", () => {
  linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  console.log(linksHeight);
});

// 스크롤 내리면 nav-header 배경색 나타남
window.addEventListener("scroll", () => {
  const navHeader = document.querySelector(".nav-header");
  const navHeight = navHeader.getBoundingClientRect().height;
  const scrollHeight = window.scrollY;
  // console.log("nav:", navHeight); "❌"
  // console.log("scroll:", scrollHeight);"❌"
  if (navHeight < scrollHeight) {
    navHeader.classList.add("show-nav-header");
  } else {
    navHeader.classList.remove("show-nav-header");
  }
});

//  스크롤을 내리다가 어느 지점에 도달하면 "맨 위로" 올라가는 버튼 visibility: visible;
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", () => {
  // console.log(window.scrollY); "❌"
  if (window.scrollY > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
//  ***** select links *****
const scrollLinks = document.querySelectorAll(".scroll-links");
// scrollLinks.forEach();

//  ***** 도쿄 슬라이드 넘기기 *****
const japanSlide = document.querySelectorAll(".japan-slide");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
let count = 0;
nextBtn.addEventListener("click", () => {
  count++;
  if (count > japanSlide.length - 1) {
    count = 0;
  }
  carousel();
});
prevBtn.addEventListener("click", () => {
  count--;
  if (count < 0) {
    count = japanSlide.length - 1;
  }
  carousel();
});
function carousel() {
  japanSlide.forEach((slide, index) => {
    slide.style.transform = `translateX(-${index}*100%)`;
  });
}
