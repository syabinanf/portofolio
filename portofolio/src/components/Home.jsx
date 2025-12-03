import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { TextEffectOne, TextEffectThree, TextEffectFour } from 'react-text-animate';
import { icons } from "../assets/icons";
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import Experience from "../components/Experience";
import Projects from "../components/Projects";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";


// ===== Scroll Motion Wrapper =====
function ScrollReveal({ children, delay = 0 }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
}
// =================================


export default function Home() {
  return (
    <section className="py-5" style={{ flexWrap: 'wrap' }}>
      <Container>


        {/* ========================= HERO SECTION ========================= */}
        <ScrollReveal>
          <Row className="align-items-center flex-column flex-md-row text-center text-md-start mb-5"
            style={{ marginTop: "40px", marginBottom: "70px" }}>
            <Col xs={12} md={6}>
              <div className="mb-2">
                <TextEffectFour
                  text="Hi! I'm Syabina Nur Pajriyanti 👋 "
                  style={{
                    color: '#ffc1cc',
                    fontSize: "clamp(1.8rem, 4.5vw, 2.5rem)",
                    fontWeight: 600
                  }}
                />

                <p
                  style={{
                    color: '#ffc1cc',
                    fontSize: "clamp(0.9rem, 2vw, 1.2rem)",
                    margin: "4px 0 0 0",
                    lineHeight: "1.5",
                    maxWidth: "700px"
                  }}
                >
                  Fresh graduate of Informatics Engineering with a GPA of 3.79,
                  equipped with hands-on experience in Web Development, Mobile Development,
                  UI/UX Design, information system analysis, programming, and system documentation.
                  I have been involved in developing web and mobile applications, as well as implementing AI
                  and machine learning solutions. Strong analytical thinking, teamwork ability, and initiative
                  to learn new technologies.
                </p>
              </div>

              <div className="d-flex justify-content-center justify-content-md-start gap-4"
              >
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

                <a href="src/assets/CV_ina.pdf" download>
                  <Button
                    className="animated-button"
                    variant="dark"
                    style={{ fontSize: '18px', color: '#F2827F' }}
                  >
                    <FaDownload className="me-2" /> Download CV
                  </Button>
                </a>
              </div>
            </Col>


            {/* ID CARD */}
            <Col
              xs={12}
              md={6}
              className="d-flex justify-content-center align-items-start mt-5 mt-md-0"
              style={{ position: "relative" }}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                  width: "6px",
                  height: "120px",
                  backgroundColor: "#ffc1cc",
                  marginBottom: "-10px",
                  borderRadius: "4px",
                }}
              />

              <motion.div
                initial={{ rotate: -2 }}
                animate={{ rotate: [-3, 3, -3] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="d-flex justify-content-center"
                style={{
                  backgroundColor: "#ffffff",
                  width: "240px",
                  height: "330px",
                  borderRadius: "16px",
                  boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                  border: "3px solid #ffc1cc",
                  overflow: "hidden",

                  position: "relative",
                  marginTop: "40px", marginBottom: "150px"
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "25px",
                    backgroundColor: "#ffc1cc",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                    position: "absolute",
                    top: "-25px",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                />

                <img
                  src={icons.ina}
                  alt="Syabina Nur Pajriyanti"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </motion.div>

              <div className="d-flex flex-column justify-content-center gap-4 ms-4">
                <a href="https://www.linkedin.com/in/syabina-nur-pajriyanti-b082aa199/" target="_blank">
                  <FaLinkedin size={30} style={{ color: '#000000' }} />
                </a>
                <a href="https://www.instagram.com/sybninanf" target="_blank">
                  <FaInstagram size={30} style={{ color: '#000000' }} />
                </a>
                <a href="https://github.com/sybninanf" target="_blank">
                  <FaGithub size={30} style={{ color: '#000000' }} />
                </a>
              </div>
            </Col>
          </Row>
        </ScrollReveal>
        {/* ========================= END HERO ========================= */}


        {/* ========================= SKILLS SECTION ========================= */}
        <ScrollReveal>
          <div className="py-7 mt-5 my-1 text-center">

            <div className="mb-3 d-inline-block">
              <TextEffectOne
                text="SKILLS"
                style={{ color: "#ffffff", fontWeight: "bold", fontSize: "clamp(2rem, 5vw, 2rem)" }}
              />
              <div
                style={{
                  height: "4px",
                  width: "60%",
                  backgroundColor: "#ffc1cc",
                  margin: "10px auto 0",
                  borderRadius: "2px",
                  marginTop: "40px",
                }}
              />
            </div>
          </div>
        </ScrollReveal>


        {/* SKILL ICON CARDS */}
        <Row className="justify-content-center mb-5 gx-4 gy-4"
          style={{ marginTop: "40px", marginBottom: "70px" }}>
          {Object.entries(icons)
            .filter(([key]) => key !== "ina")
            .map(([key, value], index) => (
              <Col key={key} xs={12} sm={6} md={4} lg={3}>
                <ScrollReveal delay={index * 0.1}>
                  <Card
                    className="d-flex flex-row align-items-center p-3"
                    style={{
                      backgroundColor: "#1a1a1a",
                      border: "2px solid #ffc1cc",
                      borderRadius: "18px",
                      boxShadow: "0 0 12px rgba(255, 192, 203, 0.4)",
                      height: "110px",
                    }}
                  >
                    <div className="me-3 d-flex justify-content-center align-items-center">
                      <img
                        src={value}
                        alt={key}
                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "contain",
                          borderRadius: "0px",
                        }}
                      />
                    </div>

                    <Card.Body className="p-0">
                      <Card.Title
                        style={{
                          fontSize: "16px",
                          color: "#ffc1cc",
                          fontWeight: "600",
                          marginBottom: 0,
                          textTransform: "capitalize",
                        }}
                      >
                        {key.replace(/_/g, " ")}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </ScrollReveal>
              </Col>
            ))}
        </Row>


        {/* SKILL CATEGORY CARDS */}
        <Row className="justify-content-center gx-4 gy-4 text-center">
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
              items: [
                "Data Analysis",
                "UI/UX Design",
                "Web Development",
                "Mobile Development",
              ],
            },
          ].map((section, idx) => (
            <Col key={idx} xs={12} sm={6} lg={4} className="d-flex justify-content-center">
              <ScrollReveal delay={idx * 0.15}>
                <div
                  className="skill-card d-flex flex-column"
                  style={{
                    width: "100%",
                    maxWidth: "320px",
                    padding: "25px",
                    backgroundColor: "#1a1a1a",
                    borderRadius: "12px",
                    boxShadow: "0 0 15px rgba(255, 192, 203, 0.3)",
                    minHeight: "250px",
                    justifyContent: "space-between",
                  }}
                >
                  <h4
                    style={{
                      color: "#ffc1cc",
                      fontWeight: "600",
                      marginBottom: "15px",
                      textAlign: "center",
                    }}
                  >
                    {section.title}
                  </h4>

                  <div style={{ textAlign: "center" }}>
                    {section.items.map((item, i) => (
                      <p
                        key={i}
                        style={{
                          color: "white",
                          marginBottom: "6px",
                          fontSize: "15px",
                        }}
                      >
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </Col>
          ))}
        </Row>



        {/* EXPERIENCE */}
        <ScrollReveal>
          <Experience />
        </ScrollReveal>

     {/* Project */}
        <ScrollReveal>
          <Projects />
        </ScrollReveal>

      </Container>
    </section>
  );
}
