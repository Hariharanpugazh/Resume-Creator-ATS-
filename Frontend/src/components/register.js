// import React, { useState } from 'react';
// import { Lock, Mail, User, ArrowRight } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//   });
//   const [isLoading, setIsLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleRegister = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);

//     try {
//       const response = await fetch('http://localhost:8000/resume/api/register/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         toast.success('Registration successful!', {
//           autoClose: 3000,
//           onClose: () => navigate('/'),
//         });
//       } else {
//         const data = await response.json();
//         toast.error(data.error || 'Registration failed', {
//           autoClose: 3000,
//         });
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       toast.error('An error occurred. Please try again.', {
//         autoClose: 3000,
//       });
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black relative overflow-hidden"
//     >
//       <div className="absolute inset-0 grid grid-cols-12 gap-2 pointer-events-none">
//         {Array.from({ length: 144 }).map((_, i) => (
//           <div
//             key={i}
//             className="w-2 h-2 bg-gray-600 opacity-10 transition-all duration-300 rounded-full hover:bg-blue-500 hover:opacity-80 hover:scale-150 transform"
//             style={{ animation: `pulse ${(Math.random() * 2 + 2).toFixed(2)}s infinite` }}
//           ></div>
//         ))}
//       </div>
//       <div className="relative z-10 w-full max-w-md p-8 bg-gradient-to-r from-white via-gray-100 to-gray-200 rounded-3xl shadow-2xl shadow-blue-500/50 hover:shadow-blue-700 hover:scale-105 transform transition duration-500">
//         <h2 className="mb-6 text-3xl font-bold text-center text-gray-800 font-sans tracking-wide animate-fade-in">Create an Account</h2>
//         <form onSubmit={handleRegister} className="space-y-6">
//           <div className="relative animate-slide-in-up">
//             <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition" size={20} />
//             <input
//               type="text"
//               name="username"
//               placeholder="Enter your username"
//               value={formData.username}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent shadow-sm"
//               required
//             />
//           </div>
//           <div className="relative animate-slide-in-up delay-100">
//             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition" size={20} />
//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               value={formData.email}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent shadow-sm"
//               required
//             />
//           </div>
//           <div className="relative animate-slide-in-up delay-200">
//             <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500 transition" size={20} />
//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               value={formData.password}
//               onChange={handleInputChange}
//               className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:border-transparent shadow-sm"
//               required
//               minLength={6}
//             />
//           </div>
//           <button
//             type="submit"
//             className="flex items-center justify-center w-full py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-500 to-teal-500 hover:scale-110 transform transition duration-300 rounded-lg shadow-lg"
//           >
//             {isLoading ? 'Registering...' : 'Register'}
//             <ArrowRight className="ml-2 animate-bounce" size={20} />
//           </button>
//         </form>
//         <div className="mt-6 text-center animate-fade-in">
//           <a href="/login" className="text-blue-600 hover:underline">
//             Already have an account? Login
//           </a>
//         </div>
//       </div>
//       <ToastContainer
//         position="top-right"
//         autoClose={3000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//         theme="colored"
//       />
//     </div>
//   );
// };

// export default Register;

import React, { useState } from 'react';
import { Lock, Mail, User, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/resume/api/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Registration successful!', {
          autoClose: 3000,
          onClose: () => navigate('/'),
        });
      } else {
        const data = await response.json();
        toast.error(data.error || 'Registration failed', {
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error('An error occurred. Please try again.', {
        autoClose: 3000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(to bottom right, #2c3e50, #34495e)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '2px',
          pointerEvents: 'none',
        }}
      >
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              transition: 'all 0.3s ease',
            }}
            className="hover:bg-blue-500 hover:opacity-80 hover:scale-150"
          ></div>
        ))}
      </div>
      <div
        style={{
          zIndex: 10,
          width: '100%',
          maxWidth: '400px',
          padding: '2rem',
          background: 'linear-gradient(to right, #ffffff, #f7f7f7)',
          borderRadius: '1rem',
          boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
          transition: 'transform 0.5s ease',
        }}
        className="hover:shadow-lg hover:scale-105"
      >
        <h2
          style={{
            marginBottom: '1.5rem',
            textAlign: 'center',
            fontSize: '1.75rem',
            fontWeight: 'bold',
            color: '#2c3e50',
          }}
        >
          Create an Account
        </h2>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ position: 'relative' }}>
            <User
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#b0b0b0',
              }}
              size={20}
            />
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                border: '1px solid #e0e0e0',
                borderRadius: '0.5rem',
                outline: 'none',
                fontSize: '1rem',
              }}
              required
            />
          </div>
          <div style={{ position: 'relative' }}>
            <Mail
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#b0b0b0',
              }}
              size={20}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                border: '1px solid #e0e0e0',
                borderRadius: '0.5rem',
                outline: 'none',
                fontSize: '1rem',
              }}
              required
            />
          </div>
          <div style={{ position: 'relative' }}>
            <Lock
              style={{
                position: 'absolute',
                left: '0.75rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: '#b0b0b0',
              }}
              size={20}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
              style={{
                width: '100%',
                padding: '0.75rem 1rem 0.75rem 2.5rem',
                border: '1px solid #e0e0e0',
                borderRadius: '0.5rem',
                outline: 'none',
                fontSize: '1rem',
              }}
              required
              minLength={6}
            />
          </div>
          <button
            type="submit"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0.75rem 0',
              fontSize: '1rem',
              fontWeight: '500',
              color: '#ffffff',
              background: 'linear-gradient(to right, #3498db, #1abc9c)',
              borderRadius: '0.5rem',
              boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.3s ease',
            }}
            className="hover:scale-110"
          >
            {isLoading ? 'Registering...' : 'Register'}
            <ArrowRight style={{ marginLeft: '0.5rem' }} size={20} />
          </button>
        </form>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <a
            href="/login"
            style={{ color: '#3498db', textDecoration: 'none', fontSize: '0.9rem' }}
            className="hover:underline"
          >
            Already have an account? Login
          </a>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default Register;