function p(seconds){

    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            seconds++;
            resolve(seconds);
        },2000)

    }
    
    );
}
p(0).then(p).then((value)=>console.log(value));