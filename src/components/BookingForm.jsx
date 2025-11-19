import { useFormik } from "formik";
import * as Yup from 'yup';
import ContentContainer from "./ContentContainer";
import "./BookingForm.css";

function BookingForm(props) {

  const formik = useFormik({
    initialValues: {
      selectedDate: "",
      selectedTime: props.availableTimes[0],
      selectedGuests: 2,
      selectedOccasion: props.availableOccasions[0],
    },
    onSubmit: (values) => {
      console.log("submitted");
      props.submitForm(values);
    },
    validationSchema: Yup.object({
      selectedDate: Yup.date()
        .required("Date is required")
        .min(new Date(new Date().setHours(0, 0, 0, 0)), "Please choose a valid date"),
      selectedTime: Yup.string().required("Time is required"),
      selectedGuests: Yup.number()
        .required("Number of guests is required")
        .min(1, "At least 1 guest")
        .max(10, "Maximum 10 guests"),
      selectedOccasion: Yup.string().required("Occasion is required"),
    }),
  });

  const handleDateChange = (e) => {
    formik.handleChange(e);
    props.dispatch(e.target.value);
  };

  return (
    <div className="booking-banner">
      <ContentContainer>
        <section className="booking-content">
          <h1>Book Now</h1>
          {/* Form */}
          <form aria-label="Booking form" className="booking-form" onSubmit={formik.handleSubmit}>
            {/* Date */}
            <label htmlFor="selectedDate">Date</label>
            <input
              aria-label="Select a date"
              aria-required="true"
              type="date"
              id="selectedDate"
              name="selectedDate"
              className={formik.touched.selectedDate && formik.errors.selectedDate ? "error-input" : "valid-input"}
              min={new Date().toISOString().split("T")[0]}
              value={formik.values.selectedDate}
              onChange={handleDateChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.selectedDate && formik.errors.selectedDate && (
              <div className="error">{formik.errors.selectedDate}</div>
            )}
            {/* Time */}
            <label htmlFor="selectedTime">Time</label>
            <select
              aria-label="Select a time"
              aria-required="true"
              id="selectedTime"
              name="selectedTime"
              className={formik.touched.selectedTime && formik.errors.selectedTime ? "error-input" : "valid-input"}
              value={formik.values.selectedTime}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {props.availableTimes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {formik.touched.selectedTime && formik.errors.selectedTime && (
              <div className="error">{formik.errors.selectedTime}</div>
            )}
            {/* Number of guests */}
            <label htmlFor="selectedGuests">Number of guests</label>
            <input
              aria-label="Number of guests"
              aria-required="true"
              type="number"
              id="selectedGuests"
              name="selectedGuests"
              min="1"
              max="10"
              className={formik.touched.selectedGuests && formik.errors.selectedGuests ? "error-input" : "valid-input"}
              value={formik.values.selectedGuests}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.selectedGuests && formik.errors.selectedGuests && (
              <div className="error">{formik.errors.selectedGuests}</div>
            )}
            {/* Occasion */}
            <label htmlFor="selectedOccasion">Occasion</label>
            <select
              aria-label="Occasion"
              aria-required="true"
              id="selectedOccasion"
              name="selectedOccasion"
              className={formik.touched.selectedOccasion && formik.errors.selectedOccasion ? "error-input" : "valid-input"}
              value={formik.values.selectedOccasion}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              {props.availableOccasions.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            {formik.touched.selectedOccasion && formik.errors.selectedOccasion && (
              <div className="error">{formik.errors.selectedOccasion}</div>
            )}
            {/* Submit */}
            <button className="lemon-button" type="submit">Make Your Reservation</button>
          </form>
        </section>
      </ContentContainer>
    </div>
  );
}

export default BookingForm;