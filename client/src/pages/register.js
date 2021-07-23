import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../redux/actions/authAction'

const Register = () => {
    const { auth, alert } = useSelector(state => state)
    const history = useHistory()

    const initialState = {
        fullname: '',
        username: '',
        email: '',
        password: '',
        cf_password: '',
        gender: 'male'
    }
    const [userData, setUserData] = useState(initialState);
    const { fullname, username, email, password, cf_password } = userData;
    const [typePass, setTypePass] = useState(false);
    const [typeCfPass, setTypeCfPass] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        if (auth.token) history.push('/')
    }, [auth.token, history])


    const handleChangeInput = e => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(register(userData));
    }

    return (
        <div className='auth-page'>
            <form onSubmit={handleSubmit}>
                <h3 className='text-uppercase text-center mb-4'>E-Network</h3>
                <div className="mb-3">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullname"
                        onChange={handleChangeInput}
                        name='fullname'
                        value={fullname}
                        style={{ background: `${alert.fullname ? '#fd2d6a14' : ''}` }}
                    />
                    <div className="form-text text-danger">{alert.fullname ? alert.fullname : ''}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="username">User Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="username"
                        onChange={handleChangeInput}
                        name='username'
                        value={username.toLowerCase().replace(/ /g, '')}
                        style={{ background: `${alert.username ? '#fd2d6a14' : ''}` }}
                    />
                    <div className="form-text text-danger">{alert.username ? alert.username : ''}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={handleChangeInput}
                        name='email'
                        value={email}
                        style={{ background: `${alert.email ? '#fd2d6a14' : ''}` }}
                    />
                    <div className="form-text text-danger">{alert.email ? alert.email : ''}</div>

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
                            style={{ background: `${alert.password ? '#fd2d6a14' : ''}` }}
                        />
                        <small onClick={() => setTypePass(!typePass)}>
                            {typePass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                    <div className="form-text text-danger">{alert.password ? alert.password : ''}</div>
                </div>

                <div className="mb-3">
                    <label htmlFor="cf_password" className="form-label">Confirm Password</label>
                    <div className="pass">
                        <input
                            type={typeCfPass ? "text" : "password"}
                            className="form-control"
                            id="cf_password"
                            onChange={handleChangeInput}
                            name='cf_password'
                            value={cf_password}
                            style={{ background: `${alert.cf_password ? '#fd2d6a14' : ''}` }}
                        />
                        <small onClick={() => setTypeCfPass(!typeCfPass)}>
                            {typeCfPass ? 'Hide' : 'Show'}
                        </small>
                    </div>
                    <div className="form-text text-danger">{alert.cf_password ? alert.cf_password : ''}</div>
                </div>

                <div className="row justify-content-between mx-0 mb-1">
                    <label htmlFor="male">
                        Male: <input type='radio' id='male' name='gender'
                            value='male' defaultChecked onChange={handleChangeInput} />
                    </label>
                    <label htmlFor="female">
                        Female: <input type='radio' id='female' name='gender'
                            value='female' onChange={handleChangeInput} />
                    </label>
                    <label htmlFor="other">
                        Other: <input type='radio' id='other' name='gender'
                            value='other' onChange={handleChangeInput} />
                    </label>
                </div>

                <button type="submit" className="btn btn-dark w-100">
                    Register
                </button>
                <p className='my-2'>
                    Already have an account?&nbsp;
                    <Link to='/' style={{ color: 'crimson' }}>Login Now</Link>
                </p>
            </form>
        </div>
    )
}

export default Register
