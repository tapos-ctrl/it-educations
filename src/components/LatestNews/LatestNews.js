import React from 'react';
import webDesign from '../../img/download.jpeg';
import webDevelopment from '../../img/web-dev.jpg';
import graphic from '../../img/web-devlopment.jpeg'

const LatestNews = () => {
    return (
        <div class="service pb-3">
            <div className="container">
                <h1 class="service-title py-5">LATEST NEWS</h1>
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 pb-3 ">
                    <div class="col">
                        <div class="card">
                            <img src={webDesign} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">WEB DESIGN</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;