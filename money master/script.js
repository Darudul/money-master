// function getInputValue(){
//   const foodInput = document.getElementById("food-input");
//   const foodInputText = parseFloat(foodInput.value);
// }



document.getElementById("calculate-btn").addEventListener("click", function () {
  // console.log("test");
  const foodInput = document.getElementById("food-input");
  const foodInputText = parseFloat(foodInput.value);
  // console.log(foodInputText);
  const rentInput = document.getElementById("rent-input");
  const rentInputText = parseFloat(rentInput.value);
  // console.log(rentInputText);
  const clothesInput = document.getElementById("clothes-input");
  const clothesInputText = parseFloat(clothesInput.value);
  // console.log(clothesInputText);

  const totalExpenses = document.getElementById("total-expenses");
  const totalExpensesText = parseFloat(totalExpenses.innerText);
  // console.log(totalExpensesText);
  const previousTotalExpencesAmount =
    foodInputText + rentInputText + clothesInputText;
  const totalExpencesAmount = previousTotalExpencesAmount + totalExpensesText;
  totalExpenses.innerText = totalExpencesAmount;

  const income = document.getElementById("income");
  const incomeAmount = parseFloat(income.value);
  const balance = document.getElementById("balance");
  const balanceText = parseFloat(balance.innerText);
  const balanceAmount = incomeAmount - totalExpencesAmount;
  const balanceTotalAmount = balanceText + balanceAmount;
  balance.innerText = balanceTotalAmount;
  foodInput.value = "";
  rentInput.value = "";
  clothesInput.value = "";
});

document.getElementById("save-btn").addEventListener("click", function () {
  const income = document.getElementById("income");
  const incomeAmount = parseFloat(income.value);

  const saveInput = document.getElementById("save-input");
  const saveAmount = parseFloat(saveInput.value);

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

  saveInput.value = "";
});
