import React, { useEffect } from "react";
import "./About.css";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  // Initialize AOS within useEffect to ensure it runs after the component is mounted
  useEffect(() => {
    Aos.init({
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: true, // whether elements should animate out while scrolling past them
    });
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <section id="About">
        <div className="About" data-aos="fade-up">
          <h1 data-aos="fade-up">About Us</h1>
          <div className="About-child1">
            <p data-aos="fade-right">
              Our products are crafted with the highest quality materials, designed to meet your needs with precision and style. From innovative technology to timeless craftsmanship, we offer a wide range of options that combine functionality with elegance. Experience excellence and elevate your lifestyle with our carefully curated selection of products.
            </p>
          </div>
          <div className="About-child2">
            {/* Additional content can go here */}
          </div>
        </div>
      </section>
    </>
  );
}
