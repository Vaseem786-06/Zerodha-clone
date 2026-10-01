import React from 'react';
function OpenAccount() {
    return (
        <div className="container p-5 mb-5">
      <div className="row text-center">
        
        <h2 className="mt-5">Open a Zerodha account</h2>
        <p className="mt-3 text-muted">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <div>
          <button
            className="p-2 btn btn-primary d-block mx-auto mt-3"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>{" "}
        </div>
        <div class="col"></div>
      </div>
    </div>
    );
}

export default OpenAccount;