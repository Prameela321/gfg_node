export  function logUserRequest(req,res,next){
    console.log('user has intiated request');
    next();
}
