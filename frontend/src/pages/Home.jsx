import { Link } from "react-router-dom";
import FeatureCard from "../components/FeatureCard";

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="hero-container">
          <div className="headline">
            <h1>A marketplace where skills pay for skills</h1>
            <p>
              Exchange knowledge, learn faster, and unlock real opportunities
              through skill-to-skill trading.
            </p>
          </div>

          <div className="hero-button">
            <Link to="/register" className="signup-link">
              Get Started
            </Link>
            <Link to="/login" className="login-link">
              Explore Skills
            </Link>
          </div>
        </div>
      </section>

      <section className="features">
        <FeatureCard
          emoji="👤"
          title="User Profiles"
          description="You create a profile that shows who you are, what you can do, and what you want to learn."
        />
        <FeatureCard
          emoji="🛠️"
          title="Skills Offered"
          description="You describe the skills you are offering"
        />
        <FeatureCard
          emoji="📚"
          title="Skills Wanted"
          description="You describe the skills you want to learn"
        />
         <FeatureCard
          emoji="🔎"
          title="Skill Matching"
          description="We connect you with people whose skills match yours — so you can trade and learn from each other easily."
        />
         <FeatureCard
          emoji="☎️"
          title="Exchange Request"
          description="Found someone with the right skills? Send a request to trade — you help them, they help you."
        />
      </section>
    </>
  );
};

export default Home;
