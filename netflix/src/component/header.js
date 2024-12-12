import React from 'react'
import { IoIosArrowDropdown } from "react-icons/io";
import { setUser } from '../redux/userSlice';
import {useNavigate} from "react-router-dom";
import {useSelector,useDispatch} from "react-redux" 
import { API_END_POINT } from '../util/connection';
import axios from "axios";
import { toast } from 'react-toastify';
import { setToggle } from '../redux/MovieSlice';

import 'react-toastify/dist/ReactToastify.css';

function Header() {
  const user = useSelector((store)=>store.app.user);
  const toggle = useSelector(store=>store.movie.toggle);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toggleHandler = () =>
  {
    dispatch(setToggle());
  }
  const logouthandler = async() => 
  {
    try {
      const res = await axios.get(`${API_END_POINT}/logout`);
      if(res.data.success){
          toast.success(res.data.message);
      }
      dispatch(setUser(null));
      navigate("/");
  } catch (error) {
      console.log(error);
  }
      
  }
  return (
    <div className='absolute z-10 flex w-full items-center justify-between px-6 bg-gradient-to-b from-black'>
    
<img className='w-60' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png" alt="netflix-logo" />
{
                user && (
                    <div className='flex items-center'>
                        <IoIosArrowDropdown size="24px" color='white' />
                        <h1 className='text-lg font-medium text-white'>{user.fullName}</h1>
                        <div className='ml-4'>
                            <button  onClick={logouthandler} className='bg-red-800 text-white px-4 py-2'>Logout</button>
                            <button  onClick={toggleHandler} className='bg-red-800 text-white px-4 py-2 ml-2'>{toggle ?"Home" : "Serch movie..."}</button>
                        </div>
                    </div>
                )
            }
    </div>
  )
}

export default Header