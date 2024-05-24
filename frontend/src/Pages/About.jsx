import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/about.css';

const About = () => {
  return (
    <section className="about-section">
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="section-title">About Us</h2>
            <p className="section-subtitle">Learn more about our company and team.</p>
          </Col>
          <Col lg="6" className="mb-4">
            <h3 className="about-title">Our Mission</h3>
            <p className="about-text">
              Our mission is to provide the best travel experiences for our customers. We believe in creating memorable and enriching journeys that cater to diverse interests and preferences.
            </p>
          </Col>
          <Col lg="6" className="mb-4">
            <h3 className="about-title">Our Values</h3>
            <p className="about-text">
              We value customer satisfaction, integrity, and innovation. Our team is dedicated to offering personalized service and ensuring that every trip is a unique adventure.
            </p>
          </Col>
          <Col lg="12" className="mb-4">
            <h3 className="about-title">Meet the Team</h3>
            <p className="about-text">
              Our team consists of experienced travel professionals who are passionate about helping you explore the world. We are here to assist you with every step of your journey.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
