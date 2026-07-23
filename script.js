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
  video2.mp4
  video3.mp4
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
