import React from 'react';
import './Service.css';
import webDesign from '../../../img/web-dev.jpg';
import webDevelopment from '../../../img/web-devlopment.jpeg';
import graphic from '../../../img/download.jpeg'
import { Link } from 'react-router-dom';
const Service = () => {


    return (
        <div class="service pb-3">
            <div className="container">
                <h1 class="service-title py-5">POPULAR COURSES</h1>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-3 ">
                    <div class="col">
                        <div class="card">
                            <img src={webDesign} class="card-img-top" alt="..." />
                            <div class="card-body">
                                    <h5 class="card-title">WEB DESIGN</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between">
                                    <Link to="enroll" class="enrollBtn">Enroll</Link>
                                    <span class="bg-dark px-3 py-2 text-white" style={{borderRadius:'20px'}}>Tk 5000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={webDevelopment} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">WEB DEVELOPMENT</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <div class="d-flex justify-content-between">
                                    <Link to="/enroll" class="enrollBtn">Enroll</Link>
                                    <span class="bg-dark px-3 py-2 text-white" style={{borderRadius:'20px'}}>Tk 5000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src={graphic} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">GRAPHIC DESIGNING</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                <div class="d-flex justify-content-between">
                                    <Link to="enroll" class="enrollBtn">Enroll</Link>
                                    <span class="bg-dark px-3 py-2 text-white" style={{borderRadius:'20px'}}>Tk 5000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/services" class="btn all-course-btn">VIEW ALL COURSE</Link>
            </div>
        </div>
    );
};

export default Service;