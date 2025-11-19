import {useReducer} from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { fetchAPI, submitAPI } from "../utils/api";

function Booking() {

  const initializeTimes = () => {
    return fetchAPI(new Date());
  };
  const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return response.length !== 0 ? response : availableTimes;
  };
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const availableOccasions = [
    "Birthday",
    "Anniversary"
  ];

  const navigate = useNavigate();

  const submitForm = (data) => {
    if (submitAPI(data)) {
      console.log(data);
      navigate("/confirmed-booking", {state: data});
    } else {
      alert("Form submission failed. Please try again!");
    }
  };

  return (
    <main>
      <BookingForm
        availableTimes={availableTimes}
        availableOccasions={availableOccasions}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default Booking;