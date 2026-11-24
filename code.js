const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseList = document.getElementById("expenseList");
const totalAmount = document.getElementById("totalAmount");

let total = 0;

expenseForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = expenseName.value.trim();
  const amount = Number(expenseAmount.value);

  if (!name || !Number.isFinite(amount) || amount < 0) {
    return;
  }

  const item = document.createElement("li");
  const nameElement = document.createElement("span");
  const amountElement = document.createElement("strong");
  nameElement.textContent = name;
  amountElement.textContent = amount.toFixed(2);
  item.append(nameElement, amountElement);
  expenseList.appendChild(item);

  total += amount;
  totalAmount.textContent = total.toFixed(2);

  expenseForm.reset();
  expenseName.focus();
});