import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import resentCourse from '../../img/web-devlopment.jpeg';
import resentCourseTwo from '../../img/web-dev.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row row-cols-1 row-cols-4">
                    <div className="col-sm-12 col-xs-6 col-lg-2">
                        <h4 className="footer-title">User Link</h4>
                        <ul className="footer-list">
                            <li>
                                <Link style={{ textDecoration: 'none', color: "silver" }} to="/services">Services</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: "silver" }} to="/about">About</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: "silver" }} to="/team">Team</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: "silver" }} to="contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-xs-6 col-lg-2">
                        <ul className="footer-list pt-5">
                            <li>
                                <Link style={{ textDecoration: 'none', color: "silver" }} to="">Become a Teacher</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: "silver" }} to="/about">Maintenance</Link>
                            </li>
                            <li>
                                <Link style={{ textDecoration: 'none', color: "silver" }} to="/team">Language Packs</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-12 col-xs-12 col-lg-4">
                        <h4 className="footer-title text-start">Recent Courses</h4>
                        <div className="recent-course-box d-flex">
                            <div className="recent-course-igm">
                                <img src={resentCourse} alt="" />
                                <h6>web course</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-xs-12 col-lg-4">
                        <h4 style={{color:'silver'}}>Contact</h4>
                        <div class="mb-3 text-white text-start">
                            <label for="exampleFormControlInput1" class="form-label text-start">Email address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                        </div>
                        <div class="mb-3 text-start text-white">
                            <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button className="btn btn-primary text-end">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;