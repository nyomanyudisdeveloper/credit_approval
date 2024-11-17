

export const verifyAdmin = async(req,res,next) => {
    const userRole = req.userRole
    if(userRole != 'admin'){
        return res.status(401).send({
            error:'Access Denied'
        })
    }
    next()
}