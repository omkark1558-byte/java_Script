


const prom=new Promise((res,rej)=>{

    setTimeout(()=>{

         let age=28;
    if(age>50)
    {
        return res("success")
    }
    return rej("under age")
    },5000)
   
});


prom.then((v)=>{
    console.log("message is",v)
})
.catch((e)=>{
    console.log("error is",e)
})
.finally(()=>{
    console.log("work finished")
})


console.log("hii")
console.log(prom);