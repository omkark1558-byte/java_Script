

function withdrwalMoney(amount, callback) 
{
    console.log("Proccesing Withdrwal....⚠️");
    setTimeout(() => {
        console.log(amount +" "+ "Withdrwal Successsfull ✅");
        callback();

    }, 2000);
}

function sendSMS()
{
    console.log("SMS Sent to Customer 💬");
}
withdrwalMoney(5000,sendSMS);
