

function orderpizza(callback)
{
    console.log("Pizza Order Received...");
    setTimeout(()=>{
        console.log("Pizza Ready 🍕");
        callback();
    },2000);
}

function notifyCustomer()
{
    console.log("Calling Customer 📞");
}

orderpizza(notifyCustomer);