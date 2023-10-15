const firstName = document.getElementById("name")
const secondName = document.getElementById("secondName")
const email = document.getElementById("email")
const tel = document.getElementById("phone")
const inn = document.getElementById("inn")
const errorMessage = document.getElementById("errorName")
const errorSecondName = document.getElementById("errorSecondName")
const errorEmail = document.getElementById("errorEmail")
const errorTel = document.getElementById("errorTel")
const errorInn = document.getElementById("errorInn")
const btnOrder = document.querySelector(".order")
const patternName = /^[A-Za-zА-Яа-яЁё]+$/
const patternEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/g
const patternTel = /^\+(?:\s*\d){11}$/g

/**validation name**/
function validation(input, error, emptyMsg, errorMsg, pattern) {
    input.onblur = function(){
        if(input.value.length === 0) {
            error.textContent = emptyMsg
            input.classList.add("invalid")
        }
    }

    input.value.split("").forEach(element => {
        let valid = pattern.test(element)
        if(!valid) {
            error.textContent = errorMsg
            input.classList.add("invalid")
        }

        if(valid) {
            error.textContent = ""
            input.classList.remove("invalid")
        }
    });
}
/**validation email, tel**/
function checks(input, error, emptyMsg, checkMsg, pattern) {
    input.onblur = function(){
        let valid = pattern.test(input.value)
    
        if(!valid && input.value.length === 0) {
            error.textContent = emptyMsg
            input.classList.add("invalid")
        }
    
        if(!valid && input.value.length > 0) {
            error.textContent = checkMsg
            input.classList.add("invalid")
        }
    
        if(valid) {
            error.textContent = ""
            input.classList.remove("invalid")
        }
    }
}
/**firstname validation **/
let validName = () => {
    validation(firstName, errorMessage, "Укажите имя", "Укажите имя", patternName)
}

/**secondName validation **/
let validSecondName = () => {
    validation(secondName, errorSecondName, "Введите фамилию", "Введите фамилию", patternName)
}

let validEmail = () => {
    checks(email, errorEmail, "Укажите электронную почту", "Проверьте адрес электронной почты", patternEmail)
}

/**add spaces to tel */
tel.addEventListener('keyup', function(){
    let inputValue = this.value
    if (inputValue.length == 2 || inputValue.length == 6 || inputValue.length == 10 || inputValue.length == 13){
     this.value= this.value + " ";
    }
});

/**tel validation*/
let validTel = () => {
    checks(tel, errorTel, "Укажите номер телефона", "Формат: +9 999 999 99 99", patternTel)
}

/**Inn validation */
function validValueInn() {
    const info = document.querySelector(".input-field___info")
            
    if(inn.value.length === 0) {
        info.style.visibility = "hidden"
        errorInn.textContent = "Укажите ИНН"
        inn.classList.add("invalid")
    }

    if(inn.value.length > 0 && inn.value.length !== 14) {
        info.style.visibility = "hidden"
        errorInn.textContent = "Проверьте ИНН"
        inn.classList.add("invalid")
    }

    if(inn.value.length === 14) {
        info.style.visibility = "visible"
        errorInn.textContent = ""
        inn.classList.remove("invalid")
    }   
}

function order() {
    btnOrder.addEventListener('click', function() {
        [...document.querySelectorAll(".info-input")].forEach((input) => {
            if(input.value.length === 0) {
                input.classList.add("invalid")
            }
        })
    })
}

order()