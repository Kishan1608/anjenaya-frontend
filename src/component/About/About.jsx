import React from "react";
import "./About.css";
import img1 from '../../assest/about-icon.svg';

const About = () => {
    return(
        <section id="about">
            <h1 className="about_header">Who we are</h1>
            
            <h4 className="about_subheader">Welcome to ANJENAYA WEALTH MANAGEMENT, where we are dedicated to helping individuals create and grow their personal wealth. <p style={{color: '#d63031', fontWeight:'800'}}> Our Founder and CEO, Mr. Mayank,</p> is a financial planner and investment adviser with years of experience in the industry.</h4>
            <div className="about_us">
                <div className="card">
                    <div className="content">
                        <br/>
                        With a background in equity research analysis and trading, Mayank brings a wealth of knowledge to the table. He has worked for various media offices and traded and invested for multiple prop firms, including forex firms. He is also a semi-qualified CA, giving him a unique perspective on financial management.At ANJENAYA WEALTH MANAGEMENT, Mayank oversees the business, ensuring capital appreciation and overall development.
                        </div>
                </div>

                <div className="card">
                    <div className="image">
                        <img src={img1} alt="404" height={300} width={300}/>
                    </div>
                    <div className="content">
                        Where banks give you just 5% returns , Our experts have given atleast <strong>15-18% return Pa</strong>                  
                    </div>
                </div>

                <div className="card">
                    <div className="content">
                        Mayank's passion for helping people create wealth and beat inflation year on year with minimal risks is evident in everything we do at ANJENAYA WEALTH MANAGEMENT.We believe that everyone deserves the opportunity to grow their personal wealth,with personalized investment solutions and we are here to help make that a reality.Contact us today to learn more about our investment management services and how we can help you achieve your financial goals.
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;