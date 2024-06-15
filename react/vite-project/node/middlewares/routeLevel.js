export function authUser(req,res,next){
     console.log("auth User is a sample route level middleware");
     next();
}

export default authUser;