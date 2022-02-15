import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../../img/459-4597215_education-png-transparent-images-education-logo-png-hd-removebg-preview.png';
import Slider from './Slider/Slider';
const Header = () => {


    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light custom-nav-bg">
                <div class="container">
                    <Link class="navbar-brand custom-logo" to="/home"><img src={logo} alt="" /><span>It education</span></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse custom-list" id="navbarNav">
                        <ul class="navbar-nav ">
                            <li class="nav-item">
                                <Link class="nav-link active text-black" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-black" to="services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-black" to="about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-black" to="team">Team</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link text-black" to="contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;