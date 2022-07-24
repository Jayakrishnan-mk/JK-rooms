import './adlogin.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../axiosInstance';


function Login() {
    const navigate = useNavigate();

    const register = () => {
        navigate('/register')
    }

    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const generateError = (err) =>
        toast.error(err, {
            position: "bottom-right"
        })



    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (values.email === "" || values.password === "") {
                generateError("Please fill all the fields");
                return;
            }
            const { data } = await axios.post("api/login", {
                ...values
            },
                {
                    withCredentials: true
                }
            );
            // console.log('compiler coming........');
            console.log('axios data.....................', data);
            if (data) {
                if (data.error) {
                    generateError("Invalid user id or Password");
                    return;
                }
                else if (data.user && data.created) {
                    navigate("/");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='mainhead'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card'>
                            <h4 className='title'>Admin Login</h4><br />
                            <div className='card-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-group'>
                                        <label>Email</label>
                                        <input type="email" className='form-control' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                                    </div><br />
                                    <div className='form-group'>
                                        <label>Password</label>
                                        <input type="password" className='form-control' value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} />
                                    </div><br /><br />
                                    <div className='form-group'>
                                        <button className='btn btn-primary'>Login</button>
                                    </div><br />
                                    {/* <div className='form-group'>
                                        <button className='btn btn-primary' onClick={register}>Register</button>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}




export default Login