
import Header from './header'
import React, { useState } from 'react'
import axios from 'axios'
// import toast from "react-hot-toast"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { setLoading, setUser } from '../redux/userSlice';

import { API_END_POINT } from '../util/connection';
function Login() {
    const isLoading = useSelector(store=>store.app.isLoading);
 const[islogin , setisLogin] = useState(false);
 const[fullName , setFullName] = useState("");
 const[email , setEmail] = useState("");
 const[password , setPassword] = useState("");
 const dispatch = useDispatch();
 const navigate = useNavigate();
 const loginHandler = () => {
  setisLogin(!islogin);
 }

 const getInputData = async (e) => {

    e.preventDefault();
    if (islogin) {
       
    dispatch(setLoading(true));
        const user = { fullName, email, password };
        try {
            const res = await axios.post(`${API_END_POINT}/login`, user, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            if (res.data.success) {
                toast.success(res.data.message);
            }
            dispatch(setUser(res.data.user));
            navigate("/brose");
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Something went wrong. Please try again.";
            toast.error(errorMessage);
            console.error("Error during login:", error);
        }
        finally
        {
            dispatch(setLoading(false))
        }
    } else {
       
        const user = { fullName, email, password };
        try {
            
            const res = await axios.post('http://localhost:8080/api/v1/user/register', user, {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            });
            
            if (res.data.success) {
                toast.success(res.data.message);
                setisLogin(true);
            }
            setisLogin(true);
        } catch (error) {
            const errorMessage =
                error.response?.data?.message || "Something went wrong. Please try again.";
            toast.error(errorMessage);
            console.error("Error during registration:", error);
        }
    }
   

    setFullName("");
    setEmail("");
    setPassword("");
};                                                                                

  return (
    
    <div>
    <Header />
    <div className='absolute'>
                <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
            </div>
            <form onSubmit={getInputData} className='flex flex-col w-3/12 p-6 my-20 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90s'>
            <h1 className='text-3xl text-white mb-3 font-bold'>{islogin ? "Login" : "Signup"}</h1>
              <div className='flex flex-col'>
               
                <input value={fullName} onChange={(e)=>setFullName(e.target.value)} type="text" placeholder='Full Name' className='p-3 my-2 rounded-sm bg-gray-800 text-white outline-none'  />
                
                <input value={email}  onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' className='p-3 my-2 rounded-sm bg-gray-800 text-white outline-none' />
                
                <input value={password} onChange={(e)=>setPassword(e.target.value)} type="text" placeholder='Password' className='p-3 my-2 rounded-sm bg-gray-800 text-white outline-none'/>
                <button  type='submit' className='bg-red-600 mt-6 p-3 text-white rounded-sm font-medium'>{`${isLoading ? "loading...":(islogin?"Login":"Signup")}`}</button>
                <p className='text-white mt-2'>{islogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginHandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{islogin ? "Signup" : "Login"}</span></p>
              </div>
            </form>
    </div>
  )
}

export default Login