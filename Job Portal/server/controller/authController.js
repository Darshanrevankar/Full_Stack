import userModel from "../models/userModel.js"
import bcrypt from 'bcryptjs'

export const registerController = async(req, res, next)=>{
    try{
        const {name, email, password} = req.body

        if(!name){
            next('please provide the name')
        }
        if(!email){
            next('please provide the email')
        }
        if(!password){
            next('please provide the password')
        }

        // check the stored data 
        const existingUser = await userModel.findOne({email})

        if(existingUser){
            return res.status(200).send({
                success: true,
                message: "Email is already there"

            })
        }

        const newUser = {
            name:name,
            email:email,
            password: bcrypt.hashSync(password)
        }
        const user = userModel.create(newUser)
        res.status(200).send({
            success: true,
            message:'user is registered successfully',
            user
        })
    }
    catch(err){
        next('Error in register controller')
    }
}

export const loginController = async(req, res, next )=>{
    try{
        const {email, password} = req.body

        if(!email || !password){
            next('provide all fields')
        }

        const User = await userModel.findOne({email})

        if(!User){
            next('Invalid email and password')
        }

        const isPassword = bcrypt.compareSync(password, User.password)
        if(! isPassword)
        {
            next('Incorrect password')
        }

        res.status(200).json({
            success: true,
            message: 'Login successfully',
            User
        })
    }
    catch(err){
        
    }
}