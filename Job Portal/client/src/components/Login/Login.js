import React, { useState } from 'react'
import '../Login/Login.css'
import classNames from 'classnames';
export default function Login() {

    const [Size, setSize] = useState(false);
    const [Close, setClose] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [FormType, setFormType] = useState('login')
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const props = [name, email, phone, password, confirmPassword]

    const onClickRegister = () => {
        setSize(!Size);
    }

    const onClickClose = () => {
        setClose(!Close);
    }

    async function registerUser(event) {
        event.preventDefault()
        setLoading(true)
        setFormType('submitted')
        const response = await fetch('http://localhost:5000/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                phone,
                password
            })
        })
        const data = await response.json()
        console.log(data)
        if (response.status === 200) {
            setSuccess(data.message)
            setMessage(data.message)
            console.log(success)
            setLoading(false)
        }
        else {
            setError(data.message)
            console.log(error)
            setLoading(false)
        }
        setName('')
        setEmail('')
        setPhone('')
        setPassword('')
        setConfirmPassword('')
    }

    async function logInUser(event) {
        event.preventDefault()
        setFormType('submitted')

        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json()
        setMessage(data.message)
        console.log(data)
        if (response.status === 200) {
            setSuccess(data.message)
            console.log(success)
        }
        else {
            setError(data.message)
            console.log(error)
        }

    }

    return (
        <div className='container_3'>
            <div className={classNames('wrapper', { 'active': Size, 'active-popup': Close })} >
                <span className="icon-close">
                    <ion-icon onClick={onClickClose} name="close-outline"></ion-icon>
                </span>
                <div className="form-box login">
                    <h3>Login</h3>
                    <form action="#"  >
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            <label>Email</label>
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                            </span>
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                            <label>Password</label>
                        </div>
                        <div className="remember-forgot">
                            <label for=""><input type="checkbox" />Remember Me</label>
                            <a href="#">Forget password?</a>
                        </div>
                        <button type="submit" className="btn1">Login</button>
                        <div className="login-register">
                            <p>Don't have a account? <a href="#" onClick={onClickRegister} className="register-link">Register</a></p>
                        </div>
                    </form>
                </div>
                <div className="form-box register">
                    <h3>Registration</h3>
                    <form action="#" onSubmit={registerUser}>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="person-outline"></ion-icon>
                            </span>
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <label>Username</label>
                            {error.name && <p className='error'>{error.name}</p>}
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="mail-outline"></ion-icon>
                            </span>
                            <input type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            <label>Email</label>
                            {error.email && <p className='error'>{error.email}</p>}
                        </div>
                        <div className="input-box">
                            <span className="icon">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                            </span>
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                            <label>Password</label>
                            {error.password && <p className='error'>{error.password}</p>}
                        </div>
                        <div className="remember-forgot">
                            <label for=""><input type="checkbox" />I agree to the terms & conditions</label>
                        </div>
                        <button type="submit" className="btn1">Register</button>
                        <div className="login-register">
                            <p>Already have an account? <a href="#" onClick={onClickRegister} className="login-link">Login</a></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className="after_submit">
                <div className="message">{message}</div>
                <div className="error">{ }</div>
            </div>
        </div>
    )
}
