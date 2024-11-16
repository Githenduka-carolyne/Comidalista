import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import "../Signup/signup.css";

const Editfood = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [food, setFood] = useState({ type: "", price: "", category: "" });

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/menu/foods/${id}`
        );
        const data = await response.json();
        setFood(data.menu);
      } catch (error) {
        console.error("Error fetching food:", error);
      }
    };

    fetchFood();
  }, [id]);

  const formik = useFormik({
    initialValues: {
      type: food.type,
      price: food.price,
      category: food.category
    },
    enableReinitialize: true, 
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/menu/foods/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        if (response.ok) {
          navigate("/Admin"); 
        } else {
          console.error("Failed to update:", response.statusText);
        }
      } catch (error) {
        console.error("Error updating food:", error);
      }
    },
  });

  return (
    <div className="form-side">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container1">
          <div className="login-heading">
            <h2>Edit Food</h2>
          </div>
          <div className="forms-holder">
            <div className="form-details">
              <label htmlFor="type">Type</label>
              <div className="input-div">
                <input
                  id="type"
                  name="type"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.type}
                />
              </div>
            </div>

            <div className="form-details">
              <label htmlFor="price">Price</label>
              <div className="input-div">
                <input
                  id="price"
                  name="price"
                  type="number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.price}
                />
              </div>
            </div>

            <div className="form-details">
              <label htmlFor="category">Category</label>
              <div className="input-div">
                <input
                  id="category"
                  name="category"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.category}
                />
              </div>
            </div>

            <button type="submit" className="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Editfood;
