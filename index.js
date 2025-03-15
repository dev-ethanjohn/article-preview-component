// const shareButton = document.querySelector(".share-button");
// const author = document.querySelector(".author");
// const shareOptions = document.querySelector(".share-options");

// const openToast = (message) => {
//   shareButton.addEventListener("click", () => {
//     console.log(message);
//     shareButton.classList.toggle("active");

//     if (shareButton.classList.contains("active")) {
//       author.style.opacity = "0";
//       author.style.visibility = "hidden";
//       author.style.pointerEvents = "none";

//       shareOptions.style.opacity = "1";
//       shareOptions.style.visibility = "visible";
//       shareOptions.style.pointerEvents = "auto";
//     } else {
//       author.style.opacity = "1";
//       author.style.visibility = "visible";
//       author.style.pointerEvents = "auto";

//       shareOptions.style.opacity = "0";
//       shareOptions.style.visibility = "hidden";
//       shareOptions.style.pointerEvents = "none";
//     }
//   });
// };

// openToast("Open share-to-other-social-media-sites toast");

const shareButton = document.querySelector(".share-button");

shareButton.addEventListener("click", () => {
  console.log("helo");
  shareButton.classList.toggle("active");
});
