import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authAction';


const Login = () => {
    const initialState = { email: '', password: '' }
    const { auth } = useSelector(state => state)

    const [userData, setUserData] = useState(initialState);
    const { email, password } = userData;
    const [typePass, setTypePass] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (auth.token) history.push('/')
    }, [auth.token, history])


    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login(userData));
    }

    return (
        <div className='auth-page'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-uppercase text-center mb-4'>E-Network</h3>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        onChange={handleChangeInput}
                        name='email'
                        value={email}
                    />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <div className="pass">
                        <input
                            type={typePass ? "text" : "password"}
                            className="form-control"
                            id="exampleInputPassword1"
                            onChange={handleChangeInput}
                            name='password'
                            value={password}
                        />
                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                </div>
                <button type="submit" className="btn btn-dark w-100" disabled={email && password ? false : true}>
                    Login
                </button>
                <p className='my-2'>
                    You don't have an account?&nbsp;
                    <Link to='/register' style={{ color: 'crimson' }}>Register Now</Link>
                </p>
            </form>
        </div>
    )
}

export default Login
