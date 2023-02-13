// deposit calculation
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get deposit amount from input field
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmount = parseFloat(depositField.value);
    depositField.value = '';

    // check valid input
    if (isNaN(newDepositAmount) || newDepositAmount <= 0) {
        alert('Provide a valid input');
        return;
    }

    // get value from previous total deposit amount
    const totalDepositField = document.getElementById('total-deposit');
    const totalDepositAmount = parseFloat(totalDepositField.innerText);

    // get value from previous total balance amount
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalanceField.innerText);

    // set new total deposit amount
    totalDepositField.innerText = totalDepositAmount + newDepositAmount;
    // set new total balance amount
    totalBalanceField.innerText = totalBalanceAmount + newDepositAmount;
});