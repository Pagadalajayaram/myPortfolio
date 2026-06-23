import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import campus from "../../Assets/Projects/campusconnect.png";
import expense from "../../Assets/Projects/expense-tracker.png";
import alert from "../../Assets/Projects/alert-365png.png";
import portfolio from "../../Assets/Projects/portfolio.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={campus}
              isBlog={false}
              title="Campus Connect"
              description="A full-stack college club management platform built with React, Spring Boot, and MySQL that enables club administration, event management, recruitments, announcements, and student engagement through role-based dashboards"
              ghLink="https://github.com/KRISHNAVAMSIMAMIDI/campus-connect"
              demoLink="https://campus-connect.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="Expense Tracker is a simple and intuitive Android application to manage your finances. Built with Jetpack Compose, the app allows users to track income and expenses, view recent transactions, and get an overview of their financial status."
              ghLink="https://github.com/Pagadalajayaram/Expence-TrackerApp"
              demoLink="https://play.google.com/store/apps/details?id=com.jayaram.expensetracker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alert}
              isBlog={false}
              title="Alert-365"
              description="Developed a web-based Find and Reward Application that helps users report and search for missing people. Users can post details of missing individuals, upload photos, and offer rewards for useful information. The platform aims to connect communities and increase the chances of locating missing persons quickly and efficiently."
              ghLink="https://github.com/Pagadalajayaram/find-missing-people"
              demoLink="https://alert-365-22s8aawr7-pagadala-jaya-rams-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A personal portfolio website showcasing my projects, technical skills, certifications, and resume. Built using React.js with a responsive and modern user interface, and deployed on Vercel for fast and reliable access."
              ghLink="https://github.com/Pagadalajayaram/myPortfolio"
              demoLink="https://pagadalajayaram.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
