
function Banking()
  {
    let bank_balance=15000;

    function Deposit(c)
    {
        bank_balance = bank_balance+=c;
        console.log("Deposited Amount ✅ \n"+"Available balance is :"+ bank_balance);
    }
    function Withdrawal(v)
    {
        if(v>bank_balance)
        {
            console.log("Insufficient balance...");
        }
        else
        {
            bank_balance = bank_balance-=v;
            console.log("Withdrwal Amount..⚠️: "+v+"\n"+"Available balance is :"+ bank_balance);
        }
    }
    return [Deposit, Withdrawal];
  }
  let [Deposit,Withdrawal]= Banking();
  Deposit(5000);
  Withdrawal(4859);

   
  