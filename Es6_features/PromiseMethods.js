
let Prom1=new Promise((res,rej)=>{

    setTimeout(()=>{
        let num=9;
        if(num>=10)
        {
            return res("OKAY!")
        }
        else
        {
            return rej("error")
        }
    },5000)
});


let Prom2=new Promise((res,rej)=>{

    setTimeout(()=>{
        let num=12;
        if(num>=10)
        {
            return res("OKAY! 2")
        }
        else
        {
            return rej("error")
        }
    },10000)
});



Promise.race([Prom1,Prom2])
.then((v)=>{
    console.log(v)
})
.catch((e)=>{
    console.log(e);
})