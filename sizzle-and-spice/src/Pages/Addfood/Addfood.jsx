import React from "react";
import { useFormik } from "formik";
import "../Signup/signup.css";
import { useNavigate } from "react-router-dom";

const Addfood = () => {
 
  const addFoodToDatabase = async (food) => {
    try {
      const response = await fetch("http://localhost:3000/api/menu/foods", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: food.type,
          price: parseInt(food.price, 10),
          category:food.category
        }),
      });

      const data = await response.json();

      if (data.success && data.menu) {
        console.log("Food added successfully:", data.menu);
        alert(
          `Food added successfully:\nTitle: ${data.menu.type}\nPrice: ${data.menu.price} \nCategory: ${data.menu.category}`
        );
        
      } else {
        console.log("Error adding food:", data.message);
        alert(`Error adding food: ${data.message}`);
      }
    } catch (e) {
      console.log("Error:", e.message);
      alert(`Error: ${e.message}`);
    }
  };

  const handleSubmit = async (formValues) => {
    try {
      await addFoodToDatabase(formValues);
    } catch (e) {
      console.log(e.message);
      setError(e.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      type: "",
      price: "",
      category: ""
    },

    onSubmit: handleSubmit,
  });

  return (
    <div className="form-side">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-container1">
          <div className="login-heading">
            <h2>Add New Food</h2>
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

export default Addfood;
