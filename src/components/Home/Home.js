import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Header from '../Header/Header';
import Slider from '../Header/Slider/Slider';
import LatestNews from '../LatestNews/LatestNews';
import Service from '../Services/Service/Service';

const Home = () => {
    return (
        <div>
            <Slider/>
            <Service/>
            <LatestNews/>
        </div>
    );
};

export default Home;