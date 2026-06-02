


      fetch('http://localhost:8080/get-doctor')
      .then((v)=>{return v.json();}
       )
       .then((v)=>{
        console.log(v);

        let arr=new Array();

        arr=[...v];

        console.log(arr);

        setTimeout(()=>{
             arr.forEach((e)=>{

            
            window.alert(e.d_name);
        })

        },5000)
       
       })