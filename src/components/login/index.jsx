import React, { useEffect, useState } from 'react';
import './login.css';
import axiosInstance from '../../axios.config';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({ email: null, password: null });

    useEffect(() => {
        const token = JSON.parse(window.localStorage.getItem("token"));
        if (token) {
            navigate("/main");
        }
    }, [])

    const handleClick = async () => {
        const payload = {
            email: userData?.email,
            password: userData?.password,
        }

        await axiosInstance.post("user/login", payload).then((res) => {
            window.localStorage.setItem("token", JSON.stringify(res?.data?.token));
            navigate("/main")
        }).catch(err => console.log({ err }));
    }

    return (
        <div className='login_container'>
            <div className='login_header'>Login</div>
            <div className='login_input'>
                <div className='login_fields'>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        onChange={(e) => setUserData((prev) => ({ ...prev, email: e.target.value }))}
                    />
                </div>
                <div className='login_fields'>
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        onChange={(e) => setUserData((prev) => ({ ...prev, password: e.target.value }))}
                    />
                </div>
                <div className='login_fields'>
                    <Button variant="outlined" size='large' onClick={handleClick}>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default Login;