const pro = new Promise(
(resolve,reject)=>{
    let check = true;
    if (check){
        resolve()
    }else{
        reject()
    }

}
);
const l = pro.then(()=>console.log('success')).catch(()=> console.log('failed'))

