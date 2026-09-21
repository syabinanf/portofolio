import { jsPDF } from 'jspdf';
import { profile } from '../const/profile';
import { experienced, organizational } from '../const/exp';
import { curriculum } from '../const/curriculum';
import { programming } from '../const/pro';

// Standard PDF fonts and a single text column keep the document selectable
// and readable in document parsers. Normalize punctuation for Helvetica.
const plain = (text) => text.replace(/[‘’]/g, "'").replace(/[“”]/g, '"')
  .replace(/[–—‑]/g, '-').replace(/\s+/g, ' ').trim();

export function createCv() {
  const doc = new jsPDF({ unit: 'mm', format: 'a4' });
  const margin = 16;
  const width = 178;
  const bottom = 281;
  let y = 16;
  doc.setProperties({ title: `${profile.name} - Curriculum Vitae`, author: profile.name });
  doc.setTextColor(0);

  const reserve = (height) => {
    if (y + height > bottom) { doc.addPage(); y = margin; }
  };
  const text = (value, { bold = false, italic = false, size = 11, indent = 0, gap = 0.4, center = false } = {}) => {
    doc.setFont('helvetica', bold ? 'bold' : italic ? 'italic' : 'normal');
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(plain(value), width - indent);
    const lineHeight = size * 0.3528 * 1.16;
    for (const line of lines) {
      reserve(lineHeight);
      doc.text(line, center ? 105 : margin + indent, y + lineHeight * 0.8, { align: center ? 'center' : 'left' });
      y += lineHeight;
    }
    y += gap;
  };
  const section = (label) => {
    reserve(30);
    y += 4;
    text(label, { bold: true, size: 11, gap: 1.5 });
    doc.setDrawColor(0);
    doc.setLineWidth(0.2);
    doc.line(margin, y, margin + width, y);
    y += 2;
  };
  const bullet = (value) => {
    reserve(10);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.text('•', margin, y + 3.6);
    text(value, { indent: 5 });
  };
  const dated = (label, date = '') => {
    reserve(20);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    const dateWidth = doc.getTextWidth(date);
    doc.setFont('helvetica', 'bold');
    const fits = doc.getTextWidth(plain(label)) + dateWidth + 5 <= width;
    const start = y;
    text(label, { bold: true });
    if (date && fits) {
      doc.setFont('helvetica', 'normal');
      doc.text(date, margin + width, start + 3.6, { align: 'right' });
    } else if (date) text(date);
  };
  const entry = (item) => {
    reserve(30);
    text(item.title.replace(/\|\|/g, '|'), { bold: true });
    if (item.role) text(item.role, { size: 9.5 });
    bullet(item.desc);
    y += 1;
  };

  text(profile.name.toUpperCase(), { bold: true, center: true });
  text(`${profile.email} | ${profile.phone} | ${profile.location}`, { center: true, size: 10 });
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  const links = [
    ['LinkedIn', profile.linkedin],
    ['Portfolio', 'https://portofolio-qteu.vercel.app/'],
    ['GitHub', profile.github],
  ];
  const separator = '  |  ';
  let linkX = 105 - doc.getTextWidth(links.map(([label]) => label).join(separator)) / 2;
  links.forEach(([label, url], index) => {
    doc.textWithLink(label, linkX, y + 3.6, { url });
    linkX += doc.getTextWidth(label);
    if (index < links.length - 1) {
      doc.text(separator, linkX, y + 3.6);
      linkX += doc.getTextWidth(separator);
    }
  });
  y += 5;

  section('SUMMARY');
  text(profile.summary);
  section('EDUCATION');
  dated(profile.education.institution, profile.education.dates);
  text(profile.education.degree, { italic: true });
  text(`GPA: ${profile.education.gpa}`);

  section('WORK EXPERIENCE');
  text('MAXY', { bold: true, size: 11 });
  text('IT Trainer & Curriculum Developer');
  bullet('Developed AI curricula and delivered role-based training for educators, public-sector staff, and business professionals. Projects and activities included:');
  experienced.filter((item) => item.employer === 'MAXY').forEach((item) => {
    const parts = item.title.split('||').map((part) => part.trim());
    const label = parts.length > 1 ? `${parts[1]} - ${parts[0]}` : item.title;
    bullet(`${label}: ${item.desc}`);
  });
  curriculum.forEach((item) => {
    bullet(`${item.title}: ${item.desc}`);
  });
  const legacyRoles = [
    { match: 'Coding Studio', company: 'Coding Studio (Part Time)', dates: 'August 2024 - Present', role: "IT Trainer for Children's Programming" },
    { match: 'Kemendikdas', company: 'Kodiokids x Kemendikdas (Freelance)', dates: 'June 2025 - November 2025', role: 'IT Trainer (Coding & Artificial Intelligence)' },
    { match: 'GOVOKASI', company: 'GOVOKASI x Videfly (Project Based Internship)', dates: 'September 2024 - October 2024', role: 'Web Developer' },
  ];
  legacyRoles.forEach((role) => {
    const item = experienced.find((experience) => experience.title.includes(role.match));
    if (!item) return;
    y += 4;
    dated(role.company, role.dates);
    text(role.role);
    bullet(item.desc);
  });

  section('LEADERSHIP & ORGANIZATIONAL EXPERIENCE');
  dated('SENIKO (Seminar Nasional Informatika dan Komputer)', 'November 2024');
  text('Writer & Presenter');
  bullet('Conducted research on machine learning and OCR for Android applications.');
  bullet('Published and presented a research paper on mobile-based digital namecard using CNN + OCR.');
  bullet('Developed and delivered a structured research presentation.');
  y += 4;
  dated('Paragon Corp', 'February 2024 - September 2024');
  text('Para Novo at Novo Club Batch 3');
  bullet(organizational.find((item) => item.title.includes('Novoclub')).desc);
  y += 4;
  dated('Student Executive Board (BEM) - Universitas Cendekia Abditama');
  dated('Head of Communication and Information Division', 'June 2022 - May 2023');
  bullet(organizational.find((item) => item.title.includes('BEM')).desc);
  y += 3;
  dated('Member of Communication and Information Division', 'January 2021 - June 2022');
  bullet('Created 20+ digital content materials, including infographics and promotional posts.');
  bullet('Used Canva, Figma, CapCut, and Adobe Photoshop for media production; managed content scheduling and distribution.');

  section('PRODUCT DEVELOPMENT PROJECTS');
  programming.forEach(entry);
  section('SKILLS');
  profile.skills.forEach(([label, value]) => bullet(`${label}: ${value}`));
  bullet('Languages: Indonesian (Native), English (Fluent).');
  return doc;
}

export function downloadCv() {
  createCv().save('CV_Syabina_Nur_Pajriyanti.pdf');
}