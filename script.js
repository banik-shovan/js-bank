
    // login button event handler
    const loginBtn=document.getElementById("login")
    loginBtn.addEventListener("click",function(){
        const loginArea = document.getElementById("login-area");
        loginArea.style.display="none";
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display="block";
        document.body.style.backgroundColor="yellow"

    })
    // deposit event handler
    const deposit=document.getElementById("deposit");
    deposit.addEventListener("click",function(){
        const depositAmount=document.getElementById("depositAmount").value;
        const enterDepositAmount=parseFloat(depositAmount);
    
        updateSpanAmount("currentAmount",enterDepositAmount);
        updateSpanAmount("balanceAmount",enterDepositAmount);
        
        document.getElementById("depositAmount").value=null;


        
    })

    
    //withdraw event handler
    const withdraw=document.getElementById("withdraw");
    withdraw.addEventListener('click',function(){
        const withdrawAmount=document.getElementById("withdrawAmount").value;
        const enterWithdrawAmount=parseFloat(withdrawAmount);
        

        updateSpanAmount("withdrawBalanceAmount",enterWithdrawAmount);
        updateSpanAmount("balanceAmount",-1*enterWithdrawAmount);
        
        document.getElementById("withdrawAmount").value=null;

    })
    
    function updateSpanAmount(id,enterDepositAmount){
        const balanceAmount=document.getElementById(id).innerText;
        const currentBalanceAmount =parseFloat(balanceAmount);
        const newDepositBalanceAmount =currentBalanceAmount+enterDepositAmount;
        document.getElementById(id).innerText=newDepositBalanceAmount;
    }

