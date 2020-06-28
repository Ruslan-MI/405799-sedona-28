var searchPopupOpen = document.querySelector(".search-popup-open");
var searchPopup = document.querySelector(".search-popup");
var searchForm = searchPopup.querySelector(".search-form");
var dateInInput = searchForm.querySelector("[name=date-in]");
var dateOutInput = searchForm.querySelector("[name=date-out]");
var adultsInput = searchForm.querySelector("[name=adults]");
var adultsMinus = searchForm.querySelector(".adults .minus");
var adultsPlus = searchForm.querySelector(".adults .plus");
var childrenInput = searchForm.querySelector("[name=children]");
var childrenMinus = searchForm.querySelector(".children .minus");
var childrenPlus = searchForm.querySelector(".children .plus");
var searchFormSubmit = searchForm.querySelector(".search-form-submit");

var isStorageSupport = true;
var adults = "";

searchPopup.classList.add("visually-hidden");
searchPopup.classList.add("narrowing");

try {
  adults = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
};

searchPopupOpen.addEventListener("click", function (evt) {
  searchPopup.classList.remove("visually-hidden");
  searchPopup.classList.toggle("narrowing");
  searchPopup.classList.toggle("expansion");
  if (searchPopup.classList.contains("narrowing")) { } else {
    dateInInput.focus();
    if (adults) {
      adultsInput.value = localStorage.getItem("adults");
      childrenInput.value = localStorage.getItem("children");
    } else {
      adultsInput.value = 2;
      childrenInput.value = 0;
    };
  };
});

searchForm.addEventListener("submit", function (evt) {
  if (!dateInInput.value || !dateOutInput.value || !adultsInput.value || !childrenInput.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adultsInput.value);
      localStorage.setItem("children", childrenInput.value);
    };
  };
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchPopup.classList.contains("narrowing")) { } else {
      evt.preventDefault();
      searchPopup.classList.add("narrowing");
      searchPopup.classList.remove("expansion");
    };
  };
});

dateInInput.addEventListener("focus", function (evt) {
  if (searchPopup.classList.contains("narrowing")) {
    searchPopup.classList.remove("visually-hidden");
    searchPopup.classList.remove("narrowing");
    searchPopup.classList.add("expansion");
  }
});

searchFormSubmit.addEventListener("focus", function (evt) {
  if (searchPopup.classList.contains("narrowing")) {
    searchPopup.classList.remove("visually-hidden");
    searchPopup.classList.remove("narrowing");
    searchPopup.classList.add("expansion");
  }
});

adultsMinus.addEventListener("click", function (evt) {
  if (adultsInput.value > 1) {
    adultsInput.value--;
  }
});

adultsPlus.addEventListener("click", function (evt) {
  if (adultsInput.value < 9) {
    adultsInput.value++;
  }
});

childrenMinus.addEventListener("click", function (evt) {
  if (childrenInput.value > 0) {
    childrenInput.value--;
  }
});

childrenPlus.addEventListener("click", function (evt) {
  if (childrenInput.value < 9) {
    childrenInput.value++;
  }
});