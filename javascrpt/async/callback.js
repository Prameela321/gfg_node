// function step1(res){
//     setTimeout(()=>{
//         return res+1;
//     },1000);
  
// }

// function step2(res){
//     return res+2;
// }

// function step3(res){
//     return res+3;
// }

// function doOperation(){
//     let res = 0;
//     res = step1(res);
//     // console.log(res);
//     res = step2(res);
//     res = step3(res);
//     console.log(res);
// }

// doOperation();



function doCallBackOperation(){ 
    step1Call(0,callback);
}

function callback (res){
        step2Call(res,callback2);
}

function callback2(res1){   
        step3Call(res1,callback3);
    
}
function callback3(res2){
      console.log(res2);
}
function step1Call(val,callback){
    setTimeout(()=>{
        callback(val+1);
    },1000);
}

function step2Call(val,callback2){
    callback2(val+2)
}

function step3Call(val,callback3){
  
        callback3(
            val+3
         )

}

doCallBackOperation();