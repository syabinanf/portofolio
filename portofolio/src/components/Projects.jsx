import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import { TextEffectOne } from 'react-text-animate';
import { ui, programming, grapic } from '../const/pro';

export default function About() {
  const itemsPerPage = 1;

  const [pageUI, setPageUI] = useState(1);
  const [pageProg, setPageProg] = useState(1);
  const [pageGraphic, setPageGraphic] = useState(1);

  const handleChangeUI = (event, value) => setPageUI(value);
  const handleChangeProg = (event, value) => setPageProg(value);
  const handleChangeGraphic = (event, value) => setPageGraphic(value);

  const getCurrentItem = (list, page) => list[(page - 1) * itemsPerPage] || {};

  const renderProjectCard = (item) => (
    <>
      <img
        src={item.img}
        alt={item.title}
        style={{ width: '480px', height: '290px', borderRadius: '8px' }}
      />
      <div style={{ maxWidth: '480px', textAlign: 'left' }}>
        <h3 style={{ fontWeight: 'bold' }}>{item.title}</h3>
        <div style={{ margin: '10px 0', display: 'flex', flexWrap: 'wrap' }}>
          {(item.tag || []).map((tag, i) => (
            <Button
              key={i}
              variant="outlined"
              disabled
              style={{
                margin: '5px 10px 5px 0',
                border: '1px solid white',
                color: 'white',
                opacity: 0.5,
                fontSize: '15px',
              }}
            >
              {tag}
            </Button>
          ))}
        </div>
        <p>{item.desc}</p>
        <div style={{ marginTop: '20px' }}>
          {item.link ? (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <Button variant="outlined" style={{ fontSize: '18px', padding: '15px 30px' , color: '#F2827F'}}>
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
    </>
  );

  return (
    <section style={{ padding: '60px 0px', flexWrap: 'wrap' }}>
      {/* UI/UX Section */}
      <TextEffectOne
        text="UI/UX Projects"
        style={{ textAlign: 'center', color: '#e75480', fontWeight: 'bold', fontSize: '35px', padding: '40px', paddingTop:'20px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', color: '#ffc1cc', minHeight: '400px', }}>
        {renderProjectCard(getCurrentItem(ui, pageUI))}
      </div>
      <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(ui.length / itemsPerPage)}
          page={pageUI}
          onChange={handleChangeUI}
          variant="outlined"
          sx={{
            '& .MuiPaginationItem-root': { color: 'white', borderColor: 'white' },
            '& .Mui-selected': { backgroundColor: 'white', color: '#121212' },
          }}
        />
      </Stack>

      {/* Programming Section */}
      <TextEffectOne
        text="Programming Projects"
        style={{ textAlign: 'center', color: '#e75480', fontWeight: 'bold', fontSize: '35px', padding: '80px 40px 40px' , paddingTop:'130px'}}
      />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', color: '#ffc1cc', minHeight: '400px', }}>
        {renderProjectCard(getCurrentItem(programming, pageProg))}
      </div>
      <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(programming.length / itemsPerPage)}
          page={pageProg}
          onChange={handleChangeProg}
          variant="outlined"
          sx={{
            '& .MuiPaginationItem-root': { color: 'white', borderColor: 'white' },
            '& .Mui-selected': { backgroundColor: 'white', color: '#121212' },
          }}
        />
      </Stack>

      {/* Graphic Design Section */}
      <TextEffectOne
        text="Graphic Design Projects"
        style={{ textAlign: 'center',  color: '#e75480', fontWeight: 'bold', fontSize: '35px', padding: '80px 40px 40px', paddingTop:'130px' }}
      />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap', color: '#ffc1cc', minHeight: '400px' }}>
        {renderProjectCard(getCurrentItem(grapic, pageGraphic))}
      </div>
      <Stack spacing={2} alignItems="center" sx={{ mt: 4 }}>
        <Pagination
          count={Math.ceil(grapic.length / itemsPerPage)}
          page={pageGraphic}
          onChange={handleChangeGraphic}
          variant="outlined"
          sx={{
            '& .MuiPaginationItem-root': { color: 'white', borderColor: 'white' },
            '& .Mui-selected': { backgroundColor: 'white', color: '#121212' },
          }}
        />
      </Stack>
    </section>
  );
}
