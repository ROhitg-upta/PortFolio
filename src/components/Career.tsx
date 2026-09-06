import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in Computer Science</h4>
                <h5>ABES Engineering College</h5>
              </div>
              <h3>2023 - 2027</h3>
            </div>
            <p>
              CGPA: 8.865 / 10. Deep grounding in Data Structures, Algorithms in C++, Operating Systems, DBMS, and scalable software architecture.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Full-Stack Architect</h4>
                <h5>Nyaya Revolution & EviChain</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Led technical design and implementation of India's situation-based legal platform (Nyaya Revolution) and engineered EviChain's zero-trust forensic chain-of-custody platform with 147/147 passing tests.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Hackathon Participant & Builder</h4>
                <h5>SIH Internal, UX Imperium, Code Your Cult</h5>
              </div>
              <h3>2025 - 2026</h3>
            </div>
            <p>
              Active builder in competitive hackathons and engineering challenges: SIH Internal (Medi Mitra), UX Imperium (Evently), Puzzlemaster (Paradox), Abtalk Redesign, and Code Your Cult.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>3-Star Competitive Programmer</h4>
                <h5>CodeChef & Open-Source</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Active C++ algorithmic problem solver on CodeChef (caffeine_rohit). Building robust, production-deployed web applications with TypeScript, Next.js, and PostgreSQL.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
