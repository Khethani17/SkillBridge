import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <section className="footer">
      <div className="message">
        <h3>SkillBridge</h3>
        <p>Trade skills, not money.</p>
      </div>
      <div className="quick-links">
        <h4>Explore</h4>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </div>
      <div className="copyright">
        <p>© {year} SkillBridge. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Footer;
