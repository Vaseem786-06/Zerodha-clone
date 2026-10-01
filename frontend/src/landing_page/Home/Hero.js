import React from "react";
function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Hero Image"
          className="mb-5"
        ></img>
        <h1 className="mt-5">Invest in everything</h1>
        <p>Online plathform to invest in stocks,mutual funds,and more</p>
        <div>
          <button
            className="p-2 btn btn-primary d-block mx-auto"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Signup now
          </button>{" "}
        </div>
        <div class="col"></div>
      </div>
    </div>
  );
}

export default Hero;
