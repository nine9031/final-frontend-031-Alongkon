import React from "react";
import me from "../assets/images/S24.png";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>PHOMETABSHOP</span>
        </div>
        <div className="featured-name">
          <span className="typedText"></span>
        </div>
        <div className="featured-text-info">
          <p>
            is a one-stop online shop for smartphones and tablets, offering a
            convenient and valuable shopping experience for all customers.
            Whether you're looking for a device for everyday use or one with
            advanced technology for work, our website is ready to serve you
            anytime!
          </p>
          <br></br>
          <div className="form-button">
            <button className="btn">
              Shop Now <i className="uil uil-message alt"></i>
            </button>
          </div>
        </div>

        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/1st_firsttttt/"></a>
            <i className="uil uil-instagram"></i>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/siwakorn.kleebmek"></a>
            <i className="uil uil-facebook"></i>
          </div>
          <div className="icon">
            <a href="https://github.com/028Siwakorn"></a>
            <i className="uil uil-github-alt"></i>
          </div>
        </div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={me} alt="me" />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBox;
