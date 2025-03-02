import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import pg from "../assets/projects/quiz.jpg";
import project from "../assets/projects/herspace.png";
import lift from "../assets/projects/nutritrack.png";
import krypto from "../assets/projects/certify.png";
import kickstart from "../assets/projects/weather.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="NutriTrack"
              description="NutriTrack is an AI-driven nutrition and meal planning platform designed to help users achieve their health goals efficiently. I developed the front end using React and Tailwind CSS, ensuring a seamless and user-friendly experience. The platform offers personalized meal plans tailored to users' dietary preferences, fitness goals, and caloric needs. To enhance usability, I integrated AI-powered food recognition for effortless calorie tracking and automated grocery list generation. It also has real-time recommendations, personalized chat support, and intuitive progress tracking, enabling users to stay on course with their nutrition and wellness journey."
              ghLink="https://nutrition-ai-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project}
              isBlog={false}
              title="Her Space"
              description="HerSpace is a women empowerment platform designed to foster engagement and support through innovative technology. I developed the interactive front end using React and Tailwind CSS, creating a modern and user-friendly interface. The platform features a sleek UI with a scrolling carousel, personalized recommendations, and community-driven engagement to enhance user interaction. Additionally, I integrated an AI-powered Style Assistant, offering personalized fashion advice to enrich users' styling experiences and boost confidence."
              ghLink="https://github.com/ayesha-2101/Mercari-Women-Hack"
              demoLink="https://drive.google.com/file/d/1n0tVhBE_oUZE3wKmIfp_MR4QbgamvbbX/view?t=4"

            />
          </Col>

        

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pg}
              isBlog={false}
              title="Quiz App"
              description="QuizApp is a dynamic Multiple Choice Question (MCQ) quiz application designed for Flutter enthusiasts. It provides an engaging way to explore and test knowledge on various Flutter topics through well-structured MCQs. The app features an interactive and intuitive user interface, ensuring a seamless user experience. Additionally, it includes a detailed result screen that allows users to review their right and wrong answers, helping them track progress and enhance their understanding of Flutter concepts."
              ghLink="https://github.com/nidhirk2020/Quiz_App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={krypto}
              isBlog={false}
              title="Swift Certify"
              description="As a Frontend Developer for Swift Certify, an automated certificate generator website, I contributed to the project as part of a team during an intra-college hackathon. I designed and implemented the user interface (UI) and user experience (UX), ensuring a seamless and intuitive platform for users. Additionally, I optimized the website for cross-browser compatibility and responsiveness, providing a consistent experience across different devices and screen sizes."
              ghLink="https://kanishkaamittal.github.io/SwiftCertify/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kickstart}
              isBlog={false}
              title="Weatherly Well"
              description="Weatherly Well is an AI-powered weather and health correlation platform that I developed using React during a hackathon. The platform integrates an AI chatbot featuring an Indian aunty persona, providing users with personalized health recommendations based on real-time weather conditions. Emphasizing user-centric design, I ensured accessibility and responsiveness while leveraging user feedback for continuous improvements, creating an engaging and practical solution for weather-based health guidance."
              ghLink="https://github.com/nidhirk2020/WeatherApp"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects