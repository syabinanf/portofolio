import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { TextEffectOne } from 'react-text-animate';
import { ui, programming } from '../const/pro';

const styles = {
  section: {
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  heading: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '35px',
    padding: '40px 0',
  },

  // GRID CARD
  projectContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px',
    justifyItems: 'center',
    padding: '20px 0',
  },

  // SINGLE CARD
  cardBox: {
    width: '100%',
    maxWidth: '350px',
    backgroundColor: '#FEFCFC10',
    borderRadius: '18px',
    padding: '20px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    display: 'flex',
    flexDirection: 'column',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255,255,255,0.1)',
    transition: 'all 0.25s ease',
  },

  // Hover (ditambahkan lewat inline)
  cardHover: {
    transform: 'translateY(-5px)',
    boxShadow: '0 8px 25px rgba(0,0,0,0.25)',
  },

  // Gambar
  cardImageTop: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '15px',
  },

  // Konten di bawah gambar
  cardContentBox: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    textAlign: 'left',
  },

  tagButton: {
    margin: '5px 10px 5px 0',
    border: '1px solid white',
    color: 'white',
    opacity: 0.6,
    fontSize: '13px',
    padding: '2px 10px',
  },
};

export default function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [hoverIndex, setHoverIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderProjectCard = (item, index) => {
    return (
      <div
        key={item.title}
        style={{
          ...styles.cardBox,
          ...(hoverIndex === index ? styles.cardHover : {}),
        }}
        onMouseEnter={() => setHoverIndex(index)}
        onMouseLeave={() => setHoverIndex(null)}
      >
        {/* Gambar */}
        <img
          src={item.img}
          alt={item.title}
          style={styles.cardImageTop}
        />

        {/* Konten */}
        <div style={styles.cardContentBox}>
          <h3 style={{ fontWeight: 'bold', color: 'white', fontSize: '18px' }}>
            {item.title}
          </h3>

          {/* Tag */}
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {(item?.tag || []).map((tag, i) => (
              <Button
                key={i}
                variant="outlined"
                disabled
                style={styles.tagButton}
              >
                {tag}
              </Button>
            ))}
          </div>

          {/* Deskripsi */}
          <p style={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
            {item.desc}
          </p>

          {/* Tombol */}
          <div style={{ marginTop: '10px' }}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outlined"
                  style={{
                    fontSize: '14px',
                    padding: '10px 20px',
                    color: '#F2827F',
                  }}
                >
                  View Project
                </Button>
              </a>
            ) : (
              <Button
                variant="contained"
                disabled
                style={{ opacity: 0.5, padding: '10px 20px' }}
              >
                Coming Soon
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section style={styles.section}>
      
      {/* UI/UX Section */}
      <TextEffectOne text="UI/UX and Graphic Design Projects" style={styles.heading} />
      <div style={styles.projectContainer}>
        {ui.map((item, i) => renderProjectCard(item, i))}
      </div>

      {/* Programming Section */}
      <TextEffectOne text="Programming Projects" style={styles.heading} />
      <div style={styles.projectContainer}>
        {programming.map((item, i) => renderProjectCard(item, i))}
      </div>

    </section>
  );
}
