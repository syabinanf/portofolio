import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { experienced, organizational } from '../const/exp';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Experience() {

  const [isMobile, setIsMobile] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 30000,
    pauseOnHover: false,
    arrows: false,
    speed: 700,
    adaptiveHeight: true,
  };

  // =============================
  //  CARD LANDSCAPE STYLE
  // =============================

  const cardBox = {
    backgroundColor: "#ffffff10",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    gap: "20px",
    alignItems: "center",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "all 0.25s ease",
    maxWidth: "1000px",
    margin: "0 auto",
  };

  const cardHover = {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.25)",
  };

  const imageLandscape = {
    width: isMobile ? "100%" : "45%",
    height: "260px",
    objectFit: "cover",
    borderRadius: "14px",
  };

  const contentBox = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    textAlign: isMobile ? "center" : "left",
  };

  // =============================
  //   RENDER CAROUSEL LANDSCAPE
  // =============================

  const renderCarousel = (data) => (
    <Slider {...sliderSettings}>
      {data.map((exp, index) => (
        <div key={index}>
          <div
            style={{ 
              ...cardBox, 
              ...(hoverIndex === index ? cardHover : {}) 
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {/* Gambar kiri */}
            <img src={exp.img} alt={exp.title} style={imageLandscape} />

            {/* Konten kanan */}
            <div style={contentBox}>
              <h3 style={{ color: "white", fontWeight: "bold", fontSize: "22px" }}>
                {exp.title}
              </h3>
              <p style={{ color: "white", opacity: 0.8, lineHeight: "1.5" }}>
                {exp.desc}
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );

  // =============================

  return (
    <section style={{ padding: "60px 20px", textAlign: "center" }}>

      <h2 style={{
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: "30px",
        marginBottom: "40px",
      }}>
        Work Experience
      </h2>

      {renderCarousel(experienced)}

      <h2 style={{
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: "30px",
        margin: "80px 0 40px 0",
      }}>
        Organizational Experience
      </h2>

      {renderCarousel(organizational)}

    </section>
  );
}
