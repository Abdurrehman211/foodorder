import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import "./landingpage.css";
import Pizza from "./images/pizza.png";
import image from './images/Profile-icon.png';
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import image123 from './images/backburger.jpg';
function Landingpage() {
    useEffect(() =>{
        Aos.init({
            duration: 2000,
            mirror: true,
            easing: 'ease-in-out',
            once: false
        });
    })
    const navigate = useNavigate();
    const HandleProfile = () => {
alert("Profile");
        navigate("/Profile");
    }
    return (
        <>
        <div className="Link">
            <p style={{fontSize: '30px', fontWeight: 'bold',}}>Promotion offer click on the img</p>
          <a href="https://www.cpmrevenuegate.com/vghjt369?key=f4a48e88fd1c849141bad17100f39c8a" target="_blank" rel="noopener noreferrer" id="Link" style={{ textDecoration: 'none'}}><img src={image123} alt="Burger" id="Linked" /></a>
          </div>
            <section id="Landingpage">
                <div className="main">
                <button id="Profile11" onClick={HandleProfile}><img src={image} alt="Profile-Pic" id="profile"/></button>
                    <div className="child1 col-md-6 col-sm-12">
                        <div className="container " data-aos='fade-bottom'>
                        <h3>"Feels like Italy"</h3>
                        <h1>Foodie Special Pizza</h1><br />
                        <p>
                            Try our Foodie special Pizza, a delicious slice of pizza that is perfect for any occasion and make your taste buds Happy!.
                        </p><br />
                        <button className="button" data-aos='fade-right'>
                            Details
                        </button>
                        <button type="button" class="button1">
                            <span class="button__text">Add Item</span>
                            <span class="button__icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" stroke="currentColor" height="24" fill="none" class="svg"><line y2="19" y1="5" x2="12" x1="12"></line><line y2="12" y1="12" x2="19" x1="5"></line></svg></span>
                        </button>
                        </div>
                    </div>
                    <div className="child2 col-md-6 col-sm-12">
                    <div className="pizza-container" data-aos='fade-left'>
                            <img src={Pizza} id="pizza" className="pizza" />
                            </div>
                        </div>
                </div>
            </section>
        </>
    )
}
export default Landingpage;