// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'

// function Signup() {

//     const [signupInfo, setSignupInfo] = useState({
//         name: '',
//         email: '',
//         password: ''
//     })

//     const navigate = useNavigate();
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(name, value);
//         const copySignupInfo = { ...signupInfo };
//         copySignupInfo[name] = value;
//         setSignupInfo(copySignupInfo);
//     }

//     return (
//         <div className='container'>
//             <h1>Signup</h1>
//             <form>
//                 <div>
//                     <label htmlFor='name'>Name</label>
//                     <input
//                         onChange={handleChange}
//                         type='text'
//                         name='name'
//                         autoFocus
//                         placeholder='Enter your name...'
//                         value={signupInfo.name}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='email'>Email</label>
//                     <input
//                         onChange={handleChange}
//                         type='email'
//                         name='email'
//                         placeholder='Enter your email...'
//                         value={signupInfo.email}
//                     />
//                 </div>
//                 <div>
//                     <label htmlFor='password'>Password</label>
//                     <input
//                         onChange={handleChange}
//                         type='password'
//                         name='password'
//                         placeholder='Enter your password...'
//                         value={signupInfo.password}
//                     />
//                 </div>
//                 <button type='submit'>Signup</button>
//                 <span>Already have an account ?
//                     <Link to="/auth/login">Login</Link>
//                 </span>
//             </form>
//         </div>
//     )
// }

// export default Signup




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo({ ...signupInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform signup logic here...
    console.log(signupInfo);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100  px-4">
      <div className="max-w-md w-full bg-white border-2 border-black text-black rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              autoFocus
              placeholder="Enter your name..."
              value={signupInfo.name}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              placeholder="Enter your email..."
              value={signupInfo.email}
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
              value={signupInfo.password}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-900 transition"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          Already have an account?{' '}
          <Link to="/auth/login" className="text-black underline hover:text-gray-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
