import React from "react";
import "./HomePage.css"

import { Navbar } from "../../components";
import { IoMdArrowDropright } from "react-icons/io";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div id="homepage-container">
  <section id="homepage-banner">
    <div id="banner-title">
      <h1>FROXYERA</h1>
      <h2>Photographer</h2>
    </div>
  </section>

  <section id="product-showcase">
    <div id="product-showcase-grid">
      <div>
        <img
          src="https://static.wixstatic.com/media/8c0806_0fcc1bbca4b34548bbeeef30d9634cda~mv2_d_5580_3720_s_4_2.jpg/v1/fill/w_451,h_438,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c0806_0fcc1bbca4b34548bbeeef30d9634cda~mv2_d_5580_3720_s_4_2.jpg"
          alt="Landscape"
        />
        <caption>
          Landscape
          <p>
            <a href="/portfolio">SEE MORE</a>
          </p>
        </caption>
      </div>

      <div>
        <img
          src="https://static.wixstatic.com/media/8c0806_f4d9a4649c584ab895242bd21ad16905~mv2_d_3597_5396_s_4_2.jpg/v1/fill/w_450,h_610,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c0806_f4d9a4649c584ab895242bd21ad16905~mv2_d_3597_5396_s_4_2.jpg"
          alt="Portrait"
        />
        <caption>
          Portrait
          <p>
            <a href="/portfolio">SEE MORE</a>
          </p>
        </caption>
      </div>

      <div>
        <img
          src="https://static.wixstatic.com/media/8c0806_3eff47402a524f1f8cb6fd10471e39c7~mv2_d_3517_5275_s_4_2.jpg/v1/fill/w_502,h_584,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c0806_3eff47402a524f1f8cb6fd10471e39c7~mv2_d_3517_5275_s_4_2.jpg"
          alt="Randoms"
        />
        <caption>
          Randoms
          <p>
            <a href="/portfolio">SEE MORE</a>
          </p>
        </caption>
      </div>

      <div>
        <img
          src="https://static.wixstatic.com/media/8c0806_49791819ebb249fd9e6af1fb480185f1~mv2_d_2333_3111_s_2.jpg/v1/fill/w_308,h_325,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8c0806_49791819ebb249fd9e6af1fb480185f1~mv2_d_2333_3111_s_2.jpg"
          alt="Aesthetic"
        />
        <caption>
          Aesthetic
          <p>
            <a href="/portfolio">SEE MORE</a>
          </p>
        </caption>
      </div>
    </div>

    <a href="/portfolio" className="portfolio-link">
      My Portfolio
      <IoMdArrowDropright className="icon"/>
    </a>
  </section>
</div>

    </>
  );
};

export default HomePage;
