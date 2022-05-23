// import { useState } from "react";

export const Cart = ({ cartDate, data }) => {
  console.log(data);

  return (
    <div className="cart-div-main">
      <div>
        <div className="first-div-cart">
          <p>{cartDate}</p>
          <img className="arrow-ico" src={data.img1} alt="amazon logo" />
        </div>
        <div className="case-study">Case Study</div>
        <h1>Amazon Gift</h1>
        <h1>Pay</h1>
        <h3>Desktop - Mobile</h3>
        <img
          className="arrow-icon"
          // src="./images/right-arrow.JPG"
          //  src="./images/right-arrow.JPG"
          src={data.img2}
          alt="right arrow"
        />
      </div>

      {/* <img className="arrow-icon" src="https://thumbs.dreamstime.com/b/right-arrow-vector-icon-black-symbol-navigation-163301987.jpg" alt="right arrow" /> */}

      {/* <img
          className="arrow-ico"
          src="./images/apple-logo.JPG"
          alt="right arrow"
        /> */}

      {/* <h3>MacOS - Mobile</h3> */}
    </div>
  );
};
