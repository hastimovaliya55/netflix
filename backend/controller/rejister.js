import { User } from '../mode/usermodel.js'
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const Login = async(req , res) => {
    try{
        console.log("hello welcome to login");
        const{fullname , email , password} = req.body;
        if(!email || !password) 
        {
           return res.status(401).json({
                message:"invalid data",
                success:"false"
            });
        }
        const user   = await User.findOne({email});
        
        if(!user)
        {
            return res.status(400).json({
                message:"pleage signup first",
                success:false
            });
        }
        const isPasswordValid = await bcryptjs.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password",
            });
        }

        const tokenData = {
            id:user._id
           }
            const token = await jwt.sign(tokenData, "dfbvdkjzfnvkjzdnfvkzdnjf",{expiresIn:"1h"});
    
            return res.status(200).cookie("token", token).json({
                message:`Welcome back ${user.fullName}`,
                user,
                success:true
            });
    

       
    }
    catch(err)
    {
         console.log(err);
    }

};
export const Register = async (req,res) =>{
    try {
        console.log("Request Body:", req.body);
        console.log("hello welcome to register");
        const {fullName, email, password} = req.body;
        if(!fullName || !email || !password){
            return res.status(401).json({
                message:"Invalid data",
                success:false
            })
        }
        const user = await User.findOne({email});
        if(user){
            return res.status(401).json({
                message:"This email is already used",
                success:false,
            })
        }

        const hashedPassword = await bcryptjs.hash(password,2);

        await User.create({
            fullName,
            email,
            password:hashedPassword
        });

        return res.status(201).json({
            message:"Account created successfully.",
            success:true,
        })

    } catch (error) {
        console.log(error);
    }
};


export const Logout = async (req,res) => {
    return res.status(200).cookie("token", "", {expiresIn:new Date(Date.now()), httpOnly:true}).json({
        message:"User logged out successfully.",
        success:true,
    });
}