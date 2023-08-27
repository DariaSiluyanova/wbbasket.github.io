/**
 * func, меняющая текст кнопки Заказать
 */

let btnText = document.querySelector(".order")
let checkbox = document.querySelector(".write-off-money__checkbox")

const changeText = () => {
    if (checkbox.checked && totalPrice.dataset.value !== "0") {
        btnText.textContent = `Оплатить ${totalPrice.dataset.value} com`
    } else {
        btnText.textContent = "Заказать"
    }
}

checkbox.addEventListener('change', changeText);
