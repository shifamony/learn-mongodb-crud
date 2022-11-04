import React from 'react';
import { FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
    return (
        <div>
            <p className='text-center'>Social Login</p>
            <p className='flex content-center'><button className='flex items-center '><FaGoogle></FaGoogle>Sign With Google</button></p>
        </div>
    );
};

export default SocialLogin;