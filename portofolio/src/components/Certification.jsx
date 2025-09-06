import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useMediaQuery, useTheme } from '@mui/material';

import { TextEffectOne } from 'react-text-animate';
import { itemData } from '../const/cer'; // Pastikan path dan isi itemData benar

export default function StandardImageList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  // Menentukan jumlah kolom berdasarkan lebar layar
  const getCols = () => {
    if (isMobile) {
      return 1; // 1 kolom untuk handphone
    }
    if (isTablet) {
      return 2; // 2 kolom untuk tablet
    }
    return 3; // 3 kolom untuk laptop/desktop
  };

  // Menentukan lebar image list berdasarkan layar
  const getWidth = () => {
    if (isMobile) {
      return '100%';
    }
    return 900; // Lebar tetap 900px untuk layar besar
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
          color: '#e75480',
          fontWeight: 'bold',
          fontSize: '30px',
          paddingBottom: '40px',
        }}
      />

      <ImageList
        sx={{
          // Gunakan '100%' untuk membuat ImageList responsif
          width: isMobile ? '100%' : 900,
          margin: '0 auto',
          color: 'white',
          // Menyesuaikan tinggi agar tidak ada overflow
          overflow: 'hidden',
        }}
        // Menggunakan fungsi getCols() untuk props `cols`
        cols={getCols()}
        gap={16}
      >
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              style={{
                borderRadius: '8px',
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
            <ImageListItemBar
              title={item.title}
              position="below"
              sx={{
                // Menyesuaikan ukuran font dan padding pada ImageListItemBar untuk mobile
                fontSize: isMobile ? '0.8rem' : '1rem',
                padding: isMobile ? '4px' : '8px',
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}