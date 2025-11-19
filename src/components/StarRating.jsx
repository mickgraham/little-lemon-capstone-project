import { ReactComponent as StarFull } from "../assets/star-solid-full.svg";
import { ReactComponent as StarHalf } from "../assets/star-half-stroke-solid-full.svg";
import { ReactComponent as StarEmpty } from "../assets/star-regular-full.svg";

function StarRating({ rating=5, maxStars=5 }) {
  const stars = [];

  for (let i = 1; i <= maxStars; i++) {
    if (rating >= i) {
      stars.push(<StarFull key={i} alt="Star full" className="star full"></StarFull>);
    } else if (rating + 0.5 >= i) {
      stars.push(<StarHalf key={i} alt="Star half" className="star half"></StarHalf>);
    } else {
      stars.push(<StarEmpty key={i} alt="Star empty" className="star empty"></StarEmpty>);
    }
  }

  return (
    <span className="star-rating">{stars}</span>
  );
};

export default StarRating;
