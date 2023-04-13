import './login.css';
import { useDispatch, useSelector } from "react-redux";
import { setLogin } from '../../state';
import axios from 'axios';
import { useState } from 'react';

export const Login = () => {
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        const formInfo = {email, password};
        console.log(formInfo);
    
        const response = await axios.post("http://localhost:3001/auth/login/admin", formInfo, {
            headers: { "Content-Type": "application/json" },
        });
        
        const loggedIn = response.data;

        if (loggedIn) {
            dispatch(
            setLogin({
                user: loggedIn.user,
                token: loggedIn.token,
            })
            );
            console.log(token);
        }
    }

    return (
        <div className="login-page">
            <div className="form">
                <form className="login-form">
                    <input 
                        type='text'
                        label="Email"               
                        name="email"
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type='password'
                        label="Password"
                        name="password"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type='submit' onClick={handleLogin}>Login</button>
                </form>
            </div>
        </div>
    )
};

export default Login;