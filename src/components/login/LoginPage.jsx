import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginPage.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // 👁️ password ko‘rsatish
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const savedUser = JSON.parse(localStorage.getItem("user"));

    setTimeout(() => {
      setLoading(false);

      if (!savedUser) {
        toast.error("Foydalanuvchi ro'yxatdan o'tmagan!");
        return;
      }

      if (email === savedUser.email && password === savedUser.password) {
        toast.success("Login muvaffaqiyatli!");
        navigate("/");
      } else {
        toast.error("Email yoki parol noto‘g‘ri!");
      }
    }, 1000);
  };

  return (
    <div className="login-wrapper">
      <ToastContainer position="top-center" autoClose={3000} />

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Kirish</h2>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Emailingizni kiriting"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="username"
        />

        <label htmlFor="password">Parol</label>
        <div className="password-wrapper">
          <input
            id="password"
            type={showPassword ? "text" : "password"} // 👁️ show/hide
            placeholder="Parolingizni kiriting"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <button
            type="button"
            className="toggle-password1"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🫣" : "🤐"}
          </button>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Kutilmoqda..." : "Kirish"}
        </button>

        <div className="signup-redirect">
          <h4>Ro'yxatdan o'tmaganmisiz?</h4>
          <button onClick={() => navigate("/signup")}>Ro'yxatdan o'tish</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
