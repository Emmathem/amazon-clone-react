import React from "react";
import "../assets/css/Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="banner"
      />

      <Product
        id="121213"
        title="The Lean Startup: How Constant Innovation Creative"
        price={11.96}
        rating={5}
        images="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
      />
    </div>
  );
}

export default Home;
