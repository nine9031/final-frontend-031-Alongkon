import React from "react";
import me from "../assets/images/S24.png";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About US</h1>
      </div>
      <div className="row">
        {/** About me */}
        <div className="col">
          <div className="about-info">
            <h3>Samsung Galaxy S24 Ultra</h3>
            <p>
              เป็นสมาร์ทโฟนระดับเรือธงจาก Samsung
              ที่มาพร้อมฟีเจอร์สุดล้ำและประสิทธิภาพที่เหนือชั้น
              เหมาะสำหรับผู้ที่ต้องการประสบการณ์การใช้งานที่ดีที่สุดในทุกด้าน
              ตั้งแต่การถ่ายภาพที่ยอดเยี่ยมจนถึงประสิทธิภาพการทำงานที่ราบรื่น
              พร้อมดีไซน์ที่สวยงามและทันสมัย
            </p>
          </div>
        </div>

        <div className="featured-image">
          <div className="image">
            <img src={me} alt="me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
