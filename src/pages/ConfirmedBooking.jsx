import { Link, useLocation } from 'react-router-dom';
import "./ConfirmedBooking.css";

function ConfirmedBooking() {
  const location = useLocation();
  const formData = location.state;

  return (
    <main>
      <section className="confirmed-booking" aria-labelledby="booking-heading">
        <article>
          <h1 id="booking-heading">Booking Confirmed</h1>
          <p role="status" aria-live="polite">
            Thank you! Your booking details are below.
          </p>
        </article>
        <article
          aria-labelledby="booking-details-heading"
          className="booking-details"
        >
          {formData ? (
            <dl>
              <dt>Date:</dt>
              <dd>{formData.selectedDate}</dd>

              <dt>Time:</dt>
              <dd>{formData.selectedTime}</dd>

              <dt>Guests:</dt>
              <dd>{formData.selectedGuests}</dd>

              <dt>Occasion:</dt>
              <dd>{formData.selectedOccasion}</dd>
            </dl>
          ) : (
            <p>No booking data available.</p>
          )}
        </article>
        <article aria-label="Booking actions">
          <Link to='/'>
            <button
              className="lemon-button"
              type="button"
              aria-label="Back to home"
            >
              Back to Home
            </button>
          </Link>
        </article>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
