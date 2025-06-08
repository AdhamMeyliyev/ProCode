import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./SignUp.css";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Parollar mos kelmayapti!", {
        position: "top-center",
        autoClose: 3000,
      });
      return;
    }

    const user = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };
    localStorage.setItem("user", JSON.stringify(user));

    toast.success("Ro'yxatdan o'tdingiz!", {
      position: "top-center",
      autoClose: 3000,
    });

    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setTimeout(() => {
      window.location.href = "/login";
    }, 3000);
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Ro'yxatdan o'tish</h2>

        <label htmlFor="username">Foydalanuvchi nomi</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Foydalanuvchi nomi"
          value={formData.username}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email manzilingiz</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Parol</label>
        <div className="password-wrapper">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Parolni kiriting"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <label htmlFor="confirmPassword">Parolni tasdiqlash</label>
        <div className="password-wrapper">
          <input
            type={showConfirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Parolni qaytadan kiriting"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button type="submit">Ro'yxatdan o'tish</button>
      </form>
      <ToastContainer />
    </div>
  );
}
