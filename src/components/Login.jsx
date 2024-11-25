import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // State to manage successful login

  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginUser = { email, password };

    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        body: JSON.stringify(loginUser),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message || "Invalid credentials. Please try again.");
        setSuccess(false); // Reset success state
      } else {
        setError("");
        setSuccess(true); // Set success state
        setEmail("");
        setPassword("");

        // Optionally, redirect or store a token upon successful login
        setTimeout(() => {
          console.log("Redirecting to dashboard...");
          // Example: navigate('/dashboard'); or window.location = '/dashboard';
        }, 2000); // Redirect after 2 seconds
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.");
      setSuccess(false);
    }
  };

  return (
    <div className="container my-cont">
      {error && <div className="alert alert-danger">{error}</div>}
      {success && <div className="alert alert-success">Login successful <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" id="Check-Square--Streamline-Core" height={14} width={14} ><desc>{"Check Square Streamline Icon: https://streamlinehq.com"}</desc><g id="check-square--check-form-validation-checkmark-success-add-addition-box-square-tick"><path id="Rectangle 711" fill="#8fbffa" d="M3.5 0h7S14 0 14 3.5v7s0 3.5 -3.5 3.5h-7S0 14 0 10.5v-7S0 0 3.5 0" strokeWidth={1} /><path id="Vector (Stroke)" fill="#2859c5" fillRule="evenodd" d="M10.386 4.164a0.75 0.75 0 0 1 0.117 1.055l-4 5a0.75 0.75 0 0 1 -1.036 0.131l-2 -1.5a0.75 0.75 0 1 1 0.9 -1.2l1.419 1.064L9.33 4.282a0.75 0.75 0 0 1 1.055 -0.118Z" clipRule="evenodd" strokeWidth={1} /></g></svg></div>}

      <h2 className="text-center">Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
