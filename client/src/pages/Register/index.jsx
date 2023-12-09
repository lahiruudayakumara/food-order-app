import { useState } from "react";
import { userSignup } from "../../api/userApi";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await userSignup(userData);
      if(response.status === 200) {
        window.location.href = '/login';    
      } 
    } catch(err) {
      if(err.response.status === 400) {
        return toast.error("Invalid Creditional!");
      } else if (err.response.status === 409) {
        return toast.error("User already exists!");
      }
      return toast.warning("Somthing Went Wrong!");
    }
  }
  
return (
  <div className="h-screen bg-black flex  items-center justify-center">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 transition duration-300 animate-pink blur  bg-white"></div>
          <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
              <h5 className="text-3xl text-white">Register</h5>
              <form className="w-full space-y-6" >
                <div>
                    <label 
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-200">Email</label>
                    <input 
                    id="email"
                    type="email"
                    onChange={(e) => setUserData({...userData, email: e.target.value}) }
                    className="block appearance-none text-sm w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                    />
                </div>
                <div>
                    <label 
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-200">Name</label>
                    <input 
                    id="name"
                    type="text"
                    onChange={(e) => setUserData({...userData, name: e.target.value}) }
                    className="block appearance-none text-sm w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                    />
                </div>
                <div>
                    <label 
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-200">Password</label>
                    <input 
                    id="password"
                    type="password"
                    onChange={(e) => setUserData({...userData, password: e.target.value})}
                    className="block text-sm appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
                    />
                </div>
                <button onClick={handleSubmit} className="bg-yellow-500 px-3 py-2 text-white w-full rounded-sm">Submit</button>
                <ToastContainer />
              </form>
          </div>
      </div>
  </div>
)
}

export default Register