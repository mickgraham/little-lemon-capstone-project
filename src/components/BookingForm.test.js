import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BookingForm from "./BookingForm";

describe("Booking Form", () => {
  let mockDispatch;
  let mockSubmitForm;
  const initialTimes = [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
  let availableTimes = [...initialTimes];
  const initialOccasions = [
    "Birthday",
    "Anniversary"
  ];
  let availableOccasions = [...initialOccasions];

  let utils;

  beforeEach(() => {
    mockDispatch = jest.fn((availableTimes, date) => {
      if (date === "2025-11-16") {
        availableTimes = [
          "18:00",
          "19:00",
          "21:00"
        ];
      } else {
        availableTimes = [...initialTimes];
      }
      return availableTimes;
    });

    mockSubmitForm = jest.fn();

    utils = render(
      <BookingForm
        availableTimes={availableTimes}
        availableOccasions={availableOccasions}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
  });

  /* Form rendering */

  test('Render the form heading', () => {
    expect(screen.getByText(/Book Now/)).toBeInTheDocument();
  })

  test("Render all form fields correctly", () => {
    expect(screen.getByLabelText(/Select a date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/select a time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /make your reservation/i })).toBeInTheDocument();
  });

  /* Form functionality */

  test("Update selected date", async () => {
    const dateInput = screen.getByLabelText(/Select a date/i);
    const timeSelect = screen.getByLabelText(/select a time/i);

    await act(async () => {
      await userEvent.clear(dateInput);
      await userEvent.type(dateInput, "2025-11-16");
    });

    expect(dateInput.value).toBe("2025-11-16");
    expect(mockDispatch).toHaveBeenCalledWith("2025-11-16");

    await act(async () => {
      utils.rerender(
        <BookingForm
          availableTimes={availableTimes}
          availableOccasions={availableOccasions}
          dispatch={mockDispatch}
          submitForm={mockSubmitForm}
        />
      );
    });

    const timeOptions = [...timeSelect.options].map(o => o.value);
    expect(timeOptions).toEqual(expect.arrayContaining([
      "18:00",
      "19:00",
      "21:00"
    ]));

    await act(async () => {
      await userEvent.clear(dateInput);
    });
  });

  test("Update selected time", async () => {
    const timeSelect = screen.getByLabelText(/select a time/i);

    await act(async () => {
      await userEvent.selectOptions(timeSelect, "20:00");
    });

    expect(timeSelect.value).toBe("20:00");
  });

  test("Update number of guests", async () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);

    await act(async () => {
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, "5");
    });

    expect(guestsInput.value).toBe("5");
  });

  test("Update selected occasion", async () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);

    await act(async () => {
      await userEvent.selectOptions(occasionSelect, "Anniversary");
    });

    expect(occasionSelect.value).toBe("Anniversary");
  });

  test("Submit button prevents default behavior", async () => {
    const form = screen.getByRole("form", { name: /Booking form/ });

    const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
    const preventDefaultSpy = jest.spyOn(submitEvent, "preventDefault");

    await act(async () => {
      form.dispatchEvent(submitEvent);
    });

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  /* HTML5 validation */

  test("Date input has correct HTML validation attributes", () => {
    const dateInput = screen.getByLabelText(/Select a date/i);

    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toHaveAttribute("min", new Date().toISOString().split("T")[0]);
    expect(dateInput).toHaveAttribute("aria-required");
  });

  test("Time select has correct HTML attributes", () => {
    const timeSelect = screen.getByLabelText(/select a time/i);

    expect(timeSelect).toHaveAttribute("aria-required");
  });

  test("Guests input has correct HTML attributes", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);

    expect(guestsInput).toHaveAttribute("type", "number");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
    expect(guestsInput).toHaveAttribute("aria-required");
  });

  test("Occasion select has correct HTML attributes", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);

    expect(occasionSelect).toHaveAttribute("aria-required");
  });

  /* JavaScript validation */

  test("Invalid (empty) date shows error", async () => {
    const dateInput = screen.getByLabelText(/Select a date/i);

    await act(async () => {
      await userEvent.click(dateInput);
      await userEvent.tab();
    });

    expect(await screen.findByText(/date is required/i)).toBeInTheDocument();
  });

  test("Invalid (past) date shows error", async () => {
    const dateInput = screen.getByLabelText(/Select a date/i);

    await act(async () => {
      await userEvent.clear(dateInput);
      await userEvent.type(dateInput, "2020-01-01");
      await userEvent.tab();
    });

    expect(await screen.findByText(/please choose a valid date/i)).toBeInTheDocument();
  });

  test("Valid date passes validation", async () => {
    const dateInput = screen.getByLabelText(/Select a date/i);

    const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

    await act(async () => {
      await userEvent.clear(dateInput);
      await userEvent.type(dateInput, tomorrow);
      await userEvent.tab();
    });

    await waitFor(() => {
      expect(screen.queryByText(/date is required/i)).toBeNull();
      expect(screen.queryByText(/please choose a valid date/i)).toBeNull();
    });
  });

  test("Invalid number of guests shows error", async () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);

    await act(async () => {
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, "0");
      await userEvent.tab();
    });

    expect(await screen.findByText(/at least 1 guest/i)).toBeInTheDocument();
  });

  test("Valid number of guests passes validation", async () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);

    await act(async () => {
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, "5");
      await userEvent.tab();
    });

    await waitFor(() => {
      expect(screen.queryByText(/at least 1 guest/i)).toBeNull();
      expect(screen.queryByText(/maximum 10 guests/i)).toBeNull();
    });
  });

  test("Form submits correctly with valid data", async () => {
    const dateInput = screen.getByLabelText(/select a date/i);
    const timeSelect = screen.getByLabelText(/select a time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });

    const tomorrow = new Date(Date.now() + 86400000).toISOString().split("T")[0];

    await act(async () => {
      await userEvent.clear(dateInput);
      await userEvent.type(dateInput, tomorrow);
      await userEvent.selectOptions(timeSelect, "18:00");
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, "4");
      await userEvent.selectOptions(occasionSelect, "Birthday");
      await userEvent.click(submitButton);
    });

    expect(mockSubmitForm).toHaveBeenCalledTimes(1);
    expect(mockSubmitForm).toHaveBeenCalledWith({
      selectedDate: tomorrow,
      selectedTime: "18:00",
      selectedGuests: 4,
      selectedOccasion: "Birthday",
    });
  });

  test("Form does not submit when invalid", async () => {
    const submitButton = screen.getByRole("button", { name: /make your reservation/i });

    await act(async () => {
      await userEvent.click(submitButton);
    });

    expect(mockSubmitForm).not.toHaveBeenCalled();

    const guestsInput = screen.getByLabelText(/number of guests/i);
    await act(async () => {
      await userEvent.clear(guestsInput);
      await userEvent.type(guestsInput, "3");
      await userEvent.click(submitButton);
    });

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

});
