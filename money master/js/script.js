// function getInputValue(inputId) {
//   const foodInput = document.getElementById(inputId);
//   const foodInputText = parseFloat(foodInput.value);
//   foodInput.value = "";

//   return foodInputText;
// }

document.getElementById("calculate-btn").addEventListener("click", function () {
  // console.log("test");
  const income = document.getElementById("income");
  const incomeAmount = parseFloat(income.value);
  const foodInput = document.getElementById("food-input");
  const foodInputText = parseFloat(foodInput.value);
  // console.log(foodInputText);
  const rentInput = document.getElementById("rent-input");
  const rentInputText = parseFloat(rentInput.value);
  // console.log(rentInputText);
  const clothesInput = document.getElementById("clothes-input");
  const clothesInputText = parseFloat(clothesInput.value);
  // console.log(clothesInputText);

  if (
    foodInput.value < 0 ||
    foodInput.value == "" ||
    rentInput.value < 0 ||
    rentInput.value == "" ||
    clothesInput.value == "" ||
    clothesInput.value < 0 ||
    income.value < 0 ||
    income.value == ""
  ) {
    alert("please enter positive number");
    return;
  }

  const totalExpenses = document.getElementById("total-expenses");
  const totalExpensesText = parseFloat(totalExpenses.innerText);
  // console.log(totalExpensesText);
  const previousTotalExpencesAmount =
    foodInputText + rentInputText + clothesInputText;
  const totalExpencesAmount = previousTotalExpencesAmount + totalExpensesText;
  totalExpenses.innerText = totalExpencesAmount;

  const balance = document.getElementById("balance");
  const balanceText = parseFloat(balance.innerText);
  const balanceAmount = incomeAmount - totalExpencesAmount;
  const balanceTotalAmount = balanceText + balanceAmount;
  balance.innerText = balanceTotalAmount;
  // foodInput.value = "";
});

// savings part start
document.getElementById("save-btn").addEventListener("click", function () {
  const income = document.getElementById("income");
  const incomeAmount = parseFloat(income.value);

  const saveInput = document.getElementById("save-input");
  const saveAmount = parseFloat(saveInput.value);

  if (
    income.value < 0 ||
    income.value == "" ||
    saveInput.value < 0 ||
    saveInput.value == ""
  ) {
    alert("please enter valid number");
    return;
  }

  const savingAmount = document.getElementById("saving-amount");
  const savingAmountText = parseFloat(savingAmount.innerText);

  const savingAmountBalance = incomeAmount / saveAmount;
  const savingAmountTotal = savingAmountText + savingAmountBalance;
  savingAmount.innerText = savingAmountTotal;

  const balance = document.getElementById("balance");
  const balanceText = parseFloat(balance.innerText);

  const remaingBal = document.getElementById("remaining-balance");
  const remaingBalance = parseFloat(remaingBal.innerText);
  const remaingBalanceAmount = balanceText - savingAmountBalance;

  const remainingBalanceTotal = remaingBalance + remaingBalanceAmount;
  remaingBal.innerText = remainingBalanceTotal;
});
