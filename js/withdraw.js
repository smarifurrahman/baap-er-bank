// withdraw calculation
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // get withdraw amount from input field
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmount = parseFloat(withdrawField.value);
    withdrawField.value = '';

    // check valid input
    if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0) {
        alert('Provide a valid input');
        return;
    }

    // get value from previous total withdraw amount
    const totalWithdrawField = document.getElementById('total-withdraw');
    const totalWithdrawAmount = parseFloat(totalWithdrawField.innerText);

    // get value from previous total balance amount
    const totalBalanceField = document.getElementById('total-balance');
    const totalBalanceAmount = parseFloat(totalBalanceField.innerText);

    // check balance amount is sufficient or not
    if (newWithdrawAmount > totalBalanceAmount) {
        alert('Baap er bank e ato taka nai.');
        return;
    }

    // set new total withdraw amount
    totalWithdrawField.innerText = totalWithdrawAmount + newWithdrawAmount;
    // set new total balance amount
    totalBalanceField.innerText = totalBalanceAmount - newWithdrawAmount;
});