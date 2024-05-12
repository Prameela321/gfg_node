let promise  = Promise.resolve(3);
let promise2 = 2;
let promise3 = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,'foo');
    setTimeout(()=>{
        console.log('test '+resolve);
    },0)
})
console.log(promise);
console.log(promise2);
console.log(promise3);
Promise.all([promise,promise2,promise3]).then((values)=>{
    console.log(values);
})