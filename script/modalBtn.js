const btnModalPayClose = document.querySelector(".delivery-modal__close")
const modalPay = document.querySelector(".delivery-container")
const btnModalPayOpen = document.querySelector(".btn-edit")
const bodyElem = document.querySelector(".main-body")




/**function, добавляет слушатель на кнопку модалки, чтобы закрыть окно
 **/
btnModalPayClose.addEventListener('click', function() {
    modalPay.style.display = "none"
    bodyElem.classList.remove("no-scroll")
    enableScroll()
})
/**function, добавляет слушатель на кнопку Изменить, чтобы открыть окно
 **/
btnModalPayOpen.addEventListener('click', function() {
    modalPay.style.display = "block"
    bodyElem.classList.add("no-scroll")
    disableScroll()
})

/**function, убирает автоскролл браузера к невалидному инпуту
 **/
function disableScroll() {
    scrollTop = document.documentElement.scrollTop;
    scrollLeft = document.documentElement.scrollLeft,
  
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
/**function, включает скролл браузера 
 **/
function enableScroll() {
    window.onscroll = function() {};
}