import './adlogin.css'
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import axios from '../../axiosInstance';
// eslint-disable-next-line

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem('adminToken')) {
            navigate('/admin/home')
        }// eslint-disable-next-line
      }, [])

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
            const { data } = await axios.post("api/admin/login", {
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
                else if (data.admin && data.created) {
                    localStorage.setItem('admin', JSON.stringify(data.admin));
                    localStorage.setItem('adminToken', JSON.stringify (data.adtoken));
                    navigate("/admin/home");
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='amainhead'>
            <Link to={'/'}>
                <h1 className='jkrooms'>JK ROOMS</h1>
            </Link>
            <div className='acontainer'>
                <div className='arow'>
                    <div className='col-md-6'>
                        <div className='acard'>
                            <h4 className='atitle'>Admin Login</h4><br />
                            <div className='acard-body'>
                                <form onSubmit={handleSubmit}>
                                    <div className='aform-group'>
                                        <label>Email</label>
                                        <input type="email" className='aform-control' value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} />
                                    </div><br />
                                    <div className='aform-group'>
                                        <label>Password</label>
                                        <input type="password" className='aform-control' value={values.password} onChange={(e) => setValues({ ...values, password: e.target.value })} />
                                    </div><br /><br />
                                    <div className='aform-group'>
                                        <button className='abtn btn-primary'>Login</button>
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