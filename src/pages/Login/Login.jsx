import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../Shared/Navbar";


const Login = () => {
    const {loginUser,loading} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email,password)
        .then(res=>{
            navigate('/');
        })
        .catch(err=>{
            console.log(err.message);
        })
    }   
    return (
        <div>
            <Navbar></Navbar>
            <form onSubmit={handleLogin}>
                <div className="mt-16 text-center max-w-md mx-auto px-8 pb-14 bg-gray-600">
                    <h2 className="text-4xl font-bold mt-28 pt-10 text-black">Login your account</h2>
                    <div className="text-left">
                        <h2 className="font-semibold mt-9">Email Address</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="email" name="email" id="" required placeholder="Enter you email address" />
                    </div>
                    <div className="text-left mt-3">
                        <h2 className="font-semibold">Password</h2>
                        <input className="py-3 pl-2 pr-4 w-full" type="password" name="password" id="" required placeholder="Enter you email address" />
                    </div>
                    {
                        loading?<div className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">
                            <span className="loading loading-bars loading-sm"></span>
                        </div>:<button className="bg-base-300 py-3 px-5 mt-4 w-full rounded-sm">Login</button>
                    }
                    
                    <p className="mt-3 text-black">Do not have an account? <Link to={'/register'} className="text-blue-300">Register</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Login;