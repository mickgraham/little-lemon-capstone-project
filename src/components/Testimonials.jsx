import ContentContainer from "./ContentContainer";
import TestimonialCard from "./TestimonialCard";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="testimonials-banner">
      <ContentContainer>
        <section className="testimonials-content" aria-labelledby="testimonials-heading">
          <h2 id="testimonials-heading">What our customers are saying</h2>
          <div className="testimonial-grid" role="list">
            <TestimonialCard
              image={person1}
              author="Priya"
              rating={5}
              quote="A hidden gem in Chicago. Warm atmosphere and exceptional service."
            />
            <TestimonialCard
              image={person2}
              author="Jamie"
              rating={5}
              quote="The food here is amazing - fresh, flavourful, and with a modern twist."
            />
            <TestimonialCard
              image={person3}
              author="Jane"
              rating={4}
              quote="Enjoyed the family owned Mediterranean restaurant atmosphere tremendously."
            />
            <TestimonialCard
              image={person4}
              author="Marcus"
              rating={4.5}
              quote="Loved the Mediterranean recipes served in a creative way. Will come back!"
            />
          </div>
        </section>
      </ContentContainer>
    </div>
  );
}

export default Testimonials;
