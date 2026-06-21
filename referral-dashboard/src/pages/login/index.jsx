import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate, Navigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const token = Cookies.get("jwt_token");

  if (token) {
    return <Navigate to="/" replace />;
  }

  const submitForm = async event => {
    event.preventDefault();

    const userDetails = {
      email,
      password,
    };

    const url =
      "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (response.ok) {
        setError("");

        Cookies.set("jwt_token", data.data.token, {
          expires: 7,
        });

        navigate("/", { replace: true });
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (err) {
      console.log(err);
      setError("Unable to connect. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>Go Business</h1>

      <p>Sign in to open your referral dashboard.</p>

      <form className="login-form" onSubmit={submitForm}>
        <div className="input-group">
          <label htmlFor="email">Email</label>

          <input
            type="email"
            id="email"
            value={email}
            placeholder="you@example.com"
            onChange={event => setEmail(event.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>

          <input
            type="password"
            id="password"
            value={password}
            placeholder="********"
            onChange={event => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit" className="button">
          Sign in
        </button>

        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
};

export default Login;