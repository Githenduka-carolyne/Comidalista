import React from "react";
import bookpic from "../../assets/booktable.jpeg";
import { useFormik } from "formik";

import "./reviews.css";

const Reviews = () => {
  
  const addBookingToDatabase = async (book) => {
    try {
      const response = await fetch("http://localhost:3000/api/table/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          table: book.table,
          date: book.date,
          time: book.time,
        }),
      });

      const data = await response.json();
      console.log("Response from server:", data);

      if (data.success && data.booking) {
        console.log("Booked successfully:", data.booking);
        alert(
          `Booking made successfully:\nTable: ${data.booking.table}\nDate: ${data.booking.date}\nTime: ${data.booking.time}`
        );
      } else if (data.message) {
        console.log("Error in booking:", data.message);
        alert(`Error in booking: ${data.message}`);
      } else {
        console.log("Unexpected response structure:", data);
        alert(`Unexpected response structure: ${JSON.stringify(data)}`);
      }
    } catch (e) {
      console.log("Error:", e.message);
      alert(`Error: ${e.message}`);
    }
  };

  const handleSubmit = async (formValues) => {
    try {
      await addBookingToDatabase(formValues);
    } catch (e) {
      console.log(e.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      table: "",
      date: "",
      time: "",
    },
    onSubmit: (data) => {
      handleSubmit(data);
    },
  });

  return (
    <section className="review-section">
      <div className="review-cards-container">
        <div className="review-form-side">
          <form onSubmit={formik.handleSubmit}>
            <div className="form-container">
              <div className="form1-side">
                <div className="signin-heading">
                  <h2>Book Table</h2>
                </div>
                <div className="forms-holder">
                  <div className="form-details">
                    <label htmlFor="table">Table of</label>
                    <input
                      id="table"
                      name="table"
                      type="number"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.table}
                    />
                  </div>

                  <div className="form-details">
                    <label htmlFor="date">Day</label>
                    <input
                      id="date"
                      name="date"
                      type="date"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.date}
                    />
                  </div>

                  <div className="form-details">
                    <label htmlFor="time">Time</label>
                    <input
                      id="time"
                      name="time"
                      type="time"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.time}
                    />
                  </div>
                  <button
                    type="submit"
                    className="submit"
                    style={{ cursor: "pointer" }}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="review-image-side">
          <div className="review-image-holder">
            <img src={bookpic} alt="people eating burgers"></img>
          </div>
        </div>
        {/* <div className="error">
          <p>{error}</p>
        </div> */}
      </div>
    </section>
  );
};

export default Reviews;
