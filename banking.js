
// function to get input of withdraw and deposite 
function getInputValue(inputId){
    const inputField=document.getElementById(inputId);
    const inputText=inputField.value;
    const inputAmount=parseFloat(inputText);
    inputField.value='';
    return inputAmount;
}

// function to get old amound of deposite and withdraw 
function updateTotalField(totalFuildId,amount){
    const totalElement=document.getElementById(totalFuildId);
    const totalText=totalElement.innerText;
    const totalAmount=parseFloat(totalText);
    totalElement.innerText=totalAmount+amount;
}

// function for balance update 
function updateBalance(Amount,isAdd){
    const balanceTotal=document.getElementById('balance-total');

    const balanceTotalText=balanceTotal.innerText;
    
    const previousBalanceTotal=parseFloat(balanceTotalText);
    
    if(isAdd==true){
        balanceTotal.innerText=previousBalanceTotal+Amount;
    }
    else{
        balanceTotal.innerText=previousBalanceTotal-Amount;
    }
}


document.getElementById('deposite-btn').addEventListener('click',function(){
    // get input ammount deposited 
  /*   const depositeInput=document.getElementById('deposite-input');
    // make input money string to text
    const newDepositeAmountText=depositeInput.value;
    const newDepositeAmount=parseFloat(newDepositeAmountText); */
    const depositeAmount=getInputValue('deposite-input');

    if(depositeAmount>0){
        updateTotalField('deposite-amount',depositeAmount);
        updateBalance(depositeAmount,true);
    }


    // previous deposite total 
   /*  const depositeTotal=document.getElementById('deposite-amount');
    //  make previous deposite total money string to number 
    const previousDepositeText=depositeTotal.innerText;
    const previousDepositeAmount=parseFloat(previousDepositeText); */

    // after addition new deposite total 
// const newDepositeTotal=previousDepositeAmount+depositeAmount;

    // depositeTotal.innerText=newDepositeTotal;

    
// update account balance 
/* const balanceTotal=document.getElementById('balance-total');

const balanceTotalText=balanceTotal.innerText;

const previousBalanceTotal=parseFloat(balanceTotalText);

const newBalanceTotal=previousBalanceTotal+depositeAmount; */

// balanceTotal.innerText=newBalanceTotal;


// clear the deposite field 
    // depositeInput.value='';

});

// handle withdraw event handler 

document.getElementById('withdraw-btn').addEventListener('click',function(){
    /* const withdrawInput=document.getElementById('withdraw-input');

    const withdrawInputText=withdrawInput.value;
    const newWithdrawInputAmount=parseFloat(withdrawInputText); */
    const newWithdrawInputAmount=getInputValue('withdraw-input');

    if(newWithdrawInputAmount>0){
        updateTotalField('withdraw-total',newWithdrawInputAmount);
        updateBalance(newWithdrawInputAmount,false);
    }
    // set withdraw total 
/* const windowTotal = document.getElementById('withdraw-total');
const previousWithdrawText=windowTotal.innerText;
const previousWithdrawAmount=parseFloat(previousWithdrawText);

const newWithdrawTotal=previousWithdrawAmount+newWithdrawInputAmount;

windowTotal.innerText=newWithdrawTotal; */

// update balance 
/* const balanceTotal=document.getElementById('balance-total');

const previousBalanceText=balanceTotal.innerText;

const previousBalanceAmount=parseFloat(previousBalanceText);

const newBalanceTotal=previousBalanceAmount-newWithdrawInputAmount;

balanceTotal.innerText=newBalanceTotal;
 */

});
