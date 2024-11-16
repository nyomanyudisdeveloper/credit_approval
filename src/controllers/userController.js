import { fetchGetUserByUserName, fetchRegisterUser } from "../model/user.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'

dotenv.config()


export const registerUser = async (req,res,next) => {
    try{
        const {username,password,role} = req.body

        if(username && password && role){
            const hashedPassowrd = await bcrypt.hash(password,10)
            const user = await fetchRegisterUser(username,hashedPassowrd,role)
            res.status(200).send({
                text:"Register user success"
            })
        }
        else{
            res.status(400).send({
                error:"This request required body username, password, and role"
            })
        }
        
    }
    catch(err){
        console.log("registerUser err = ",err)
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}

export const login = async(req,res,next) => {
    try{
        const {username,password} = req.body
        if (username && password){
            const user = await fetchGetUserByUserName(username)
            if(user){
                const hashedPassword = user.password
                const passwordMatch = await bcrypt.compare(password,hashedPassword)
                if(passwordMatch){
                    const token = jwt.sign({
                        userId:user.id,
                        userRole:user.role,
                        userName:user.username
                    },process.env.JWT_SECRET_KEY,{
                        expiresIn:'1h'
                    })
                    res.status(200).send({
                        token
                    })
                }
                else{
                    res.status(401).send({
                        error:"Authentication failed"
                    })
                }
            }
            else{
                res.status(401).send({
                    error:"Authentication failed"
                })
            }
        } 
        else{
            res.status(400).send({
                error:"This request required body username and password"
            })
        }
    }
    catch(err){
        console.log("registerUser err = ",err)
        res.status(500).send({
            error:"Internal Server Error"
        })
    }
}