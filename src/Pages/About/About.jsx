import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './About.css';
import Navbar from '../../Components/Navbar/Navbar';

const About = () => {
  return (
    <>
    <Navbar />
    <div className="about-container">
      <header>
        <h1>About Us</h1>
        <p>We are a team of dedicated professionals working together to bring you the best service.</p>
      </header>
      <section className="team">
        <h2>Our Team</h2>
        <p>Our team consists of passionate individuals who are experts in their respective fields.</p>
        <Link to="/">
          Home
        </Link>
      </section>
    </div>
    </>
  );
};

export default About;
