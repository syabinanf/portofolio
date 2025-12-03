import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
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
    fontSize: '32px',
    margin: '40px 0 20px 0',
  },

  projectContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '30px',
    width: '100%',
    maxWidth: '1200px',
    justifyItems: 'center',
    padding: '10px 0 40px 0',
  },

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

  cardHover: {
    transform: 'translateY(-6px)',
    boxShadow: '0 8px 28px rgba(0,0,0,0.25)',
  },

  cardImageTop: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '12px',
    marginBottom: '15px',
  },

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

export default function Projects() {
  const [hoverIndex, setHoverIndex] = useState(null);

  const renderProjectCard = (item, index) => (
    <div
      key={item.title}
      style={{
        ...styles.cardBox,
        ...(hoverIndex === index ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setHoverIndex(index)}
      onMouseLeave={() => setHoverIndex(null)}
    >
      <img src={item.img} alt={item.title} style={styles.cardImageTop} />

      <div style={styles.cardContentBox}>
        <h3 style={{ fontWeight: 'bold', color: 'white', fontSize: '18px' }}>
          {item.title}
        </h3>

        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {(item?.tag || []).map((tag, i) => (
            <Button key={i} variant="outlined" disabled style={styles.tagButton}>
              {tag}
            </Button>
          ))}
        </div>

        <p style={{ color: 'white', opacity: 0.8, fontSize: '14px' }}>
          {item.desc}
        </p>

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
            <Button variant="contained" disabled style={{ opacity: 0.5 }}>
              Coming Soon
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section style={styles.section}>

      {/* UI/UX SECTION */}
      <h2 style={styles.heading}>UI/UX and Graphic Design Projects</h2>
      <div style={styles.projectContainer}>
        {ui.map((item, i) => renderProjectCard(item, i))}
      </div>

      {/* PROGRAMMING SECTION */}
      <h2 style={styles.heading}>Programming Projects</h2>
      <div style={styles.projectContainer}>
        {programming.map((item, i) => renderProjectCard(item, i))}
      </div>

    </section>
  );
}
