import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { TextEffectOne, TextEffectTwo } from 'react-text-animate';
import { icons } from "../assets/icons";
import { motion } from "framer-motion";
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';


export default function Home() {
  return (
    <section style={{ padding: '70px 70px', flexWrap: 'wrap' }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <div>
              <TextEffectOne text="Hello!!!!" style={{ color: '#F2827F', fontWeight: 'bold', fontSize: "60px" }} />
              <TextEffectTwo text="i'm Syabina Nur Pajriyanti" style={{ color: '#ffc1cc', fontSize: "40px" }} />
              <TextEffectTwo text="UI/UX Designer || Web Developer" style={{ color: '#ffc1cc', fontSize: "30px" }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>

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
                <FaEnvelope style={{ marginRight: '10px' }} /> Let's Connect
              </Button>



              {/* Download CV Button */}
              <a href="src\assets\CV_ina.pdf" download>
                <Button className="animated-button" variant="dark" style={{ marginLeft: '50px', fontSize: '18px', color: '#F2827F' }}>
                  <FaDownload style={{ marginRight: '10px' }} /> Download CV
                </Button>
              </a>
            </div>
          </Col>
          <Col xs={9} md={6} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
              style={{ marginLeft: "90px" }} // Adjust space between photo and icons
            >
              <img
                src={icons.ina}
                alt="ina"
                style={{
                  width: "550px",
                  height: "500px",
                  borderRadius: "800px", // mirip roundedSize
                  border: "4px solid #000000FF", // sama kayak roundedColor
                  objectFit: "cover",
                  transition: "0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = "#F2827F")}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = "#000000FF")}
              />

            </motion.div>
            {/* Social Media Icons - Positioned beside the photo */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginLeft: '0px' }}>
              <a href="https://www.linkedin.com/in/syabina-nur-pajriyanti-b082aa199/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: '#000000', marginLeft: '70px', marginBottom: '20px' }} />
              </a>
              <a href="https://www.instagram.com/sybninanf" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={30} style={{ color: '#000000', marginBottom: '20px', marginLeft: '70px' }} />
              </a>
              <a href="https://www.github.com/sybninanf" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{ color: '#000000', marginLeft: '70px' }} />
              </a>
            </div>
          </Col>
        </Row>


        {/* About Section */}
        <div
          style={{
            padding: '200px 0',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center', // tengah secara vertikal
            gap: '50px'
          }}
        >
          {/* Title Section - kiri dan tengah secara vertikal */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              width: '25%',
            }}
          >
            <TextEffectOne
              text="ABOUT ME"
              style={{ color: '#F0E4E8FF', fontWeight: 'bold', fontSize: '45px' }}
            />
            <div
              style={{
                height: '4px',
                width: '60%',
                backgroundColor: '#ffc1cc',
                marginTop: '10px',
                borderRadius: '2px',
              }}
            />
          </div>

          <div
            style={{
              width: '60%',
              background: 'transparent',
              color: 'white',
              textAlign: 'justify',
            }}
            body
          >
            <TextEffectTwo
              text="Fresh graduate of Informatics Engineering with experience 
in Web Development, Mobile Development, UI/UX Design, information system analysis, programming, and system documentation. 
analysis, programming, and system documentation. 
Experienced in web and mobile application development as well as 
development of web and mobile-based applications as well as implementation of AI and 
machine learning technologies. Possess strong problem-solving 
strong problem-solving skills, good communication skills, and the ability to work 
in a team as well as independently."
              style={{ color: '#ffc1cc', fontSize: '25px' }}
            />
          </div>
        </div>


        {/* Education Section with SVG */}
        <div
          style={{
            padding: '100px 0',
            color: 'white',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
          }}
        >
          {/* SVG Illustration */}
          <div style={{ width: '30%' }}>
            <img
              src="https://png.pngtree.com/png-vector/20240509/ourmid/pngtree-happy-children-and-good-student-on-transparent-png-image_12376593.png" // contoh SVG dari svgrepo.com
              alt="Education Illustration"
              style={{ width: '100%', height: 'auto' }}
            />
          </div>

          {/* Education Content */}
          <div style={{ width: '60%' }}>
            <TextEffectOne
              text="EDUCATION"
              style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '45px' }}
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
            <div
              style={{
                backgroundColor: '#1a1a1a',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(255, 192, 203, 0.2)',
                marginBottom: '20px',
              }}
            >
              <h3 style={{ marginBottom: '5px', color: '#ffc1cc' }}>Bachelor of Informatics Engineering</h3>
              <p style={{ margin: '5px 0' }}>Cendekia Abditama University</p>
              <p style={{ margin: '5px 0' }}>2020 - 2024</p>
              <p style={{ margin: '5px 0' }}>GPA: <strong>3.79 / 4.00</strong></p>
            </div>

            {/* High School */}
            <div
              style={{
                backgroundColor: '#1a1a1a',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 0 10px rgba(255, 192, 203, 0.2)',
              }}
            >
              <h3 style={{ marginBottom: '5px', color: '#ffc1cc' }}>Senior High School</h3>
              <p style={{ margin: '5px 0' }}>SMA Negeri 1 Kab.Tangerang</p>
              <p style={{ margin: '5px 0' }}>2017 - 2020</p>
            </div>
          </div>
        </div>




        {/* Skills Section */}
        {/* Skills Section */}
        <div style={{ padding: "120px 0", textAlign: "center" }}>
          {/* Title */}
          <div style={{ display: "inline-block" }}>
            <TextEffectOne
              text="SKILLS"
              style={{ color: "#ffffff", fontWeight: "bold", fontSize: "40px" }}
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
          <div
            style={{
              margin: "50px auto",
              maxWidth: "1100px",
              color: "white",
            }}
          >
            <Row className="justify-content-center">
              {Object.entries(icons)
                .filter(([key]) => key !== "ina")
                .map(([key, value], index) => (
                  <Col key={key} xs={6} sm={4} md={2} className="mb-4 d-flex justify-content-center">
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 1 }}
                    >
                      <img
                        src={value}
                        alt="profile"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "8px", // mirip roundedSize
                          border: "4px solid transparent", // roundedColor transparent
                          objectFit: "cover",
                        }}
                      />

                    </motion.div>
                  </Col>
                ))}
            </Row>
          </div>

          {/* Skill Cards */}
          <div className="d-flex justify-content-center">
            <Row className="justify-content-center" style={{ gap: "100px" }}>
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
                <Col key={idx} xs={12} sm={6} md={4} lg={3}>
                  <div
                    style={{
                      width: "100%",
                      textAlign: "center",
                      backgroundColor: "#1a1a1a",
                      padding: "20px",
                      borderRadius: "10px",
                      boxShadow: "0 0 15px rgba(255, 192, 203, 0.3)",
                      height: "100%",
                    }}
                  >
                    <h4 style={{ marginBottom: "15px", color: "#ffc1cc" }}>{section.title}</h4>
                    {section.items.map((item, i) => (
                      <p key={i} style={{ color: "white", margin: "5px 0" }}>
                        {item}
                      </p>
                    ))}
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>


      </Container>
    </section>
  );
}