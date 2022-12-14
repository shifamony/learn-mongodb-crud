
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import login from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import SocialLogin from '../shared/SocialLogin/SocialLogin';
const Login = () => {
  const {userLogIn} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/'

    const handleLogin = (e) => {
     e.preventDefault();
     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;
     form.reset();
     console.log(email,password);

     userLogIn(email, password)
     .then((result) => {
      // Signed in 
      const user = result.user;
      form.reset();
      // console.log(user);

     const currentUser = {
       email:user.email
     }
     console.log(currentUser);

      //GET JWT TOKEN
      fetch('https://genius-car-server-chi.vercel.app/jwt', {
        method:'POST',
        headers: {
          'content-type': 'application/json'
        },
        body:JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        //set localstorage
        localStorage.setItem('geniusItem', data.token);
        navigate(from,{replace: true})
      })

      
      toast.success('Now you are logged in')
    })
    .catch((error) => {
     toast.error(error.message);
    });

    }
    return (
        <div className="hero w-full my-20">
  <div className="hero-content grid gap-28 md:grid-cols-2 flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     
      <img src={login} className='w-3/4' alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
    <h1 className="text-5xl font-bold text-center">Login now!</h1>
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
          <label className="label">
            <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
            <input type="submit" className="btn btn-primary" value='login'/>
        </div>
      </form>
      <p className='text-center'>New to Genius Car <Link className='text-orange-600 font-bold text-center' to='/signup'>Signup</Link></p>
      <SocialLogin></SocialLogin>
    </div>
  </div>
</div>
    );
};

export default Login;