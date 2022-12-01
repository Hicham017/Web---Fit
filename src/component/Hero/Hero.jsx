import React, { Component } from "react";
import "../Hero/Hero.css";
import Header from "../Header/Header";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <div className="left-h">
          <Header />
          {/* the best ad */}
          <div className="the-best-ad">
            <div></div>
            <span>le meilleur club de fitness au monde</span>
          </div>

          {/* Hero Heading */}
          <div className="hero-text">
            <div>
              <span className="stroke-text">Forge </span>
              <span>ton</span>
            </div>
            <div>
              <span>Corps Idéal</span>
            </div>
            <div>
              <span>
                Ici, nous vous aiderons à façonner votre corps idéal et à vivre
                pleinement votre vie
              </span>
            </div>
          </div>

          {/* figures */}
          <div className="figures">
            <div>
              <span>+140</span>
              <span>coachs experts</span>
            </div>
            <div>
              <span>+978</span>
              <span>membres</span>
            </div>
            <div>
              <span>+50</span>
              <span>programmes fitness</span>
            </div>
          </div>

          {/* hero buttons */}
          <div className="hero-buttons">
            <buttons className="btn">Commencer</buttons>
            <buttons className="btn">En savoir plus</buttons>
          </div>
        </div>
        <div className="right-h">
          <button className="btn">Adhérer</button>

          <div className="heart-rate">
            <img src={Heart} alt="" />
            <span>Rythme Cardiaque</span>
            <span>116 bpm</span>
          </div>

          {/* hero images */}
          <img src={hero_image} className="hero-image" />
          <img src={hero_image_back} className="hero-image-back" />
          {/* calories */}
          <div className="calories">
            <img src={calories} alt="" />
            <div>
              <span>Calories Brulées</span>
              <span>220 kcal</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
