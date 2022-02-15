import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';
const Contact = () => {
    const Navigate = useNavigate()
    return (
        <div className="container py-5">
            <div className="col-sm-12 col-xs-12 col-lg-12">
                <h4 style={{ color: 'black' }}>Contact</h4>
                <div class="mb-3 text-black text-start">
                    <label for="exampleFormControlInput1" class="form-label text-start">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                </div>
                <div class="mb-3 text-start text-black">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button className="btn btn-dark submit-btn mx-1 text-end">Submit</button>
                <button className="btn btn-dark submit-btn mx-1 text-end" onClick={()=> Navigate('/home')}>Home</button>
            </div>
        </div>
    );
};

export default Contact;