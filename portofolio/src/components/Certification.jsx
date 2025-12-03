import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { TextEffectOne } from 'react-text-animate';
import { itemData } from '../const/cer';

export default function CertificationCard() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Jumlah kolom berdasarkan ukuran layar
  const getCols = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  return (
    <section
      style={{
        padding: '60px 20px',
        textAlign: 'center',
      }}
    >
      <TextEffectOne
        text="Certification"
        style={{
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: '30px',
          paddingBottom: '40px',
        }}
      />

      {/* GRID CARD */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${getCols()}, 1fr)`,
          gap: '20px',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        {itemData.map((item, index) => (
          <div
            key={index}
            style={{
              background: '#1b1b1d',
              borderRadius: '12px',
              overflow: 'hidden',
              paddingBottom: '15px',
              boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.03)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0,0,0,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.4)';
            }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{
                width: '100%',
                height: '170px',
                objectFit: 'cover',
              }}
            />

            <h3
              style={{
                color: 'white',
                fontSize: isMobile ? '0.9rem' : '1rem',
                fontWeight: '600',
                padding: '10px 14px',
                textAlign: 'center',
              }}
            >
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
