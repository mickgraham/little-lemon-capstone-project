import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import bruschetta from "../assets/bruschetta.jpg";
import greek_salad from "../assets/greek_salad.jpg";
import lemon_dessert from "../assets/lemon_dessert.jpg";
import { ReactComponent as Scooter } from "../assets/scooter.svg";
import ContentContainer from "./ContentContainer";
import "./Highlights.css";

function Highlights() {
  return (
    <div className="highlights-banner">
      <ContentContainer>
        <section className="highlights-content" id="highlights" aria-labelledby="highlights-heading">
          <div className="highlights-header">
            <h2 id="highlights-heading">This week's specials!</h2>
            <Link to='/order-online'>
              <button className="lemon-button" type="button" aria-label="View online menu">Online Menu</button>
            </Link>
          </div>
          <div className="cards">
            <article className="card">
              <img src={greek_salad} alt="Greek Salad with lettuce, peppers, olives, feta cheese and croutons" />
              <div className="card-info">
                <h3>
                  Greek Salad <span aria-label="Price">$12.99</span>
                </h3>
                <p>
                  The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                </p>
                <HashLink to='/#highlights'aria-label="Order Greek Salad for delivery">
                  Order a delivery <i><Scooter /></i>
                </HashLink>
              </div>
            </article>
            <article className="card">
              <img src={bruschetta} alt="Grilled bruschetta with garlic and olive oil" />
              <div className="card-info">
                <h3>
                  Bruschetta <span aria-label="Price">$5.99</span>
                </h3>
                <p>
                  Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                </p>
                <HashLink to='/#highlights'aria-label="Order Bruschetta for delivery">
                  Order a delivery <i><Scooter /></i>
                </HashLink>
              </div>
            </article>
            <article className="card">
              <img src={lemon_dessert} alt="Lemon dessert served in a small dish" />
              <div className="card-info">
                <h3>
                  Lemon Dessert <span aria-label="Price">$5.00</span>
                </h3>
                <p>
                  This comes straight from grandma's recipe book; every last ingredient has been sourced and is authentic as can be imagined.
                </p>
                <HashLink to='/#highlights'aria-label="Order Lemon Dessert for delivery">
                  Order a delivery <i><Scooter /></i>
                </HashLink>
              </div>
            </article>
          </div>
        </section>
      </ContentContainer>
    </div>
  );
}

export default Highlights;
