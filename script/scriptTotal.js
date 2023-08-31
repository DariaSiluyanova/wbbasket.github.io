let totalCost = 0;
const chooseAll = document.querySelector(".checkbox--choose-all").querySelector("input")
/**
 * Функция рассчета суммы товара и итоговой суммы корзины 
 */
const totalPrice = document.querySelector(".total__sum");
const subSum = (input) => {
  return Number(input.value) * Number(input.dataset.price);
}

/**function, форматирующая стоимости
 * @param x - стоимость
 */
const totalFormat = (x) => {
  return x.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};

/**function, записывает итоговый результат в тег "ИТОГО" и отображает в верстке
 * @param val - сумма покупки
 */
const setTotal = (val) => {
  totalPrice.textContent = totalFormat(val);
  totalPrice.dataset.value = val;
}

const listInput = document.querySelector(".list__items")

let checkboxCounter = function () {
    listInput.querySelectorAll(".checkbox").forEach((item) => {
      item.addEventListener('click', function() {
        if(this.checked) {
          totalCost += subSum(this)
        }
        if(!this.checked) {
          totalCost -= subSum(this)
        }
        setTotal(totalCost)
      })
    }
  )
}

/**function - выбор всех товаров по нажатию на кнопку Выбрать все */
chooseAll.addEventListener('click', function() {
  listInput.querySelectorAll(".checkbox").forEach((item) => {        
      item.checked = !item.checked
      if (item.checked) {
        totalCost += subSum(item)
      }

      if (!item.checked) {
        totalCost -= subSum(item)
      }
  })
  setTotal(totalCost)
})

/**function, суммирует стоимость отдельных товаров
 * @param val - сумма покупки
 */
const totalCount = () => {
  [...document.querySelectorAll(".list__item ")].forEach((item) => {
    if(item.querySelector(".checkbox").checked){
      totalCost += subSum(item.querySelector(".checkbox"));
    }
  });
  setTotal(totalCost);
};

const ACTION = {
  PLUS: 'plus',
  MINUS: 'minus'
}


const calculateAmount = (item, action) => {
  const inputData = item.querySelector(".checkbox")
  let amount = item.querySelector('.amount-btn__amount')

  switch(action) {
    case ACTION.PLUS:
      inputData.value++;
      amount.textContent = inputData.value;
      if (inputData.checked) {
        setTotal(Number(totalPrice.dataset.value) + Number(inputData.dataset.price));
      }
      break;
    case ACTION.MINUS:
      if (inputData.value > 0) {
      inputData.value--;
      amount.textContent = inputData.value;
      if (inputData.checked) {
         setTotal(Number(totalPrice.dataset.value) - Number(inputData.dataset.price));
      }
      break;
    }
  }
  item.querySelector('.cart-price__price').textContent = totalFormat(subSum(inputData))
}

document.querySelector('.form__cart').addEventListener('click', (event) => {
  if (event.target.classList.contains('amount-btn__minus')) {
    calculateAmount(event.target.closest('.list__item'), ACTION.MINUS)
  }

  if (event.target.classList.contains('amount-btn__plus')) {
    calculateAmount(event.target.closest('.list__item'), ACTION.PLUS)
  }
})

totalCount();
checkboxCounter();