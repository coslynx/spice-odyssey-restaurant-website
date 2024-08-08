import React from 'react';
import styles from '../styles/about.module.css';

const About = () => {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">About Spice Odyssey</h2>
        <p className="text-lg text-gray-600 text-center mb-8">
          Spice Odyssey is a vibrant Indian restaurant dedicated to serving authentic and flavorful dishes. Our passionate team of chefs uses only the freshest ingredients and traditional techniques to create a truly unforgettable culinary experience.
        </p>
        <p className="text-lg text-gray-600 text-center mb-8">
          We believe in sharing the rich heritage and diverse flavors of Indian cuisine. Our menu is a testament to our commitment to quality and authenticity, offering a wide range of options to suit every palate.
        </p>
        <p className="text-lg text-gray-600 text-center mb-8">
          Join us at Spice Odyssey for a warm and inviting atmosphere, impeccable service, and the true taste of India.
        </p>
      </div>
    </section>
  );
};

export default About;