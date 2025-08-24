import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

import { TextEffectOne } from 'react-text-animate';
import { itemData } from '../const/cer'; // Pastikan path dan isi itemData benar

export default function StandardImageList() {
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
          width: 900,
          margin: '0 auto',
          color: 'white',
        }}
        cols={3}
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
            />
          </ImageListItem>
        ))}
      </ImageList>
    </section>
  );
}
