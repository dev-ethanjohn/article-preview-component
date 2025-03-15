const share = document.querySelector(".share-button");

const openToast = (message) => {
  share.addEventListener("click", () => {
    console.log(message);
    share.classList.toggle("active");
  });
};

openToast("Open share-to-other-social-media-sites toast");
