async function aSyncFun1(){
let data =  await fetch('https://dummyjson.com/products');
let res = await data.json();
console.log(res);
}

aSyncFun1();