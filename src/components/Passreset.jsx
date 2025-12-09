import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Passreset = () => {
    const { resetPassword } = use(AuthContext);
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        resetPassword(email).then(() => {
            // Password reset email sent!
            // ..
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }


    return (
        <div>
            {/* Open the modal using document.getElementById('ID').showModal() method */}

            <div ><a onClick={() => document.getElementById('my_modal_2').showModal()} className="link link-hover">Forgot password?</a></div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box flex flex-col">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleSubmit} >Submit</button>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button className='btn btn-sm btn-accent'>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Passreset;