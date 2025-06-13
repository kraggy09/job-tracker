// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// function Login() {

//     const [loginInfo, setLoginInfo] = useState({
//         email: '',
//         password: ''
//     })

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(name, value);
//         const copyLoginInfo = { ...loginInfo };
//         copyLoginInfo[name] = value;
//         setLoginInfo(copyLoginInfo);
//     }

//     return (
//         <div className='container'>
//             <h1>Login</h1>
//             <form>
//                 <div>
//                     <label htmlFor='email'>Email</label>
//                     <input
//                         onChange={handleChange}
//                         type='email'
//                         name='email'
//                         placeholder='Enter your email...'
//                         value={loginInfo.email}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='password'>Password</label>
//                     <input
//                         onChange={handleChange}
//                         type='password'
//                         name='password'
//                         placeholder='Enter your password...'
//                         value={loginInfo.password}
//                     />
//                 </div>
//                 <button type='submit'>Login</button>
//                 <span>Does't have an account ?
//                     <Link to="/auth/signup">Signup</Link>
//                 </span>
//             </form>
//         </div>
//     )
// }

// export default Login



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here...
    console.log(loginInfo);
  };

  return (
    <div className="min-h-screen flex items-center bg-gray-100 justify-center px-4">
      <div className="max-w-md w-full bg-white border-2 border-black text-black rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={loginInfo.email}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              placeholder="Enter your password..."
              value={loginInfo.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          Don&apos;t have an account?{' '}
          <Link to="/auth/signup" className="text-black underline hover:text-gray-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
