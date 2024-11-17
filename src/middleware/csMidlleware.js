

export const verifyCS = async(req,res,next) => {
    const userRole = req.userRole
    if(userRole != 'cs'){
        return res.status(401).send({
            error:'Access Denied'
        })
    }
    next()
}