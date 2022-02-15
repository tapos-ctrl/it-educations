import React from 'react';
import { useNavigate } from 'react-router-dom';
import sliderOne from '../../img/slider-one.jpg'
import './About.css';
import team from '../../img/team.webp';
const About = () => {
    const Navigate = useNavigate()
    return (
        <div>
            <div class="about-section ">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pt-3">
                            <h1>Welcome</h1>
                            <p className="text-start">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium laudantium,
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <p className="text-start">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam quisquam, architecto ipsum quam libero asperiores autem aspernatur aperiam tempora ex eum fugiat hic beatae culpa accusamus necessitatibus, nobis corporis id.

                            </p>
                            <button className="btn btn-dark submit-btn mx-1 my-5 text-end" onClick={()=> Navigate('/home')}>Home</button>
                        </div>
                        <div className="col-lg-6 mt-5 pt-5">
                            <img src={team} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;