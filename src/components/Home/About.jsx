import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/about7-removebg-preview.png";
import trophy from "../../assets/trophy-removebg-preview.png";
import exp from "../../assets/exp-removebg-preview.png";

import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Nidhi </span>
                 and I'm from <span className="yellow"> Kurukshetra</span>
                <br />
                <br />
                I am currently pursuing a Bachelor's degree in Electronics and Communication Engineering at UIET Kurukshetra, with a strong academic record (CGPA: 8.35/10). I ranked in the top 10 of my department and secured the 1st position in Semester 2.

                <br />
                <br />
                  As a
                  <b className="yellow"> Full-Stack </b>developer,  
                 I enjoy tackling new challenges and continuously expanding my skill set. I have experience building scalable web applications, optimizing performance, and designing intuitive user interfaces.
                  <br />
                  <br />
                    <b className="yellow"> I am proficient in </b>
                    JavaScript (ES6+), as well as other programming languages such as Java, C, and Python. Additionally, I have experience with modern technologies like React.js, Next.js, Node.js, Express.js, REST APIs, and database systems including MySQL, PostgreSQL, and MongoDB.
                 
                  <br />
                  <br />
                  I have a passion for working
                  with <b className="yellow">Node.js, MongoDB,</b> and
                  <i>
                    <b className="yellow">
                      {" "}
                      modern Javascript libraries and frameworks
                    </b>
                  </i>
                  &nbsp; like
                  <i>
                    <b className="yellow"> React.js</b>
                  </i>
                  <br />
                  <br />
                  I am also interested in building new
                  <i>
                    <b className="yellow"> Web Technologies and Products, </b>
                    as well as exploring areas related to
                    <b className="yellow"> Artificial Intelligence.</b>especially AI-powered recommendations and automation in web applications.
                  </i>
                  <br />
                        <h4 style={{ marginTop:10 }}>
            My Resume:{" "}
            <a
              href="https://drive.google.com/file/d/1cquzG9iGADKw7c3vnpvXOdUZ4u_iY4HW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-link"
            >
              Click here
            </a>
          </h4>

                  
                 


                </p>
              </Col>

              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>

          {/* ACHIEVEMENTS */}
           <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  <span className="yellow"> My Achievements </span> 
                </h1>
                <p className="home-about-body">
  
                 
                  <b className="yellow">Winner of Mercari Women Hackathon 2024</b>  
                  <br />
                  – Selected as one of 30 participants for the 2024 Women Hackathon, where we developed <b>HerSpace</b>, a platform for Mercari promoting body positivity and empowering women with AI-driven fashion recommendations and community-building features.
                  <br />
                  <br />
                  <b className="yellow">Hack the North 2024</b>  
                  <br />
                  – Shortlisted for Hack the North, North America’s largest hackathon, from a competitive pool of numerous applicants, highlighting my strong problem-solving skills and innovative approach to technology.
                  <br />
                  <br />
                </p>
                        

               
              </Col>

              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={trophy} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>


 {/* Experience */}
           <Row>
             <Col md={8} className="home-about-description">
                    <h1 style={{ fontSize: "2.6em" }}>
                       My Experience 
                    </h1>
                    <p className="home-about-body">
                      <b className="yellow">INDIEFLUENCE (Web Developer Intern) | Sept 2024 - Present</b>  
                      <br />
                      – Developed <b className="yellow">React-based web apps</b>, boosting user engagement by 25% and reducing load times by 30%.  
                      – Worked with UI/UX and backend teams to integrate APIs and enhance app performance.  
                      – Built responsive UI components using <b className="yellow">React</b> and <b className="yellow">Tailwind CSS</b>, ensuring 100% mobile compatibility across iOS and Android.  
                      <br />
                      <br />
                      <b className="yellow">OOHR INNOVATIONS (App Developer Intern) | Apr 2023 - Jul 2023</b>  
                      <br />
                      – Contributed to the development of a <b className="yellow">driver app</b> using Kotlin and Android Studio, ensuring a smooth user experience.  
                      – Designed and coded 5+ key app features, including <b className="yellow">student pickup alerts</b> and <b className="yellow">GPS tracking</b>.  
                      – Enhanced app functionality by implementing <b className="yellow">user feedback-driven improvements</b>.  
                    </p>
                  </Col>


              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={exp} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>

            
            
          
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/nidhirk2020"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                  </li>

                  <li className="social-icons">
                    <a
                      href="https://www.linkedin.com/in/nidhirk2020/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="linkedin"
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://leetcode.com/u/vermaNidhi2003/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                      aria-label="instagram"
                    >
                      <SiLeetcode />
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About