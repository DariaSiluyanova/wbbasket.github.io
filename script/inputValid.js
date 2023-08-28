let firstName = document.getElementById("name")
let errorMessage = document.getElementById("errorName")
const patternName = /^[A-Za-zА-Яа-яЁё]+$/

/**first name validation **/
firstName.onblur = function() {
    let valid = patternName.test(firstName.value)
    if(!valid) {
       errorMessage.textContent = "Укажите имя"
       firstName.classList.add("invalid")
    } 

}

