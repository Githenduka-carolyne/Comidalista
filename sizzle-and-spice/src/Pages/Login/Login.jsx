import React from 'react'
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
function Login() {
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (formValues) => {
      try {
        const response = await fetch("http://localhost:3000/api/users/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
          credentials: "include",
        });
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        }

        const data = await response.json();
        console.log(data);

        if (data.success === true) {
          console.log(data);
          navigate("/");
        } else {
          setError(data.message);
        }
      } catch (e) {
        console.log(e.message)
        setError(e.message);
      }
    };
    const formik = useFormik({
      initialValues: {
        emailAddress: "",
        password: "",
      },
      // validate,
      onSubmit: handleSubmit,
    });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-container">
        <div className="form1-side">
          <div className="signin-heading">
            <h2>Log in</h2>
          </div>
          <div className="forms-holder">
            <div className="form-details">
              <label htmlFor="emailAddress">Email Address</label>

              <input
                id="emailAddress"
                name="emailAddress"
                type="emailAddress"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.emailAddress}
              />
            </div>

            <div className="form-details">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                name="password"
                type="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
            </div>
            <button type="submit" className="submit">
              Log In
            </button>
            <div className="account">
              Don't have an account? <Link to="/Signup">Sign up</Link>
            </div>
            <div className="error-info">
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login