let newPromise = new Promise((resolve,reject)=>{
    let boolean  = true;
    if(boolean){
        resolve('success');
    }else{
        reject('error')
    }
})

// console.log((newPromise));
newPromise.then((result)=>console.log((result)))
newPromise.catch((err)=> console.log(err))