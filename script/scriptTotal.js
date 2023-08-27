/**
 * Функция рассчета суммы товара и итоговой суммы корзины 
 */
const totalPrice = document.querySelector(".total__sum");
const subSum = (input) => {
  return Number(input.value) * Number(input.dataset.price);
}

const totalFormat = (x) => {
  return x.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, "$1 ");
};

const setTotal = (val) => {
  totalPrice.textContent = totalFormat(val);
  totalPrice.dataset.value = val;
}

const totalCount = () => {
  let totalCost = 0;
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
