  
console.log("Why!");
let count = 1;

let id = setInterval(()=>{
    count++;
    if(count == 2)
        {
            clearInterval(id);           
        }
    console.log("Heyyy..!");
},2000);


  console.log("Hello World!");
  
  