const logger=(req, res, next)=>{
const url= req.originalUrl;
const method=req.method;
console.log(`Method:${method} & Url:${url}`);
next();


}

export default logger;
 