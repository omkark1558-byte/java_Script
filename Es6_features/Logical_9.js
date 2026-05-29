  
  function demo(a,b,...c){

    
    let arr=c;

    let sum=0;

    for(v of arr)
    {

        sum=sum+v;
    }

    console.log(a+b+sum);

  }

  demo(1,2,3,4);