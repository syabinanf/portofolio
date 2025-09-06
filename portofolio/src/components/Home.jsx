import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { TextEffectOne, TextEffectTwo } from 'react-text-animate';
import { icons } from "../assets/icons";
import { motion } from "framer-motion";
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Home() {
  return (
    <section className="py-5" style={{ flexWrap: 'wrap' }}>
      <Container>
        {/* --- Hero Section --- */}
        <Row className="align-items-center flex-column flex-md-row text-center text-md-start mb-5">
          <Col xs={12} md={6}>
            <div className="mb-4">
              <TextEffectOne text="Hello!!!!" style={{ color: '#F2827F', fontWeight: 'bold', fontSize: "clamp(2rem, 5vw, 4rem)" }} />
              <TextEffectTwo text="i'm Syabina Nur Pajriyanti" style={{ color: '#ffc1cc', fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }} />
              <TextEffectTwo text="UI/UX Designer || Web Developer" style={{ color: '#ffc1cc', fontSize: "clamp(1.2rem, 3vw, 2rem)" }} />
            </div>
            <div className="d-flex justify-content-center justify-content-md-start gap-4">
              {/* Let's Connect Button */}
              <Button
                onClick={() => {
                  window.open(
                    "https://mail.google.com/mail/?view=cm&fs=1&to=syabinanurpajriyanti@gmail.com&su=Halo%20Syabina&body=Perkenalkan%2C%20saya%20ingin%20terhubung%20dengan%20Anda.",
                    "_blank"
                  );
                }}
                className="animated-button"
                variant="dark"
                style={{ fontSize: '18px', color: '#F2827F' }}
              >
                <FaEnvelope className="me-2" /> Let's Connect
              </Button>

              {/* Download CV Button */}
              <a href="src\assets\CV_ina.pdf" download>
                <Button className="animated-button" variant="dark" style={{ fontSize: '18px', color: '#F2827F' }}>
                  <FaDownload className="me-2" /> Download CV
                </Button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} className="d-flex flex-column flex-md-row justify-content-center align-items-center mt-5 mt-md-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              className="d-flex justify-content-center"
            >
              <img
                src={icons.ina}
                alt="Syabina Nur Pajriyanti"
                className="img-fluid rounded-circle border border-dark border-4"
                style={{
                  maxWidth: "500px",
                  maxHeight: "500px",
                  objectFit: "cover",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = "#F2827F")}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "#000000FF")}
              />
            </motion.div>
            {/* Social Media Icons - Positioned beside the photo */}
            <div className="d-flex flex-row flex-md-column justify-content-center gap-4 mt-4 mt-md-0 ms-md-4">
              <a href="https://www.linkedin.com/in/syabina-nur-pajriyanti-b082aa199/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: '#000000' }} />
              </a>
              <a href="https://www.instagram.com/sybninanf" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{ color: '#000000' }} />
              </a>
              <a href="https://www.github.com/sybninanf" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{ color: '#000000' }} />
              </a>
            </div>
          </Col>
        </Row>

        ---
        {/* --- About Section --- */}
        <div className="py-5 my-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
          {/* Title Section */}
          <div className="text-center text-md-start" style={{ maxWidth: '300px' }}>
            <TextEffectOne
              text="ABOUT ME"
              style={{ color: '#F0E4E8FF', fontWeight: 'bold', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            />
            <div
              style={{
                height: '4px',
                width: '60%',
                backgroundColor: '#ffc1cc',
                marginTop: '10px',
                borderRadius: '2px',
                margin: '10px auto 0 auto',
              }}
            />
          </div>

          <div
            className="text-justify px-3 px-md-0"
            style={{
              maxWidth: '800px',
              color: 'white',
              textAlign: 'justify',
            }}
          >
            <TextEffectTwo
              text="Fresh graduate of Informatics Engineering with experience in Web Development, Mobile Development, UI/UX Design, information system analysis, programming, and system documentation. Experienced in web and mobile application development as well as implementation of AI and machine learning technologies. Possess strong problem-solving skills, good communication skills, and the ability to work in a team as well as independently."
              style={{ color: '#ffc1cc', fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
            />
          </div>
        </div>

        ---
        {/* --- Education Section --- */}
        <div className="py-5 my-5 d-flex flex-column flex-md-row justify-content-center align-items-center gap-5">
          {/* SVG Illustration */}
          <div className="mb-4 mb-md-0" style={{ maxWidth: '400px' }}>
            <img
              src="https://png.pngtree.com/png-vector/20240509/ourmid/pngtree-happy-children-and-good-student-on-transparent-png-image_12376593.png"
              alt="Education Illustration"
              className="img-fluid"
            />
          </div>

          {/* Education Content */}
          <div style={{ maxWidth: '800px' }}>
            <TextEffectOne
              text="EDUCATION"
              style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 'clamp(2rem, 5vw, 3rem)' }}
            />
            <div
              style={{
                height: '4px',
                width: '30%',
                backgroundColor: '#ffc1cc',
                margin: '10px 0 30px',
                borderRadius: '2px',
              }}
            />

            {/* College */}
            <div className="p-4 rounded shadow-lg mb-4" style={{ backgroundColor: '#1a1a1a', boxShadow: '0 0 10px rgba(255, 192, 203, 0.2)' }}>
              <h3 style={{ marginBottom: '5px', color: '#ffc1cc' }}>Bachelor of Informatics Engineering</h3>
              <p style={{ margin: '5px 0', color: '#ffffff' }}>Cendekia Abditama University</p>
              <p style={{ margin: '5px 0', color: '#ffffff' }}>2020 - 2024</p>
              <p style={{ margin: '5px 0', color: '#ffffff' }}>GPA: <strong>3.79 / 4.00</strong></p>
            </div>

            {/* High School */}
            <div className="p-4 rounded shadow-lg" style={{ backgroundColor: '#1a1a1a', boxShadow: '0 0 10px rgba(255, 192, 203, 0.2)' }}>
              <h3 style={{ marginBottom: '5px', color: '#ffc1cc' }}>Senior High School</h3>
              <p style={{ margin: '5px 0', color: '#ffffff' }}>SMA Negeri 1 Kab.Tangerang</p>
              <p style={{ margin: '5px 0', color: '#ffffff' }}>2017 - 2020</p>
            </div>
          </div>
        </div>

        ---
        {/* --- Skills Section --- */}
        <div className="py-5 my-5 text-center">
          {/* Title */}
          <div className="mb-5 d-inline-block">
            <TextEffectOne
              text="SKILLS"
              style={{ color: "#ffffff", fontWeight: "bold", fontSize: "clamp(2rem, 5vw, 3rem)" }}
            />
            <div
              style={{
                height: "4px",
                width: "60%",
                backgroundColor: "#ffc1cc",
                margin: "10px auto 0",
                borderRadius: "2px",
              }}
            />
          </div>

          {/* Icon Section */}
          <Row className="justify-content-center mb-5 gx-3 gy-4">
            {Object.entries(icons)
              .filter(([key]) => key !== "ina")
              .map(([key, value], index) => (
                <Col key={key} xs={6} sm={4} md={3} lg={2} className="d-flex justify-content-center">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                  >
                    <img
                      src={value}
                      alt={key}
                      className="img-fluid"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </motion.div>
                </Col>
              ))}
          </Row>

          {/* Skill Cards */}
          <Row className="justify-content-center gx-5 gy-4">
            {[
              {
                title: "Soft Skills",
                items: [
                  "Problem-Solving",
                  "Communication",
                  "Time Management",
                  "Adaptability",
                  "Analytical Thinking",
                ],
              },
              {
                title: "Leadership",
                items: [
                  "Team Leadership",
                  "Stakeholder Engagement",
                  "Strategic Communication",
                ],
              },
              {
                title: "Technical Skills",
                items: ["Data Analysis", "UI/UX Design", "Web Development", "Mobile Development"],
              },
            ].map((section, idx) => (
              <Col key={idx} xs={12} sm={6} lg={4} className="mb-4 d-flex">
                <div
                  className="w-100 p-4 rounded shadow-lg h-100 d-flex flex-column justify-content-between"
                  style={{
                    backgroundColor: "#1a1a1a",
                    boxShadow: "0 0 15px rgba(255, 192, 203, 0.3)",
                  }}
                >
                  <h4 className="mb-3" style={{ color: "#ffc1cc" }}>{section.title}</h4>
                  <div>
                    {section.items.map((item, i) => (
                      <p key={i} className="mb-1" style={{ color: "white" }}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}