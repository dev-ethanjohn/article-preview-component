const shareButton = document.querySelector(".share-button");
const shareOptions = document.querySelector(".share-options");

shareButton.addEventListener("click", () => {
  console.log("toggle active state");
  shareButton.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const isOutsideShareButton = !shareButton.contains(event.target);
  const isOutsideShareOptions = !event.target.closest(".share-options");

  if (isOutsideShareButton && isOutsideShareOptions) {
    if (shareButton.classList.contains("active")) {
      console.log("Dismissing popover");
      shareButton.classList.remove("active");
    }
  }
});
