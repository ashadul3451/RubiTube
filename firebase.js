import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "rubitube.firebaseapp.com",
  projectId: "rubitube",
  storageBucket: "rubitube.firebasestorage.app",
  messagingSenderId: "779964183222",
  appId: "1:779964183222:web:d48e93c3423ecabe8dac17"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login Success!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });
});