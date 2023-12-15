// script for toggle 
document.querySelector(".hamburger-menu").addEventListener("click", () => {
    document.querySelector(".container").classList.toggle("change");
});

// script for scroll btn 
document.querySelector(".scroll-btn").addEventListener("click", () => {
    document.querySelector("html").style.scrollBehavior = "smooth";
    setTimeout(() => {
      document.querySelector("html").style.scrollBehavior = "unset";
    }, 2000);
  });