const roleBasedAuth=(role)=>{
    return (req,res, next)=>{
        if(req.user.roles.includes(role)) return next();

        res.status(403).send("Access denied. You do not have permission to perform this action.");
}
}
export default roleBasedAuth;