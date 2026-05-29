     
// Object Destructuring

    //  let Profile ={
    //     "name":"Omkar",
    //     "Email":"omkark1558@gmail.com"
    //  };

    //  console.log("Name: ",Profile.name,"Email: ",Profile.Email);
     

 let Profile ={
        "name":"Omkar",
        "Email":"omkark1558@gmail.com",
        "city":"Mumabi"
 };
 let {name,Email,city="pune"} = Profile;

 console.log(name,city,Email); 