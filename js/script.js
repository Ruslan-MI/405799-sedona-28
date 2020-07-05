// Search-popup

// Variables

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

// Local Storage check

var isStorageSupport = true;
var adults = "";

try {
  adults = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
};

// Initialization

searchPopup.classList.add("visually-hidden");
searchPopup.classList.add("narrowing");

// Open/Close

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
  if (searchPopup.classList.contains("shake")) {
    searchPopup.classList.remove("shake");
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
      if (searchPopup.classList.contains("shake")) {
        searchPopup.classList.remove("shake");
      };
      searchPopup.classList.remove("expansion");
      searchPopup.classList.add("narrowing");
    };
  };
});

// Form buttons and keys

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

searchFormSubmit.addEventListener("click", function (evt) {
  if (!searchForm.checkValidity()) {
    evt.preventDefault();
    searchPopup.classList.remove("shake");
    searchPopup.offsetWidth = searchPopup.offsetWidth;
    searchPopup.classList.add("shake");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adultsInput.value);
      localStorage.setItem("children", childrenInput.value);
    };
  };
});

// State-map

// Hide map image

document.querySelector(".map-image").classList.add("visually-hidden");

// Add map wrapper

var stateMap = document.querySelector(".state-map");
var mapWrapper = document.createElement("div");

mapWrapper.classList.add("map-wrapper");
mapWrapper.id = "map";

stateMap.appendChild(mapWrapper);

// Add Google Maps

var mapScript = document.createElement("script");

mapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyBSyupZ0960ucVfQie8Zo9ohagG5URMRO0&callback=indexMap";
mapScript.defer = true;
mapScript.async = true;

window.indexMap = function () {
  var center = { lat: 34.757, lng: -111.737 };
  var sedona = { lat: 34.866, lng: -111.760 };
  var map = new google.maps.Map(document.getElementById("map"), { zoom: 9, center: center, disableDefaultUI: true });
  var marker = new google.maps.Marker({ position: sedona, map: map });
};

document.body.appendChild(mapScript);