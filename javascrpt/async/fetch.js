fetch('https://dummyjson.com/products')
.then((data)=> data.json())
.then((res)=> console.log(res))
.catch((err)=> console.log(err))

// fetch always return promise
// not in json format
