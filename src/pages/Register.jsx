import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        if (name.length < 5) {
            setNameError("Name should be more than 5 character");
            return;
        }
        else {
            setNameError(" ");
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                updateUser({ displayName: name, photoURL: photo }).then(() => {

                    setUser({ ...user, displayName: name, photoURL: photo });
                    navigate("/");
                }).catch((error) => {
                    alert(error);
                    setUser(user);
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);

            });

    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register Your Account</h2>
                <form onSubmit={handleRegister} className="card-body">
                    <fieldset className="fieldset">

                        {/* Name */}
                        <label className="label">Name</label>
                        <input name='name' type="text" className="input" placeholder="Name" required />
                        {nameError && <p className='text-red-500 text-xs'>{nameError}</p>}

                        {/* Photo URL */}
                        <label className="label">Photo URL</label>
                        <input name='photo' type="text" className="input" placeholder="Photo URL" />

                        {/* Email */}
                        <label className="label">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required />


                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        <p className='font-semibold text-center pt-5'>Already have you Account? <Link to="/auth/login" className='text-secondary'>Login</Link> </p>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Register;