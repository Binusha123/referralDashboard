import { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const submitForm = async e => {
    e.preventDefault();

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

    const response = await fetch(url, options);
    const data = await response.json();

    if (response.ok) {
      Cookies.set("jwt_token", data.data.token);

      navigate("/");
    } else {
      setError(data.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Go Business</h1>

      <p>Sign in to open your referral dashboard.</p>

      <form onSubmit={submitForm}>
        <label htmlFor="email">Email</label>

        <input
          type="email"
          id="email"
          value={email}
          placeholder="you@example.com"
          onChange={e => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>

        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />

        <button type="submit">Sign in</button>

        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
};

export default Login;