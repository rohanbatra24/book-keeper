const modal = document.getElementById("modal");
const modalShow = document.getElementById("show-modal");
const modalClose = document.getElementById("close-modal");
const bookmarkForm = document.getElementById("bookmark-form");
const websiteNameEl = document.getElementById("website-name");
const websiteUrlEl = document.getElementById("website-url");
const bookmarkcontainer = document.getElementById("container");

const bookmarks = [];

// SHow Modal, focus on input
const showModal = (params) => {
  modal.classList.add("show-modal");
  websiteNameEl.focus();
};

// / Modal event listeners
modalShow.addEventListener("click", showModal);
// modalClose.addEventListener("click", () =>
//   modal.classList.remove("show-modal")
// );

//validate form
const validate = (nameValue, urlValue) => {
  const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;

  const regex = new RegExp(expression);

  if (urlValue.match(regex)) {
    alert("matched");
  } else {
    ("Please provide a valid url");
    return false;
  }
};

window.addEventListener(
  "click",
  (e) => e.target === modal && modal.classList.remove("show-modal")
);

// handle data from form
const storeBookmark = (e) => {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.includes("http://", "https://")) {
    urlValue = "https://" + urlValue;
  }
  console.log(urlValue, nameValue);
  validate(nameValue, urlValue);

  const bookmark = { name: nameValue, url: urlValue };

  bookmarks.push(bookmark);

  bookmarkcontainer.appendChild(document.createElement("a"));

  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));

  bookmarkForm.reset();
};

// event listener
bookmarkForm.addEventListener("submit", storeBookmark);
