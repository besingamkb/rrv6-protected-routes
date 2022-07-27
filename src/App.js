import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import ProtectedRoutes from "./ProtectedRoutes";
import Cookies from 'js-cookie'

function App() {
  return (
    <div className="App">
        <h1>Protected Routes!!</h1>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
        </ul>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
            </Route>
        </Routes>
    </div>
  );
}

function Login() {
    const loginHandler = (event) => {
        event.preventDefault()
        Cookies.set('authenticated', true)
    }
    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={loginHandler}>
                <div>
                    <input type="text"/>
                </div>
                <div>
                    <input type="password"/>
                </div>
                <div>
                    <input type="submit" value="login"/>
                </div>
            </form>
        </div>
    )
}

function Dashboard() {
    return (
        <h1>Dashboard</h1>
    )
}

export default App;
