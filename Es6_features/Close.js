

function Banking()
{
    let bank_balance=1000;

    function Deposit(v)
    {
        bank_balance=bank_balance+v;
        console.log("updated balance is:"+bank_balance);
    }
    function withdraw(v)
    {
        if(v>bank_balance)
        {
            console.log("insufficient balance...");
        }
        else
        {
            bank_balance=bank_balance-v;
            console.log("remaining balance",bank_balance)
        }
    }
  
    return [Deposit, withdraw];
}

    let [a,b]= Banking();

    a(340);
    b(1400);