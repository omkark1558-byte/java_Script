


function processPaymet(callback) {
    console.log("Payment In Process...⏳");

    setTimeout(() => {
        console.log("Payment Successfull ... ✅");
        callback();
    }, 2000);
}

function sendRecipet() {
    console.log("Send Recipet Customer...🔒");
}
processPaymet(sendRecipet);