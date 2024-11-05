import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top-footer">
        <p>PHOMETABSHOP .</p>
      </div>
      <div className="middle-footer">
        <div className="footer-menu">
          <div className="footer_menu_list">
            <a href="#home">Home</a>
            <a href="#About">About</a>
            <a href="#Project">Popular</a>
            <a href="#Contact">Review</a>
          </div>
        </div>
      </div>
      <div className="footer-social-icons">
        <div className="icon">
          <a href="https://www.instagram.com/1st_firsttttt/">
            <i className="uil uil-instagram"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/siwakorn.kleebmek">
            <i className="uil uil-facebook"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/028Siwakorn">
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        Copyright &copy;{" "}
        <a href="#home" style={{ textDecoration: "none" }}>
          Alongkon
        </a>{" "}
        All Right Reserved
      </div>
    </footer>
  );
};

export default Footer;
