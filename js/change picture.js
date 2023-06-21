var imageContainer = document.querySelector(".image-transition");
var imageCount = 128;

for (var i = 1; i <= imageCount; i++) {
  var imgSrc = `png/${i}.png`;
  var imgAlt = `Image ${i}`;
  var imgElement = document.createElement("img");
  imgElement.src = imgSrc;
  imgElement.alt = imgAlt;
  imgElement.setAttribute("data-image-number", i);
  imageContainer.appendChild(imgElement);
}

var images = document.querySelectorAll(".image-transition img");
var activeImageIndex = 0;

var numberDisplay = document.createElement("div");
numberDisplay.classList.add("number-display");

function updateImageNumber() {
  var activeImage = images[activeImageIndex];
  var imageNumber = activeImage.getAttribute("data-image-number");
  numberDisplay.textContent = `${imageNumber}`;
}

function getRandomIndex() {
  var randomIndex = Math.floor(Math.random() * images.length);
  if (randomIndex === activeImageIndex) {
    return getRandomIndex();
  }
  return randomIndex;
}

function toggleActiveClass(previousIndex, currentIndex) {
  images[previousIndex].classList.remove("active");
  images[currentIndex].classList.add("active");
}

function transitionImages() {
  var previousIndex = activeImageIndex;
  activeImageIndex = getRandomIndex();
  toggleActiveClass(previousIndex, activeImageIndex);
}

function changeImages() {
  var previousIndex = activeImageIndex;
  activeImageIndex = (activeImageIndex + 1) % images.length;
  toggleActiveClass(previousIndex, activeImageIndex);
}

function changeLastImages() {
  var previousIndex = activeImageIndex;
  activeImageIndex = (activeImageIndex - 1 + images.length) % images.length;
  toggleActiveClass(previousIndex, activeImageIndex);
}

function goToAnotherPage(url) {
  window.location.href = url;
}

imageContainer.appendChild(numberDisplay);
updateImageNumber();

// 以下是对应的事件处理函数
function randomImage() {
  transitionImages();
  updateImageNumber();
}

function nextImage() {
  changeImages();
  updateImageNumber();
}

function lastImage() {
  changeLastImages();
  updateImageNumber();
}

function goToLogPage() {
  goToAnotherPage("log.html");
}

function goToIndexPage() {
  goToAnotherPage("index.html");
}

function goToBlackThemePage() {
  goToAnotherPage("blacktheme.html");
}


