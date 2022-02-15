import React from 'react';
import './Slider.css';
import sliderOne from '../../../img/slider-one.jpg';
import sliderTwo from '../../../img/slider-two.jpg';
import sliderThree from '../../../img/slider.jpg';
import { Link } from 'react-router-dom';

const Slider = () => {
    return (
        <div class="slider-section">
            <div id="carouselExampleFade" class="carousel slide custom-slider carousel-fade" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={sliderOne} class="d-block custom-slider-img w-100" alt="..." />
                        <div className="slider-text-box">
                            <h1 class="mb-4">EDUCATE HTML TEMPLATE</h1>
                            <p class="mb-4">Web Design and Development Website design that goes beyond brochure-ware. <br/>
                                Create websites that drive traffic, leads and conversions in CMS's like WordPress, <br/>
                                Drupal and Hubspot and eCommerce platforms like Magento, WooCommerce and Shopify.</p>
                            <button class="btn courseBtn">Start a course</button>
                            <Link to="/services" class="demoBtn pt-1">DEMO</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={sliderTwo} class="d-block custom-slider-img w-100" alt="..." />
                        <div className="slider-text-box">
                            <h1 class="mb-4">EDUCATE GRAPHIC DESIGN</h1>
                            <p class="mb-4">Web Design and Development Website design that goes beyond brochure-ware. <br/>
                                Create websites that drive traffic, leads and conversions in CMS's like WordPress, <br/>
                                Drupal and Hubspot and eCommerce platforms like Magento, WooCommerce and Shopify.</p>
                            <button class="btn courseBtn">Start a course</button>
                            <Link to="/services" class="demoBtn pt-1">DEMO</Link>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img src={sliderThree} class="d-block custom-slider-img w-100" alt="..." />
                        <div className="slider-text-box">
                            <h1 class="mb-4">EDUCATE WEB DEVELOPMENT</h1>
                            <p class="mb-4">Web Design and Development Website design that goes beyond brochure-ware. <br/>
                                Create websites that drive traffic, leads and conversions in CMS's like WordPress, <br/>
                                Drupal and Hubspot and eCommerce platforms like Magento, WooCommerce and Shopify.</p>
                            <button class="btn courseBtn">Start a course</button>
                            <Link to="/services" class="demoBtn pt-1">DEMO</Link>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Slider;