//* Login button even handler
const loginBtn = document.getElementById('loginbtn');
loginBtn.addEventListener('click',function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';

    const transactionArea = document.getElementById('transactionArea');
    transactionArea.style.display = 'block';
})

//* Deposit button even handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click',function(){
    // const depositAmount = document.getElementById('depositAmount').value;
    // const depositNumber = parseFloat(depositAmount);
    const depositNumber = getInputNumber('depositAmount')
    

    updateSpanText('currentDeposit', depositNumber)
    updateSpanText('currentBalance', depositNumber)


    document.getElementById('depositAmount').value = '';
})

//* Withdraw button even handler

const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function(){
    const withdrawNumber = getInputNumber('withdrawAmount')
    console.log(withdrawNumber);
})




//* Common functionalities
function getInputNumber(id){
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}


