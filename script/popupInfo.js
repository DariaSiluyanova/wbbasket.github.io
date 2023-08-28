let wbIcon = document.querySelector(".wb-info__icon");
let wbPopup = document.getElementById("info-popup");
let freePopUp = document.querySelector(".delivery__return__free");
let freeInfo = document.querySelector(".delivery__return__popup");

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

popUpOnHover(wbIcon,wbPopup)
popUpOnHover(freePopUp, freeInfo)




