import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const nav = useNavigate();

    const handleLogin = () => {
        sessionStorage.setItem("auth",true);
        nav("/dashboard");
    }

    return (
    <div>
        <h1>Login Page</h1>
        <button onClick={handleLogin}>Login</button>
    </div>
  )
}
