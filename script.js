function menuShow() {
  let menuMobile = document.querySelector(".mobileMenu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "https://i.postimg.cc/SKBsXNnr/listapng.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "https://i.postimg.cc/J0HT4xB0/CLOSEXPNG.png";
  }
}
