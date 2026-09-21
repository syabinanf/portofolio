import { useEffect, useState } from 'react';

export default function PhotoSlider({ photos, title }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const multiple = photos.length > 1;
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (!multiple || paused || hovered || focused || reducedMotion) return;
    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((current) => (current + 1) % photos.length);
    }, 4000);
    return () => window.clearInterval(timer);
  }, [multiple, paused, hovered, focused, reducedMotion, photos.length]);
  const move = (next) => { setIndex((next + photos.length) % photos.length); setPaused(true); };
  return (
    <div className="photo-slider" role="region" aria-label={`Photos: ${title}`}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      <div className="photo-slider-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {photos.map((photo, position) => <img key={photo.src} src={photo.src} alt={photo.alt} aria-hidden={position !== index} loading="lazy" />)}
      </div>
      {multiple && <div className="photo-slider-controls">
        <button type="button" aria-label="Previous photo" onClick={() => move(index - 1)}>←</button>
        <span>{index + 1} / {photos.length}</span>
        <button type="button" aria-label="Next photo" onClick={() => move(index + 1)}>→</button>
        {!reducedMotion && <button type="button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play slideshow' : 'Pause slideshow'}>{paused ? 'Play' : 'Pause'}</button>}
      </div>}
    </div>
  );
}