const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarkcontainer = document.getElementById("bookmarks-container");

// SHow Modal, focus on input
const showModal = (params) => {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
};

// / Modal event listeners
modalShow.addEventListener("click", showModal);
modalClose.addEventListener("click", () =>
  modal.classList.remove("show-modal")
);

window.addEventListener(
  "click",
  (e) => e.target === modal && modal.classList.remove("show-modal")
);
