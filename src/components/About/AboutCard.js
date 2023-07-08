import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Vaibhav Sharma </span>
            from <span className="purple"> Noida, India.</span>
            <br /> I am a final year student pursuing BTech with specialisation
            in <span className="purple">Computer Science</span> from NSUT, Delhi.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Badminton🏸
            </li>
            <li className="about-activity">
              <ImPointRight /> Video games speacially Valorant❤️
            </li>
            <li className="about-activity">
              <ImPointRight /> Managing events🌆
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling🧳
            </li>
            <li className="about-activity">
              <ImPointRight /> Trying Delhi food😋
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things in easier way and in the process discover new ways!"{" "}
          </p>
          <footer className="blockquote-footer">Vaibhav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
