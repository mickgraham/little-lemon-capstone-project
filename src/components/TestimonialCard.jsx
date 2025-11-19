import StarRating from "./StarRating";

function Testimonial({ image, quote, author, rating }) {
  return (
    <article className="testimonial" aria-label={`Testimonial from ${author}`}>
      <div className="circle-wrapper">
        <img
          src={image}
          alt={`${author}`}
          className="testimonial-image"
        />
      </div>
      <h4 className="author">{author}</h4>
      <StarRating rating={rating} aria-label={`${rating} out of 5 stars`} />
      <blockquote className="quote">
        <p>{quote}</p>
      </blockquote>
    </article>
  );
}

export default Testimonial;
