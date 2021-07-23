import { Redirect, Route } from "react-router-dom"

const PrivateRouter = (props) => {
    const fistLogin = localStorage.getItem('firstLogin')
    return fistLogin ? <Route {...props} /> : <Redirect to='/' />
}

export default PrivateRouter
