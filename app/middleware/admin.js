const admin = (req,res,next)=>
{
    if(!req.user.isAdmin)return req.status(403).send('Access denied.');
    next();
};

export default admin;