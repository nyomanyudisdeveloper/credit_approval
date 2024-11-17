import { fetchGetUserByEmail, fetchRegisterUser } from "../model/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { validateEmail } from "../utils/stringHelper.js"

dotenv.config()


export const registerUser = async (req,res,next) => {
    try{
        const {email,password,role} = req.body
        const listRole = ['admin','cs','supervisor']
        var listError = []

        if(!email && !password && !role){
            return res.status(400).send({
                error:"This request required body username, password, and role"
            })
        }

        const userExist = await fetchGetUserByEmail(email)
        
        if(userExist) { listError.push("Email is already been used")}
        if(!validateEmail(email)){ listError.push("Format email is invalid") }
        if(password.length <=5) { listError.push("Password length must be greater than 5 ")}
        if(!listRole.includes(role)){ listError.push("Role must be admin,cs, or supervisor")}
        
        if(listError.length > 0){
            return res.status(401).send({
                error:listError
            })
        }

        const hashedPassowrd = await bcrypt.hash(password,10)
        const user = await fetchRegisterUser(email,hashedPassowrd,role)
        res.status(200).send(user)
        
    }
    catch(err){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}

export const login = async(req,res,next) => {
    try{
        const {email,password} = req.body
        if (!email && !password){
            return res.status(400).send({
                error:"This request required body username and password"
            })
        }

        const user = await fetchGetUserByEmail(email)
        if(!user){
            return res.status(401).send({
                error:"Authentication failed"
            })
        }

        const hashedPassword = user.password
        const passwordMatch = await bcrypt.compare(password,hashedPassword)
        if(!passwordMatch){
            return res.status(401).send({
                error:"Authentication failed"
            })
        }

        const token = jwt.sign({
            userId:user.id,
            userRole:user.role,
            email:user.email
        },process.env.JWT_SECRET_KEY,{
            expiresIn:'1h'
        })

        return res.status(200).send({
            token
        })
               
    }
    catch(err){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}