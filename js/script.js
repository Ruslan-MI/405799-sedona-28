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

try {
  adults = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
};

searchPopup.classList.add("visually-hidden");
searchPopup.classList.add("narrowing");

searchPopupOpen.addEventListener("click", function () {
  if (searchPopup.classList.contains("visually-hidden")) {
    searchPopup.classList.remove("visually-hidden");
    if (isStorageSupport) {
      adultsInput.value = localStorage.getItem("adults");
      if (adultsInput.value < 1) {
        adultsInput.value = 2;
      };
      childrenInput.value = localStorage.getItem("children");
      if (childrenInput.value < 1) {
        childrenInput.value = 0;
      };
    } else {
      adultsInput.value = 2;
      childrenInput.value = 0;
    };
  };
  searchPopup.classList.toggle("narrowing");
  searchPopup.classList.toggle("expansion");
  if (searchPopup.classList.contains("expansion")) {
    dateInInput.focus();
    dateInInput.select();
  };
});

dateInInput.addEventListener("focus", function () {
  if (searchPopup.classList.contains("visually-hidden")) {
    searchPopup.classList.remove("visually-hidden");
    if (isStorageSupport) {
      adultsInput.value = localStorage.getItem("adults");
      if (adultsInput.value < 1) {
        adultsInput.value = 2;
      };
      childrenInput.value = localStorage.getItem("children");
      if (childrenInput.value < 1) {
        childrenInput.value = 0;
      };
    } else {
      adultsInput.value = 2;
      childrenInput.value = 0;
    };
  };
  if (searchPopup.classList.contains("narrowing")) {
    searchPopup.classList.remove("narrowing");
    searchPopup.classList.add("expansion");
  }
});

searchFormSubmit.addEventListener("focus", function () {
  if (searchPopup.classList.contains("visually-hidden")) {
    searchPopup.classList.remove("visually-hidden");
    if (isStorageSupport) {
      adultsInput.value = localStorage.getItem("adults");
      if (adultsInput.value < 1) {
        adultsInput.value = 2;
      };
      childrenInput.value = localStorage.getItem("children");
      if (childrenInput.value < 1) {
        childrenInput.value = 0;
      };
    } else {
      adultsInput.value = 2;
      childrenInput.value = 0;
    };
  };
  if (searchPopup.classList.contains("narrowing")) {
    searchPopup.classList.remove("narrowing");
    searchPopup.classList.add("expansion");
    dateInInput.focus();
    dateInInput.select();
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (searchPopup.classList.contains("expansion")) {
      evt.preventDefault();
      searchPopup.classList.remove("expansion");
      searchPopup.classList.add("narrowing");
    };
  };
});

adultsMinus.addEventListener("click", function () {
  if (adultsInput.value > 1) {
    adultsInput.value--;
  }
});

adultsInput.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 40) {
    if (adultsInput.value > 1) {
      adultsInput.value--;
    };
  };
});

adultsPlus.addEventListener("click", function () {
  if (adultsInput.value < 9) {
    adultsInput.value++;
  }
});

adultsInput.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 38) {
    if (adultsInput.value < 9) {
      adultsInput.value++;
    };
  };
});

childrenMinus.addEventListener("click", function () {
  if (childrenInput.value > 0) {
    childrenInput.value--;
  }
});

childrenInput.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 40) {
    if (childrenInput.value > 0) {
      childrenInput.value--;
    };
  };
});

childrenPlus.addEventListener("click", function () {
  if (childrenInput.value < 9) {
    childrenInput.value++;
  }
});

childrenInput.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 38) {
    if (childrenInput.value < 9) {
      childrenInput.value++;
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