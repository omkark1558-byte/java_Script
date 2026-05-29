   

const pre = new Promise((resolved,reject)=>{

    let age = 10;

    if(age>=18)
    {
        return resolved("Age is Eligible ✅")
    }
    return reject("Age is Under -18 📍")
});

pre.then((b)=>{

    console.log("Eligble for on Work",b);
})
.catch((h)=>{
    console.log("Not Eligble Work",h);
    
})

console.log("HEy");
