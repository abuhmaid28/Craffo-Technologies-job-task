var swiper = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

swiper.on("slideChangeTransitionStart", function () {
  const bullets = document.querySelectorAll(".swiper-pagination-bullet");
  bullets.forEach((bullet) => {
    const bulletBefore = bullet.querySelector("::before");
    bulletBefore.style.animation = "none";
    void bulletBefore.offsetWidth; // trigger reflow
    bulletBefore.style.animation = null;
  });
});
