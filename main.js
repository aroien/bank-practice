 const loginBtn = document.getElementById("login");
    loginBtn.addEventListener("click", function(){
        const loginArea = document.getElementById("login-area");
        loginArea.style.display = "none";
        const transactionArea = document.getElementById("transaction-area");
        transactionArea.style.display = "block"
    })

    const depositArea = document.getElementById("deposit");
    depositArea.addEventListener("click", function() {
        const depositNumber = getInputNumber("depositAmount");
        
        updateSpanText("currentDeposit" , depositNumber);
        updateSpanText("currentBalance" , depositNumber);
        document.getElementById("depositAmount").value = "";
    })
       
    const withdrawBtn = document.getElementById("withdraw");
    withdrawBtn.addEventListener("click" , function(){
        const withdrawNumber = getInputNumber("withdrawAmount");
        
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance" , -1 * withdrawNumber);

        document.getElementById("withdrawAmount").value = "";
    })

    function getInputNumber(id){
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }

   function updateSpanText(id, depositNumber){
        const current = document.getElementById(id).innerText;
        const balanceValue = parseFloat(current);
        const totalBalance = balanceValue + depositNumber;
        document.getElementById(id).innerText = totalBalance;
    }
   