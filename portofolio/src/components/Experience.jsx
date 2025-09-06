import React, { useState, useEffect } from 'react';
import { TextEffectOne } from 'react-text-animate';
import { experienced, organizational } from '../const/exp';

export default function Experience() {
  // Menggunakan state untuk mendeteksi apakah layar adalah mobile
  const [isMobile, setIsMobile] = useState(false);

  // Efek untuk mendeteksi perubahan ukuran layar
  useEffect(() => {
    const handleResize = () => {
      // Menentukan breakpoint untuk mode mobile (misal: 768px)
      setIsMobile(window.innerWidth <= 768);
    };

    // Panggil sekali saat komponen dimuat
    handleResize();

    // Tambahkan event listener untuk memantau perubahan ukuran layar
    window.addEventListener('resize', handleResize);

    // Hapus event listener saat komponen dilepas
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contentStyle = {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '30px',
    color: 'white',
    justifyContent: 'center',
    // Mengubah flex-direction secara dinamis
    flexDirection: isMobile ? 'column' : 'row',
    flexWrap: isMobile ? 'wrap' : 'nowrap',
    marginBottom: '60px',
    // Mengatur lebar maksimum untuk tata letak yang rapi di desktop
    maxWidth: '1200px',
    margin: '0 auto 60px auto',
    padding: '0 20px',
  };

  const imageStyle = {
    // Mengubah width gambar menjadi 100% dari container
    width: isMobile ? '100%' : '480px',
    // Mengubah height menjadi 'auto' agar proporsional
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
    // Batasi lebar maksimum gambar
    maxWidth: '480px',
  };

  const textContainerStyle = {
    // Memungkinkan text container mengisi ruang yang tersedia
    flex: 1,
    textAlign: 'left',
    color: '#ffc1cc',
    // Mengatur lebar minimum untuk menghindari terlalu sempit
    minWidth: '300px',
  };

  const renderExperience = (data) => (
    data.map((exp, index) => (
      <div key={index} style={contentStyle}>
        <img src={exp.img} alt={exp.title} style={imageStyle} />
        <div style={textContainerStyle}>
          <h3 style={{ fontWeight: 'bold' }}>{exp.title}</h3>
          <p>{exp.desc}</p>
        </div>
      </div>
    ))
  );

  return (
    <section style={{ padding: '60px 20px', textAlign: 'center' }}>
      <TextEffectOne
        text="Work Experience"
        style={{
          color: '#e75480',
          fontWeight: 'bold',
          fontSize: '30px',
          paddingBottom: '40px',
        }}
      />
      {renderExperience(experienced)}

      <TextEffectOne
        text="Organizational Experience"
        style={{
          color: '#e75480',
          fontWeight: 'bold',
          fontSize: '30px',
          padding: '80px 0 40px 0',
        }}
      />
      {renderExperience(organizational)}
    </section>
  );
}