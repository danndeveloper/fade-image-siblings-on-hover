const images = document.querySelectorAll(".image");

images.forEach(function (image) {
  image.addEventListener("mouseover", function (event) {
    fadeOut(event.target);
  });

  image.addEventListener("mouseout", fadeReset);
});

function fadeOut(target) {
  images.forEach(function (image) {
    image.style.opacity = "0.7";
    target.style.opacity = "1";
  });
}

function fadeReset() {
  images.forEach(function (image) {
    image.style.opacity = "1";
  });
}
