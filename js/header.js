document.addEventListener("DOMContentLoaded", function () {
    const imgHeight = document.querySelector("#js-mainVisual").offsetHeight;
    const header = document.querySelector("#js-header");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY < imgHeight) {
        header.classList.remove("change-color");
      } else {
        header.classList.add("change-color");
      }
    });
  });