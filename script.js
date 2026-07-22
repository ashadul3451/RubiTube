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
