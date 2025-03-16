const shareButton = document.querySelector(".share-button");
const shareOptions = document.querySelector(".share-options");

shareButton.addEventListener("click", () => {
  console.log("toggle active state");
  shareButton.classList.toggle("active");
});

document.addEventListener("click", (event) => {
  const isOutsideShareButton = !shareButton.contains(event.target);
  // const isOutsideShareOptions = !event.target.closest(".share-options");//NOTE: This also works but since it dynamically checks the ancestor, it might cause some performance issues
  const isOutsideShareOptions = !shareOptions.contains(event.target);

  // console.log(event.target);
  // console.log("outside", isOutsideShareButton);

  if (isOutsideShareButton && isOutsideShareOptions) {
    console.log("Dismissing popover");
    shareButton.classList.remove("active");
  }
});
