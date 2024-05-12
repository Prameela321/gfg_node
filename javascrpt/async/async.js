console.log("geeks for geeks");
setTimeout(()=>{
    console.log('javascript')
},1000)

setTimeout(()=>{
    console.log('javascript2')
},2000)

setTimeout(()=>{
    console.log('javascript3')
})

let pr1 = new Promise((resolve,reject)=>{
    let a = 1;
    if(a)
    resolve('text')
    else
    reject('err');
})
console.log(pr1);
pr1.then((res)=> console.log(res));
pr1.catch((err1)=> console.log(err1));
console.log('asynchronous');
