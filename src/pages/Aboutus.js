import React from "react";
import Footer from "../components/Footer/Footer";

export default function Aboutus() {
  return (
    <section className="aboutUs">
      <div className="aboutus__content">
        <h1 className="text-center mtb2">About Us</h1>
        <p>
          <q>
            At Tablespoon we aspire to satisfy your taste buds with the most
            exotic and flavourful spices, blended to perfection
          </q>
        </p>
        <p className="text-right">-Sneha Venkatesh</p>
        <div className="aboutUs__productDescription">
          <ul className="mtb2">
            <li>
              We hand pick the premium quality raw ingredients to maintain
              exceptional quality
            </li>
            <li>
              These ingredients are then roasted, grinded and blended to
              perfection
            </li>
            <li>
              These exotic blends are packed in a PET Jar to retain maximum
              flavour and aroma
            </li>
          </ul>
          <img
            src="http://www.tablespoonfoods.com/images/about_us_1.png"
            alt="about-us"
          />
        </div>
      </div>
      <h1 className="text-center mtb2">Our Team</h1>
      <div className="aboutus__team">
        <div className="mb2">
          <img
            src="http://www.tablespoonfoods.com/images/sneha.png"
            alt="sneha.png"
          />
          <p className="mb2">Sneha Venkatesh</p>
          <ul>
            <li>MBA from S.P. Jain</li>
            <li>
              Prior Experience with Patni Computers & Small scale packaging
              company
            </li>
            <li>e-mail: sneha@tablespoonfoods.com</li>
          </ul>
        </div>
        <div className="mb2">
          <img
            src="http://www.tablespoonfoods.com/images/sivaraman.png"
            alt="sivaraman"
            style={{ borderRadius: "5px" }}
          />
          <p className="mb2">V Sivaraman</p>
          <ul>
            <li>Retired as Senior Vice President from Axis Bank</li>
            <li>Avid Marathon Runner</li>
            <li>e-mail: sivaraman@tablespoonfoods.com</li>
          </ul>
        </div>
      </div>
      <Footer />
    </section>
  );
}
