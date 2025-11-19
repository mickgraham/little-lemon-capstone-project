import { Link } from "react-router-dom";
import restaurant_food from '../assets/restaurant_food.jpg';
import ContentContainer from "./ContentContainer";
import "./Hero.css"

function Hero() {
  return (
    <div className="hero-banner">
      <ContentContainer>
        <section className="hero-content" aria-labelledby="hero-title">
          <div className="hero-text">
            <h1 id="hero-title">Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
              We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <Link to='/booking'>
              <button className="lemon-button" type="button" aria-label="Reserve a Table">Reserve a Table</button>
            </Link>
          </div>
          <div className="hero-image">
            <img src={restaurant_food} alt="Little Lemon restaurant food" />
          </div>
        </section>
      </ContentContainer>
    </div>
  );
}

export default Hero;
