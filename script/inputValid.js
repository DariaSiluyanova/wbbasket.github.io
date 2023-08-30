let firstName = document.getElementById("name")
let secondName = document.getElementById("secondName")
let errorMessage = document.getElementById("errorName")
let errorSecondName = document.getElementById("errorSecondName")
const patternName = /^[A-Za-zА-Яа-яЁё]+$/

/**first name validation **/
function validValueName() {
    firstName.value.split("").forEach(element => {
        let valid = patternName.test(element)
        if(!valid) {
            errorMessage.textContent = "Укажите имя"
            firstName.classList.add("invalid")
        }
        if(valid) {
            errorMessage.textContent = ""
            firstName.classList.remove("invalid")
        }
    });
}

function validValueSecondName() {
    secondName.value.split("").forEach(element => {
        let valid = patternName.test(element)
        if(!valid) {
            errorSecondName.textContent = "Укажите фамилию"
            secondName.classList.add("invalid")
        }
        if(valid) {
        errorSecondName.textContent = ""
            secondName.classList.remove("invalid")
        }
    });
}


