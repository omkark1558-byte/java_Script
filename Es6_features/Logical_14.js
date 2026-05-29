  

//   let id = setTimeout(()=>{console.log("Hello world !"); 
//  clearTimeout(id);
// },2000);

let count = 1;
   let id =  setInterval(()=>{
    count++;
    if(count == 2)
    {
    console.log("Hy Babe 📍");
    clearInterval(id);
}
},2000);
