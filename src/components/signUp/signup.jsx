import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { Loader2 } from 'lucide-react'; // Agar loader ishlatilsa
import 'react-toastify/dist/ReactToastify.css';

import './signup.css';

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    const { id, value } = e.target;
    setForm(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);

    // Maydonlarni tekshirish
    if (!form.email || !form.password || (!isLogin && (!form.firstName || !form.lastName))) {
      toast.error("Iltimos, barcha maydonlarni to‘ldiring!");
      setLoading(false);
      return;
    }

    if (!isLogin) {
      // Ro'yxatdan o'tish
      localStorage.setItem('user', JSON.stringify(form));
      toast.success('Muvaffaqiyatli ro‘yxatdan o‘tildi!');
      setLoading(false);
      navigate('/'); // HomePage ga yo‘naltirish
    } else {
      // Login tekshirish
      const savedUser = JSON.parse(localStorage.getItem('user'));
      if (savedUser && savedUser.email === form.email && savedUser.password === form.password) {
        toast.success('Xush kelibsiz!');
        setLoading(false);
        navigate('/'); // HomePage ga yo‘naltirish
      } else {
        toast.error("Email yoki parol noto‘g‘ri!");
        setLoading(false);
      }
    }
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <form className='form' onSubmit={handleSubmit}>
          <div className='topBtnWrapper'>
            <button
              className={`signUpBtn ${isLogin ? 'inactive' : 'active'}`}
              onClick={() => setIsLogin(false)}
              type='button'
            >
              Sign Up
            </button>
            <button
              className={`logInBtn ${isLogin ? 'active' : ''}`}
              onClick={() => setIsLogin(true)}
              type='button'
            >
              Log In
            </button>
          </div>

          <h2 className='signUpHeading'>
            {isLogin ? 'Log in to your account' : 'Sign up for free'}
          </h2>

          {!isLogin && (
            <div className='fullNameWrapper'>
              <div className='firstName'>
                <label htmlFor='firstName'>
                  First Name <span className='required'>*</span>
                </label>
                <input
                  id='firstName'
                  type='text'
                  placeholder='Enter your name...'
                  value={form.firstName}
                  onChange={handleChange}
                />
              </div>
              <div className='lastName'>
                <label htmlFor='lastName'>
                  Last Name <span className='required'>*</span>
                </label>
                <input
                  id='lastName'
                  type='text'
                  placeholder='Enter your last name...'
                  value={form.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          )}

          <div className='emailWrapper'>
            <label htmlFor='email'>
              Email Address <span className='required'>*</span>
            </label>
            <input
              id='email'
              type='email'
              placeholder='Enter your email address...'
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className='passwordWrapper'>
            <label htmlFor='password'>
              Password <span className='required'>*</span>
            </label>
            <input
              id='password'
              type={showPassword ? 'text' : 'password'}
              placeholder='Enter your password...'
              value={form.password}
              onChange={handleChange}
            />
            <button
              type='button'
              className='passlock'
              onClick={() => setShowPassword(!showPassword)}
            >
              <i className={`fa-solid ${showPassword ? 'fa-unlock' : 'fa-lock'}`}></i>
            </button>
          </div>

          <button type='submit' disabled={loading}>
            {loading ? <Loader2 className='animate-spin' /> : isLogin ? 'Log In' : 'Get Started'}
          </button>
        </form>
      </div>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default SignUp;
