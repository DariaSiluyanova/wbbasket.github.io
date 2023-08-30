const bodyElem = document.querySelector(".main-body")
const delivery = document.querySelector(".delivery")
const modalPay = document.querySelector(".delivery-container")
const modalAddress = document.querySelector(".delivery-container--address")
const payment = document.querySelector(".form__payment")

const modalOpenClose = (domElement, modal) => {
/**function, добавляет слушатель на кнопку Изменить, чтобы открыть окно
 **/
    domElement.querySelector(".btn-edit").addEventListener('click', function() {
        modal.style.display = "block"
        bodyElem.classList.add("no-scroll")
        disableScroll()
    })
/**function, добавляет слушатель на кнопку модалки, чтобы закрыть окно
 **/
    modal.querySelector(".delivery-modal__close").addEventListener('click', function() {
        modal.style.display = "none"
        bodyElem.classList.remove("no-scroll")
        enableScroll()
    })
}
modalOpenClose(payment, modalAddress)
modalOpenClose(delivery, modalPay)


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