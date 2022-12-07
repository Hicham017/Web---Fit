import React, { Component } from "react";
import "../Hero/Hero.css";
import Header from "../Header/Header";
import Heart from "../../assets/heart.png";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import calories from "../../assets/calories.png";
import NumberCounter from "number-counter";

import { motion } from "framer-motion";

class Hero extends Component {
  render() {
    const transition = { type: "spring", duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;
    return (
      <div className="hero" id="home">
        <div className="blur hero-blur"></div>
        <div className="left-h">
          <Header />
          {/* the best ad */}
          <div className="the-best-ad">
            <motion.div
              initial={{ left: mobile ? "165px" : "238px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
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
              <span>
                <NumberCounter end={140} start={100} delay="4" preFix="+" />
              </span>
              <span>coachs experts</span>
            </div>
            <div>
              <span>
                <NumberCounter end={978} start={800} delay="4" preFix="+" />
              </span>
              <span>membres</span>
            </div>
            <div>
              <span>
                <NumberCounter end={50} start={0} delay="4" preFix="+" />
              </span>
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

          <motion.div
            initial={{ right: "-1rem" }}
            transition={transition}
            whileInView={{ right: "4rem" }}
            className="heart-rate"
          >
            <img src={Heart} alt="" />
            <span>Rythme Cardiaque</span>
            <span>116 bpm</span>
          </motion.div>

          {/* hero images */}
          <img src={hero_image} alt="" className="hero-image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "20rem" }}
            transition={transition}
            src={hero_image_back}
            alt=""
            className="hero-image-back"
          />
          {/* calories */}
          <motion.div
            className="calories"
            initial={{ right: "37rem" }}
            transition={transition}
            whileInView={{ right: "28rem" }}
          >
            <img src={calories} alt="" />
            <div>
              <span>Calories Brulées</span>
              <span>220 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
}

export default Hero;
