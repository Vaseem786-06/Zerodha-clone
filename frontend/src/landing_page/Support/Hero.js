import React from "react";
function Hero() {
  return (
    <section
      className="container-fulid border-bottom mb-5 py-4"
      
      id="supportHero"
    >
      <div
        className="d-flex justify-content-between align-items-center pt-4 pb-3"
        id="supportWrapper"
      >
        <h4>Support Portal</h4>
        <a href=" " id="Trackticket">
          Track Tickets
        </a>
        {/* <div className="col-6"></div> */}
      </div>
      <div className="row p-2 mb-5 fs-6 mx-5">
        <div className="col-6 p-2 mb-5">
          <h1>Search for an answer or browse help topics to create a ticket</h1>
          <input placeholder="Eg.how do I activate F&O,Why order are getting rejected"></input>
          <br />
          <div className="text-decoration-underline">
            <a herf=" ">Track account opening</a>
            <br />
            <a herf=" ">Track segment activation</a>
            <br />
            <a herf=" ">Intraday margins</a>
            <br />
            <a herf=" ">Kite user manual</a>
            <br />
            <a herf=" ">Learn how to create a ticket</a>
            <br />
          </div>
        </div>
        <div className="col-6 p-2 mb-5">
          <h1>Featured</h1>
          <div className="text-decoration-underline">
            <ol>
              <li><a herf=" ">Current Takeovers and Delisting - jaunary2024</a>
              <br /></li>
              <li><a herf=" ">lastest intraday leverages - MIS & CO</a>
              <br /></li>

            </ol>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
