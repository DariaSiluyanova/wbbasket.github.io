const wbIcon = document.querySelector(".wb-info__icon");
const wbPopup = document.getElementById("info-popup");

/*function, при наведении на иконку показывает popup
*@param icon - элемент для наведения курсора
*@param popup - окно popup
*/
const popUpOnHover = (icon, popup) =>  {
  icon.addEventListener("mouseover", showPopup);
  icon.addEventListener("mouseout", hidePopup);
  
  function hidePopup(evt) {
    popup.style.display = "none";
  }
  
  function showPopup(evt) {
    popup.style.display = "block";
  }
}

/*function, при наведении на иконку показывает popup для одинаковых элементов
*@param container - родитель для popup и иконки
*@param elemPopup - окно popup
*@param elemHover - элемент для наведения курсора
*/
const showMultiplePopUp = (container, elemPopup, elemHover) => {
  document.querySelectorAll(container).forEach((elem)=> {
    let icon = elem.querySelector(elemHover);
    let popup = elem.querySelector(elemPopup);
    popUpOnHover(icon, popup)
  })
}

showMultiplePopUp(".delivery__return",".delivery__return__popup", ".delivery__return__free")
showMultiplePopUp(".old-price",".old-price__popup",".old-price--cancel")
popUpOnHover(wbIcon,wbPopup)





