import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetchData(); 
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/menu/foods");
      const data = await response.json();
      setFoods(data.menu); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleDelete = async (foodId) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/menu/foods/${foodId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Refresh data after delete
        fetchData();
      } else {
        console.error("Failed to delete:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting:", error);
    }
  };

  const handleEdit = (foodId) => {
    navigate(`/Editfood/${foodId}`); // Navigate to the edit page with the food ID
  };

  return (
    <section className="admin-section">
      <div className="admin-button">
        <button
          className="button"
          onClick={() => {
            navigate("/Addfood");
          }}
        >
          Add new item
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
      <div className="group1-container">
        {foods.map((food, index) => (
          <div key={index} className="group-container">
            <div className="food-cards">
              <div className="food-heading">
                <p>{food.type}</p>
              </div>
              <div className="food-button">
                <p>Ksh {food.price}</p>
                <p>{food.category}</p>
                <div className="delete-edit-buttons">
                  <button
                    className="delbutton"
                    onClick={() => handleDelete(food.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="delbutton"
                    onClick={() => handleEdit(food.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Admin;
