import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import About from "./components/about/About";
import CourseDetails from "./components/courseDetails/CourseDetails";
import Courses from "./components/allCourses/Courses";
import Blog from "./components/allBlogs/Blog";
import Login from "./components/login/LoginPage";
import SignUp from "./components/sign/SignUp";

import './App.css';

// Foydalanuvchi login bo‘lganini tekshiruvchi komponent
const PrivateRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? children : <Navigate to="/login" />;
};

// Layout ichida Header/Footer faqat Login yoki SignUp bo'lmaganda ko'rinadi
const Layout = ({ children }) => {
  const location = useLocation();
  const hideLayout = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div className="app-container">
      {!hideLayout && <Header />}
      <main className="main-content">{children}</main>
      {!hideLayout && <Footer />}
    </div>
  );
};

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Router>
      <Layout>
        <Routes>
          {/* Default route */}
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/home" />
              ) : (
                <Navigate to="/signup" />
              )
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Himoyalangan sahifalar */}
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/courses"
            element={
              <PrivateRoute>
                <Courses />
              </PrivateRoute>
            }
          />
          <Route
            path="/course/:id"
            element={
              <PrivateRoute>
                <CourseDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/blog"
            element={
              <PrivateRoute>
                <Blog />
              </PrivateRoute>
            }
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
