import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const verifyToken = async(req,res,next) => {
    try{
        const token = req.header('Authorization').replace("Bearer","").replace(/ /g,'')
        if(token == undefined) {
            return res.status(401).send({
                error:'Access Denied'
            })
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRET_KEY)
        req.userId = decoded.userId
        req.userRole = decoded.userRole
        req.userName = decoded.userName
        next()
    }
    catch(err){
        res.status(401).send({
            error:'invalid token'
        })
    }
}