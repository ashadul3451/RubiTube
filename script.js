let likes = 1200;

const likeBtn = document.querySelector(".like");
const likeCount = document.querySelector(".like-count");

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.innerText = likes;
});
function addComment() {
  let input = document.getElementById("commentInput");
  let comments = document.getElementById("comments");

  if(input.value.trim() !== "") {
    let p = document.createElement("p");
    p.innerText = input.value;
    comments.appendChild(p);
    input.value = "";
  }
}
const followBtn = document.querySelector(".follow-btn");

followBtn.addEventListener("click", () => {
  if (followBtn.innerHTML === "👤<br>Follow") {
    followBtn.innerHTML = "👤<br>Following";
  } else {
    followBtn.innerHTML = "👤<br>Follow";
  }
});
const shareBtn = document.querySelector(".share-btn");

shareBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(window.location.href);
  alert("RubiTube link copied!");
});
const videos = [
  "video.mp4",
  "video2.mp4",
  "video3.mp4"
];

let currentVideo = 0;

function nextVideo() {
  currentVideo++;

  if (currentVideo >= videos.length) {
    currentVideo = 0;
  }

  const video = document.getElementById("videoPlayer");
  video.src = videos[currentVideo];
  video.load();
  video.play();
}
let startY = 0;

document.addEventListener("touchstart", (e) => {
  startY = e.touches[0].clientY;
});

document.addEventListener("touchend", (e) => {
  let endY = e.changedTouches[0].clientY;

  if (startY - endY > 50) {
    nextVideo();
  }
});
const video = document.getElementById("videoPlayer");

video.addEventListener("dblclick", () => {
  likes++;
  likeCount.innerText = likes;

  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "absolute";
  heart.style.top = "50%";
  heart.style.left = "50%";
  heart.style.fontSize = "60px";
  heart.style.transform = "translate(-50%,-50%)";
  heart.style.zIndex = "9999";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 800);
});
