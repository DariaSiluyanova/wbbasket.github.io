/**polyfill for nextElementSibling https://developer.mozilla.org/ru/docs/Web/API/Element/nextElementSibling#%D0%BF%D0%BE%D0%BB%D0%B8%D1%84%D0%B8%D0%BB_%D0%B4%D0%BB%D1%8F_ie9_%D0%B8_safari*/
(function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("nextElementSibling")) {
        return;
      }
      Object.defineProperty(item, "nextElementSibling", {
        configurable: true,
        enumerable: true,
        get: function () {
          var el = this;
          while ((el = el.nextSibling)) {
            if (el.nodeType === 1) {
              return el;
            }
          }
          return null;
        },
        set: undefined,
      });
    });
  })([Element.prototype, CharacterData.prototype]);

const btnCollapse = document.querySelector(".collapse.collapse--cart");
const btnCollapseMissing = document.querySelector(".collapse.collapse--missing");
const checkboxAll = document.querySelector(".choose-all-container")
const cartCollapsedTitle = document.querySelector(".collapsed-title")
let firstElem = document.querySelector(".checkbox--choose-all");
let firstElemMissing = document.querySelector(".missing-items__header");

/**function сворачивание элементов корзины*/
btnCollapse.addEventListener('click', function() {
    let collapse = firstElem.nextElementSibling; 
    if (collapse.style.display === "block") {
        checkboxAll.style.display = "none";
        collapse.style.display = "none";
        cartCollapsedTitle.style.display = "flex"
    }
    else {
        checkboxAll.style.display = "block";
        collapse.style.display = "block";
        cartCollapsedTitle.style.display = "none"
    }
    this.classList.toggle("rotate")
})

/**function сворачивание отсутствующих товаров*/
btnCollapseMissing.addEventListener('click', function() {
    let collapseMissing = firstElemMissing.nextElementSibling; 
   
    if (collapseMissing .style.display === "block") {
        collapseMissing .style.display = "none";
    }
    else {
        collapseMissing .style.display = "block";
    }
    this.classList.toggle("rotate")
    
})