import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Booked/booked.css";

const Booked = () => {
  const navigate = useNavigate();
  const [tables, setTables] = useState([]);
  const [error, setError] = useState(null);

   useEffect(() => {
     fetchData();
   }, []);

   const fetchData = async () => {
     try {
       const response = await fetch("http://localhost:3000/api/table/booking");
       const data = await response.json();
       setTables(data.menu);
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

  return (
    <section>
      <div className="booked-admin-view">
        <div className="admin-button">
          <button className="button" onClick={() => navigate("/Admin")}>
            View Dashboard
          </button>
          <button className="button" onClick={() => navigate("/Order")}>
            View Orders
          </button>
          <button className="button" onClick={() => navigate("/Booked")}>
            View Bookings
          </button>
        </div>

        <div className="view-booking">
          <h2>Booked Tables</h2>
        </div>
        <div className="booked-container">
          <table border="">
            <thead>
              <tr>
                <th>Table of</th>
                <th>Day</th>
                <th>Time</th>
              </tr>
            </thead>
             <tbody>         
                {tables.map((item, index) => {
                return(

                <tr key={item.id}>
                    <td>{item.table}</td>
                    <td>{item.date}</td>
                    <td>{item.time}</td>
                </tr>
                );
            })}
            </tbody>
                </table>
              </div>
            
           : (
            <div className="no-data">No bookings found</div>
          )
        </div>
    </section>
  );
};

export default Booked;
