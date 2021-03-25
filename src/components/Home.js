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
      <div className="home__row">
        <Product
          id="121213"
          title="The Lean Startup: How Constant Innovation Creative"
          price={19.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="12126"
          title="The Lean Startup: How Constant Innovation Creative"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121243"
          title="Samsung LCUEYEUEHEES 49' Curved LED Gaming Monitor"
          price={198.96}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="121203"
          title="Amazon Echo 3rd Generation"
          price={11.96}
          rating={5}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
        <Product
          id="121213"
          title="The Lean Startup: How Constant Innovation Creative"
          price={11.96}
          rating={2}
          image="https://images-eu.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="121243"
          title="The Lean Startup: How Constant Innovation Creative"
          price={11.96}
          rating={3}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?%24300x400_retinamobilex2%24"
        />
      </div>
    </div>
  );
}

export default Home;
