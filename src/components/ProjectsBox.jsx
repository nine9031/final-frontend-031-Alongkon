import React from "react";

const ProjectsBox = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>Popular</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Samsung Galaxy S24 Ultra</h3>
          <label>฿35,500</label>
          <div className="form-button">
            <button className="btn">
              BUY <i className="uil uil-message alt"></i>
            </button>
          </div>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>iPhone 16 Pro Max</h3>
          <label>฿48,900</label>
          <div className="form-button">
            <button className="btn">
              BUY <i className="uil uil-message alt"></i>
            </button>
          </div>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Galaxy Tab S9 FE+</h3>
          <label>฿19,990</label>
          <div className="form-button">
            <button className="btn">
              BUY <i className="uil uil-message alt"></i>
            </button>
          </div>
        </div>
        <div className="project-box">
          <i className="uil uil-briefcase-alt"></i>
          <h3>Samsung Galaxy Tab S9FE 5G</h3>
          <label>฿16,990</label>
          <div className="form-button">
            <button className="btn">
              BUY <i className="uil uil-message alt"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsBox;
