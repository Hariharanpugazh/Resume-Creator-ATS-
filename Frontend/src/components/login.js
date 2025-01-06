import React, { useState } from 'react';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({
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

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:8000/resume/api/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success('Login successful!', {
          autoClose: 3000,
          onClose: () => navigate('/resume'),
        });
      } else {
        const data = await response.json();
        toast.error(data.error || 'Login failed', {
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error('Login error:', error);
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
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
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
            {isLoading ? 'Logging in...' : 'Login'}
            <ArrowRight style={{ marginLeft: '0.5rem' }} size={20} />
          </button>
        </form>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <a
            href="/register"
            style={{ color: '#3498db', textDecoration: 'none', fontSize: '0.9rem' }}
            className="hover:underline"
          >
            Need an account? Register
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

export default Login;
