import ContentContainer from "./ContentContainer";
import mario_and_adrian_a from "../assets/mario_and_adrian_a.jpg";
import mario_and_adrian_b from "../assets/mario_and_adrian_b.jpg";
import "./About.css";

function About() {
  return (
    <div className="about-banner">
      <ContentContainer>
        <section className="about-content" id="about" aria-labelledby="about-heading">
          <div className="text">
            <h2 id="about-heading">About Little Lemon</h2>
            <p>
              Located in the heart of Chicago, Little Lemon is a family-owned Mediterranean restaurant.
              We blend traditional recipes with a modern twist, serving every dish with care and a smile.
            </p>
            <p>
              Our mission is to provide a memorable dining experience combining fresh ingredients, warm
              service, and the flavours of the Mediterranean. Join us for lunch, dinner, or your next special event.
            </p>
          </div>
          <div className="image-stack" aria-hidden="true">
            <img
              src={mario_and_adrian_b}
              alt="Mario and Adrian B"
              className="img-top-right"
            />
            <img
              src={mario_and_adrian_a}
              alt="Mario and Adrian A"
              className="img-bottom-left"
            />
          </div>
        </section>
      </ContentContainer>
    </div>
  );
}

export default About;
