import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { TextEffectOne } from 'react-text-animate';
import { ui, programming, grapic } from '../const/pro';

// --- Anda bisa menggunakan file CSS terpisah (direkomendasikan) ---
// import './About.css';

// Atau, gunakan objek styling di dalam komponen
const styles = {
  section: {
    padding: '60px 20px', // Gunakan padding horizontal yang lebih responsif
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  projectContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
    flexWrap: 'wrap',
    color: '#ffc1cc',
    minHeight: '400px',
    width: '100%', // Pastikan container memenuhi lebar penuh
  },
  projectCard: {
    display: 'flex',
    flexDirection: 'row', // Default: tata letak mendatar untuk layar besar
    alignItems: 'center',
    gap: '20px',
    flexWrap: 'wrap', // Izinkan wrapping jika konten tidak muat
    maxWidth: '1200px', // Batasi lebar maksimum untuk desktop
    padding: '0 10px',
  },
  cardImage: {
    width: '100%', // Lebar gambar 100% dari container
    maxWidth: '480px', // Batasi lebar maksimum
    height: 'auto', // Tinggi menyesuaikan secara proporsional
    borderRadius: '8px',
  },
  cardContent: {
    textAlign: 'left',
    flex: '1', // Memungkinkan konten mengisi ruang yang tersedia
    minWidth: '300px', // Batasi lebar minimum untuk menghindari terlalu sempit
  },
  tagButton: {
    margin: '5px 10px 5px 0',
    border: '1px solid white',
    color: 'white',
    opacity: 0.5,
    fontSize: '15px',
    whiteSpace: 'nowrap', // Hindari tag pecah baris
  },
  pagination: {
    '& .MuiPaginationItem-root': { color: 'white', borderColor: 'white' },
    '& .Mui-selected': { backgroundColor: 'white', color: '#121212' },
  },
  heading: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: '35px',
    padding: '40px 0',
  },
};

// Menggunakan media queries untuk tata letak handphone
const mobileStyles = {
  projectCard: {
    flexDirection: 'column', // Tata letak vertikal untuk layar kecil
    alignItems: 'center',
  },
  cardImage: {
    maxWidth: '100%', // Gambar selalu 100% di layar kecil
    height: 'auto',
  },
};

export default function About() {
  const itemsPerPage = 1;

  const [pageUI, setPageUI] = useState(1);
  const [pageProg, setPageProg] = useState(1);
  const [pageGraphic, setPageGraphic] = useState(1);

  const handleChangeUI = (event, value) => setPageUI(value);
  const handleChangeProg = (event, value) => setPageProg(value);
  const handleChangeGraphic = (event, value) => setPageGraphic(value);

  const getCurrentItem = (list, page) => list[(page - 1) * itemsPerPage] || {};

  // Gunakan state untuk mendeteksi apakah layar adalah mobile
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Efek untuk mendeteksi perubahan ukuran layar
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const renderProjectCard = (item) => {
    // Gabungkan styling default dan mobile
    const currentCardStyle = isMobile ? { ...styles.projectCard, ...mobileStyles.projectCard } : styles.projectCard;
    const currentImageStyle = isMobile ? { ...styles.cardImage, ...mobileStyles.cardImage } : styles.cardImage;

    return (
      <div style={currentCardStyle}>
        <img
          src={item.img}
          alt={item.title}
          style={currentImageStyle}
        />
        <div style={styles.cardContent}>
          <h3 style={{ fontWeight: 'bold' }}>{item.title}</h3>
          <div style={{ margin: '10px 0', display: 'flex', flexWrap: 'wrap' }}>
            {(item.tag || []).map((tag, i) => (
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
          <p>{item.desc}</p>
          <div style={{ marginTop: '20px' }}>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outlined" style={{ fontSize: '18px', padding: '15px 30px', color: '#F2827F' }}>
                  View Project
                </Button>
              </a>
            ) : (
              <Button variant="contained" disabled style={{ opacity: 0.5, padding: '15px 30px' }}>
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
      <TextEffectOne
        text="UI/UX Projects"
        style={styles.heading}
      />
      <div style={styles.projectContainer}>
        {renderProjectCard(getCurrentItem(ui, pageUI))}
      </div>
      <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(ui.length / itemsPerPage)}
          page={pageUI}
          onChange={handleChangeUI}
          variant="outlined"
          sx={styles.pagination}
        />
      </Stack>

      {/* Programming Section */}
      <TextEffectOne
        text="Programming Projects"
        style={styles.heading}
      />
      <div style={styles.projectContainer}>
        {renderProjectCard(getCurrentItem(programming, pageProg))}
      </div>
      <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(programming.length / itemsPerPage)}
          page={pageProg}
          onChange={handleChangeProg}
          variant="outlined"
          sx={styles.pagination}
        />
      </Stack>

      {/* Graphic Design Section */}
      <TextEffectOne
        text="Graphic Design Projects"
        style={styles.heading}
      />
      <div style={styles.projectContainer}>
        {renderProjectCard(getCurrentItem(grapic, pageGraphic))}
      </div>
      <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(grapic.length / itemsPerPage)}
          page={pageGraphic}
          onChange={handleChangeGraphic}
          variant="outlined"
          sx={styles.pagination}
        />
      </Stack>
    </section>
  );
}