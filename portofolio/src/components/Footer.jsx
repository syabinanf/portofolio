import Container from 'react-bootstrap/Container';

export default function Footer() {
  return (
    <footer className="bg-transparent py-3 mt-auto">
      <Container>
        <p style={{ color:'#ffc1cc', fontWeight: 'bold', fontSize: '18px' }} className="text-center mb-0">&copy; 2025 My Portfolio. All rights reserved.</p>
      </Container>
    </footer>
  );
}
