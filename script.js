let likes = 1200;

const likeBtn = document.querySelector(".like");
const likeCount = document.querySelector(".like-count");

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.innerText = likes;
});