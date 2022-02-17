// input function
function getInputValue(inputId) {
  const foodInput = document.getElementById(inputId);
  const foodInputText = parseFloat(foodInput.value);
  return foodInputText;
}

// addEventListener on button
document.getElementById("calculate-btn").addEventListener("click", function () {
  // console.log("test");

  // const income = document.getElementById("income");
  // const incomeAmount = parseFloat(income.value);
  // const foodInput = document.getElementById("food-input");
  // const foodInputText = parseFloat(foodInput.value);
  // // console.log(foodInputText);
  // const rentInput = document.getElementById("rent-input");
  // const rentInputText = parseFloat(rentInput.value);
  // // console.log(rentInputText);
  // const clothesInput = document.getElementById("clothes-input");
  // const clothesInputText = parseFloat(clothesInput.value);
  // // console.log(clothesInputText);

  // call function
  const foodInputText = getInputValue("food-input");
  const rentInputText = getInputValue("rent-input");
  const clothesInputText = getInputValue("clothes-input");
  const incomeAmount = getInputValue("income");
  // call function end

  // checking error message
  if (
    foodInputText < 0 ||
    foodInputText == "" ||
    rentInputText < 0 ||
    rentInputText == "" ||
    clothesInputText == "" ||
    clothesInputText < 0 ||
    incomeAmount < 0 ||
    incomeAmount == ""
  ) {
    alert("please enter positive number");
    return;
  }
  // checking error message end

  // total expences start
  const totalExpenses = document.getElementById("total-expenses");
  const totalExpensesText = parseFloat(totalExpenses.innerText);
  // console.log(totalExpensesText);
  const previousTotalExpencesAmount =
    foodInputText + rentInputText + clothesInputText;
  const totalExpencesAmount = previousTotalExpencesAmount + totalExpensesText;

  if (incomeAmount < totalExpencesAmount) {
    alert("please provide more money");
    return;
  }
  totalExpenses.innerText = totalExpencesAmount;
  // total expences end

  // balance start
  const balance = document.getElementById("balance");
  const balanceText = parseFloat(balance.innerText);
  const balanceAmount = incomeAmount - totalExpencesAmount;
  const balanceTotalAmount = balanceText + balanceAmount;
  balance.innerText = balanceTotalAmount;
  // balance end
});
// income and saving part end

// savings part start
document.getElementById("save-btn").addEventListener("click", function () {
  // const income = document.getElementById("income");
  // const incomeAmount = parseFloat(income.value);

  // const saveInput = document.getElementById("save-input");
  // const saveAmount = parseFloat(saveInput.value);

  // call function
  const incomeAmount = getInputValue("income");
  const saveAmount = getInputValue("save-input");
  // call function end

  // check error message
  if (
    incomeAmount < 0 ||
    incomeAmount == "" ||
    saveAmount < 0 ||
    saveAmount == ""
  ) {
    alert("please enter valid number");
    return;
  }

  // call function
  const foodInputText = getInputValue("food-input");
  const rentInputText = getInputValue("rent-input");
  const clothesInputText = getInputValue("clothes-input");
  // call function end

  // save part start
  const totalExpenses = document.getElementById("total-expenses");
  const totalExpensesText = parseFloat(totalExpenses.innerText);
  // console.log(totalExpensesText);
  const previousTotalExpencesAmount =
    foodInputText + rentInputText + clothesInputText;
  const totalExpencesAmount = previousTotalExpencesAmount + totalExpensesText;
  // totalExpenses.innerText = totalExpencesAmount;

  const balance = document.getElementById("balance");
  const balanceText = parseFloat(balance.innerText);
  const balanceAmount = incomeAmount - totalExpencesAmount;
  const balanceTotalAmount = balanceText + balanceAmount;
  // balance.innerText = balanceTotalAmount;

  const savingAmount = document.getElementById("saving-amount");
  const savingAmountText = parseFloat(savingAmount.innerText);

  const savingAmountBalance = (incomeAmount * saveAmount) / 100;
  const savingAmountTotal = savingAmountText + savingAmountBalance;
  if (balanceTotalAmount < savingAmountTotal) {
    alert("money is not enough for saving");
    return;
  }
  savingAmount.innerText = savingAmountTotal;
  // save part end

  // const balance = document.getElementById("balance");
  // const balanceText = parseFloat(balance.innerText);
  //  reaining balance start
  const remaingBal = document.getElementById("remaining-balance");
  const remaingBalance = parseFloat(remaingBal.innerText);
  const remaingBalanceAmount = balanceText - savingAmountBalance;

  const remainingBalanceTotal = remaingBalance + remaingBalanceAmount;
  remaingBal.innerText = remainingBalanceTotal;
  // remaining balance end
});
