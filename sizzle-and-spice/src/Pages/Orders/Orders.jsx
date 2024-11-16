import React from 'react'
import { useNavigate } from "react-router-dom";
import "./orders.css"
const Orders = () => {
  const navigate = useNavigate();
  return (
    <section className="orders-made">
      <div className="admin-button">
        <button
          className="button"
          onClick={() => {
            navigate("/Admin");
          }}
        >
          view dashboard
        </button>

        <button
          className="button"
          onClick={() => {
            navigate("/Order");
          }}
        >
          View Orders
        </button>

        <button
          className="button"
          onClick={() => {
            navigate("/Booked");
          }}
        >
          View Bookings
        </button>
      </div>
      <div className="customers-order">
        <h2>Orders Made</h2>
      </div>
    </section>
  );
}

export default Orders