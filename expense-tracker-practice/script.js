let selectedType = 'expense';
let netAmount = 0;

function selectType(type) {
    selectedType = type;
    addTransaction();
}

function addTransaction() {
    const descriptionInput = document.getElementById('description');
    const amountInput = document.getElementById('amount');
    const transactionsContainer = document.getElementById('transactions');
    const netAmountSpan = document.getElementById('netAmount');

    if (descriptionInput.value.trim() === '' || amountInput.value.trim() === '') {
        alert('Please enter both description and amount.');
        return;
    }

    const transactionItem = document.createElement('div');
    transactionItem.className = 'transaction';
    transactionItem.innerHTML = `
        <span>${descriptionInput.value}</span>
        <span class="${selectedType === 'income' ? '' : 'negative'}">${selectedType === 'income' ? '+' : '-'}${amountInput.value}</span>
    `;

    transactionsContainer.appendChild(transactionItem);

    const amount = parseFloat(amountInput.value);
    netAmount += (selectedType === 'income' ? amount : -amount);

    // Display the net amount
    netAmountSpan.textContent = netAmount.toFixed(2);
    updateNetAmountColor();

    // Clear input fields
    descriptionInput.value = '';
    amountInput.value = '';
}

function updateNetAmountColor() {
    const netAmountSpan = document.getElementById('netAmount');
    if (netAmount < 0) {
        netAmountSpan.classList.add('negative');
    } else {
        netAmountSpan.classList.remove('negative');
    }
}
