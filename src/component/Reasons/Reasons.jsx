import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <di className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </di>
      <div className="right-r">
        <div>
          <span className="stroke-text">pourquoi</span>
          <span> nous ?</span>
        </div>

        <div className="details-r">
          <div>
            <img src={tick} alt=""></img>
            <span>+ DE 400 COACHS EXPERTS</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>ENTRAINEZ-VOUS INTELLIGEMENT ET EFFICACEMENT</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 PROGRAMME GRATOS POUR LES NOUVEAUX MEMBRES</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RAMENE TES POTES</span>
          </div>
        </div>
        <span className="stan">NOS PARTENAIRES</span>

        <div className="partners">
          <img src={nb} alt="" />
          <img src={nike} alt="" />
          <img src={adidas} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
