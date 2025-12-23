<<<<<<< HEAD
// Load saved expenses
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let editIndex = -1;

// UI elements
const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const sourceInput = document.getElementById("expenseSource");
const dateInput = document.getElementById("expenseDate");
const timeInput = document.getElementById("expenseTime");
const categoryInput = document.getElementById("expenseCategory");
const listDiv = document.getElementById("expensesList");
const addBtn = document.getElementById("addExpenseBtn");

// Save to LocalStorage
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Clear inputs
function clearInputs() {
  nameInput.value = "";
  amountInput.value = "";
  sourceInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
  categoryInput.value = "Food";
  editIndex = -1;
  addBtn.innerText = "Add Expense";
}

// Add / Update expense
addBtn.addEventListener("click", () => {
  const expense = {
    name: nameInput.value.trim(),
    amount: Number(amountInput.value),
    source: sourceInput.value.trim(),
    date: dateInput.value,
    time: timeInput.value,
    category: categoryInput.value
  };

  if (!expense.name || !expense.amount || !expense.date) {
    alert("Please fill Name, Amount and Date");
    return;
  }

  if (editIndex === -1) {
    expenses.push(expense);
    alert("Expense added!");
  } else {
    expenses[editIndex] = expense;
    alert("Expense updated!");
  }

  saveExpenses();
  clearInputs();
  display(expenses);
});

// Delete expense
function deleteExpense(index) {
  if (confirm("Delete this expense?")) {
    expenses.splice(index, 1);
    saveExpenses();
    display(expenses);
  }
}

// Edit expense
function editExpense(index) {
  const e = expenses[index];
  nameInput.value = e.name;
  amountInput.value = e.amount;
  sourceInput.value = e.source;
  dateInput.value = e.date;
  timeInput.value = e.time;
  categoryInput.value = e.category;

  editIndex = index;
  addBtn.innerText = "Update Expense";
}

// Calculate total
function calculateTotal(list) {
  return list.reduce((sum, e) => sum + Number(e.amount), 0);
}

// Display expenses
function display(list) {
  listDiv.innerHTML = "";

  if (list.length === 0) {
    listDiv.innerHTML = "<p>No expenses found.</p>";
    return;
  }

  const total = calculateTotal(list);

  list.forEach((e, index) => {
    const box = document.createElement("div");
    box.className = "expense-item";
    box.innerHTML = `
      <strong>${e.name}</strong> - ₹${e.amount}<br>
      Source: ${e.source}<br>
      Category: ${e.category}<br>
      Date: ${e.date} | Time: ${e.time}<br><br>
      <button onclick="editExpense(${index})">Edit</button>
      <button onclick="deleteExpense(${index})" style="background:red">Delete</button>
    `;
    listDiv.appendChild(box);
  });

  const totalDiv = document.createElement("h3");
  totalDiv.innerText = `Total: ₹${total}`;
  listDiv.appendChild(totalDiv);
}

// View All
document.getElementById("viewAllBtn").addEventListener("click", () => {
  display(expenses);
});

// View Today
document.getElementById("viewDailyBtn").addEventListener("click", () => {
  const today = new Date().toDateString();

  const filtered = expenses.filter(e =>
    new Date(e.date).toDateString() === today
  );

  display(filtered);
});

// View This Month
document.getElementById("viewMonthlyBtn").addEventListener("click", () => {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  const filtered = expenses.filter(e => {
    const d = new Date(e.date);
    return d.getMonth() === month && d.getFullYear() === year;
  });

  display(filtered);
});

// View This Year (extra – interview bonus)
document.getElementById("viewYearlyBtn")?.addEventListener("click", () => {
  const year = new Date().getFullYear();

  const filtered = expenses.filter(e =>
    new Date(e.date).getFullYear() === year
  );

  display(filtered);
});

// Initial display
display(expenses);
=======
// Load saved expenses
let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let editIndex = -1;

// UI elements
const nameInput = document.getElementById("expenseName");
const amountInput = document.getElementById("expenseAmount");
const sourceInput = document.getElementById("expenseSource");
const dateInput = document.getElementById("expenseDate");
const timeInput = document.getElementById("expenseTime");
const categoryInput = document.getElementById("expenseCategory");
const listDiv = document.getElementById("expensesList");
const addBtn = document.getElementById("addExpenseBtn");

// Save to LocalStorage
function saveExpenses() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}

// Clear inputs
function clearInputs() {
  nameInput.value = "";
  amountInput.value = "";
  sourceInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
  categoryInput.value = "Food";
  editIndex = -1;
  addBtn.innerText = "Add Expense";
}

// Add / Update expense
addBtn.addEventListener("click", () => {
  const expense = {
    name: nameInput.value.trim(),
    amount: Number(amountInput.value),
    source: sourceInput.value.trim(),
    date: dateInput.value,
    time: timeInput.value,
    category: categoryInput.value
  };

  if (!expense.name || !expense.amount || !expense.date) {
    alert("Please fill Name, Amount and Date");
    return;
  }

  if (editIndex === -1) {
    expenses.push(expense);
    alert("Expense added!");
  } else {
    expenses[editIndex] = expense;
    alert("Expense updated!");
  }

  saveExpenses();
  clearInputs();
  display(expenses);
});

// Delete expense
function deleteExpense(index) {
  if (confirm("Delete this expense?")) {
    expenses.splice(index, 1);
    saveExpenses();
    display(expenses);
  }
}

// Edit expense
function editExpense(index) {
  const e = expenses[index];
  nameInput.value = e.name;
  amountInput.value = e.amount;
  sourceInput.value = e.source;
  dateInput.value = e.date;
  timeInput.value = e.time;
  categoryInput.value = e.category;

  editIndex = index;
  addBtn.innerText = "Update Expense";
}

// Calculate total
function calculateTotal(list) {
  return list.reduce((sum, e) => sum + Number(e.amount), 0);
}

// Display expenses
function display(list) {
  listDiv.innerHTML = "";

  if (list.length === 0) {
    listDiv.innerHTML = "<p>No expenses found.</p>";
    return;
  }

  const total = calculateTotal(list);

  list.forEach((e, index) => {
    const box = document.createElement("div");
    box.className = "expense-item";
    box.innerHTML = `
      <strong>${e.name}</strong> - ₹${e.amount}<br>
      Source: ${e.source}<br>
      Category: ${e.category}<br>
      Date: ${e.date} | Time: ${e.time}<br><br>
      <button onclick="editExpense(${index})">Edit</button>
      <button onclick="deleteExpense(${index})" style="background:red">Delete</button>
    `;
    listDiv.appendChild(box);
  });

  const totalDiv = document.createElement("h3");
  totalDiv.innerText = `Total: ₹${total}`;
  listDiv.appendChild(totalDiv);
}

// View All
document.getElementById("viewAllBtn").addEventListener("click", () => {
  display(expenses);
});

// View Today
document.getElementById("viewDailyBtn").addEventListener("click", () => {
  const today = new Date().toDateString();

  const filtered = expenses.filter(e =>
    new Date(e.date).toDateString() === today
  );

  display(filtered);
});

// View This Month
document.getElementById("viewMonthlyBtn").addEventListener("click", () => {
  const now = new Date();
  const month = now.getMonth();
  const year = now.getFullYear();

  const filtered = expenses.filter(e => {
    const d = new Date(e.date);
    return d.getMonth() === month && d.getFullYear() === year;
  });

  display(filtered);
});

// View This Year (extra – interview bonus)
document.getElementById("viewYearlyBtn")?.addEventListener("click", () => {
  const year = new Date().getFullYear();

  const filtered = expenses.filter(e =>
    new Date(e.date).getFullYear() === year
  );

  display(filtered);
});

// Initial display
display(expenses);
>>>>>>> b192d3bb5a5f498b9a9c5efff3188909062d515e
