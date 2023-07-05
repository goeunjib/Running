const main = document.querySelector('main');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');
console.log(footer.offsetHeight);

// const resizeMain = () => {
//   main.style.height = `${main.offsetHeight - footer.offsetHeight - nav.offsetHeight}px`;
//   console.log(main.offsetHeight)
// }
// resizeMain();

(resizeMain = () => {
  main.style.height = `${main.offsetHeight - footer.offsetHeight - nav.offsetHeight}px`;
})();

// addEventListener('resize', resizeMain);

const mySlide = new Swiper('#my-swiper' ,{
  autoplay: {
    delay: 2000
  },
  loop: true,
  scrollbar: {
    el: ".swiper-scrollbar",
    snapOnRelease: true,
    horizontalClass: 'scroll-style'
  },
  // 스크린 경계치
  slidesPerView: 1,
  breakpoints: {
    480: {// 480보다 크거나 같으면
      slidesPerView: 2,// 화면에 보여지는 이미지 갯수
    },
    1200: {// 1200보다 크거나 같으면
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});

// 해당 메뉴를 클릭하면 해당 페이지 이동
// $('.global_nav a').on('click');
const menuA = document.querySelectorAll('.global_nav a');
console.log(menuA);
// 배열.forEach((배열의각요소, 배열의인덱스번호)=>{ 실행문 });
menuA.forEach((item, idx) => {
  item.addEventListener('click',e=>{
    e.preventDefault();

    // .slideToLoop(슬라이드인덱스, 전환속도, 전환이벤트true/false)
    mySlide.slideToLoop(idx);
    mySlide.autoplay.start();
  })
});