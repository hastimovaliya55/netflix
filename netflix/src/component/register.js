import React from 'react'

function register() {
  
  return (
   <div>
    <div className='absolute'>
                <img className='w-[100vw] h-[100vh] bg-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="banner" />
            </div>
            <form className='flex flex-col w-3/12 p-12 my-36 left-0 right-0  mx-auto items-center justify-center absolute rounded-md bg-black opacity-90'>
             <h1 className=' text-3xl text-white mb-5 font-bold'>Login Form</h1>
              <div className='flex flex-col'>
               
                <input type="text" placeholder='Full Name' className='p-3 my-2 rounded-sm bg-gray-800 text-white'  />
                
                <input type="email" placeholder='Email' className='p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                
                <input type="password" placeholder='Password' className='p-3 my-2 rounded-sm bg-gray-800 text-white'/>
                
              </div>
            </form>
    </div>
   
  )
}

export default register