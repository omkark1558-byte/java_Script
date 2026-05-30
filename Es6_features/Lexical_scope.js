
function Banking()
{
    let bank_Balance=1000;
    function Deposit(v)
    {
        bank_Balance+=v;
        console.log("Deposit Successfull ...!✅ Current Balance : "+bank_Balance);
    }
    return Deposit;
}

let Deposit = Banking();
Deposit(200);


function Counter()
{
    let  count = 0;
    function Increment(v)
    {
        count+=v;
        console.log("Count : "+count);
    }
    return Increment;
}
let Increment = Counter();
Increment(1);
Increment(2);
Increment(3);


