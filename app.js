window.addEventListener("load", function () {
  baguetteBox.run(".gallery");
});

// search filtering

let searchBox = document.querySelector("#search-area");
let images = document.querySelectorAll("a");

searchBox.addEventListener("keyup", () => {
  for (let i = 0; i < images.length; i++) {
    if (
      images[i].dataset.caption.includes(searchBox.value.toLowerCase()) ||
      searchBox.value.length == 0
    ) {
      images[i].style.display = "initial";
    } else {
      images[i].style.display = "none";
    }
  }
});
