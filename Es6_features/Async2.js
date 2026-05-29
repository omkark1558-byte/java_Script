


function Demo()
{
     let Prom1=Promise.resolve("hello");
     let Prom2=Promise.resolve("bye");
     let Prom3=Promise.resolve(" no error");

     return Promise.all([Prom1,Prom2,Prom3]);
}

 async function handler()
 {
    try{
         let r=await Demo();
         console.log(r);
    }
    catch(e)
    {
        console.log('error',e)
    }
 }

 handler();