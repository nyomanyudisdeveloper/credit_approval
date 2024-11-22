import { fetchAddCounterTotalLogin, fetchGetUserByEmail, fetchGetUsersBlocked, fetchRegisterUser, fetchUnblockUserByID } from "../model/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { validateEmail } from "../utils/stringHelper.js"
import dotenv from 'dotenv'
dotenv.config()

const enviroment = process.env.ENV || 'development'


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

        const userID = user.id
        var counter_total_login = user.counter_total_login
        if(counter_total_login >=3){
            return res.status(403).send({
                error:"This email is blocked because login failed too much, try contact admin to unblocked it"
            })
        }

       

        const hashedPassword = user.password
        const passwordMatch = await bcrypt.compare(password,hashedPassword)
        if(!passwordMatch){
            counter_total_login += 1
            await fetchAddCounterTotalLogin(userID,counter_total_login)
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
        console.log("err = ",err)
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}

export const getUsersBlocked = async (req,res,next) => {
    try{
        const users = await fetchGetUsersBlocked()
        res.status(200).send(users)
    }
    catch(err){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}

export const unblockUserByID = async (req,res,next) => {
    try{
        const {userID} = req.params
        if(!userID){
            return res.status(422).send({
                error:"No param userID"
            })
        }
        const user = await fetchUnblockUserByID(userID)
        res.status(200).send(user)
    }
    catch(err){
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}