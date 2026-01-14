import z, { ZodError } from "zod";

const validate=(schema)=>(req, res, next)=>{
    try {
  schema.parse(req.body);
  next();
} catch(error){
  if(error instanceof ZodError){
 const formattedError=z.treeifyError(error);
 console.log(formattedError);
    return res.status(400).json({errors:formattedError});
  }
  next(error);
}
}

export default validate;
