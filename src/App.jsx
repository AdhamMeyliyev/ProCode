import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ErrorPage from "./components/errorPage/ErrorPage";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import HomePage from "./components/homePage/HomePage";
import './App.css'
// import Card from './components/card/Card'
import About from './components/about/About'
import CourseDetails from './components/courseDetails/CourseDetails'
import Courses from './components/allCourses/Courses'
import Blog from './components/allBlogs/Blog'

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/errorpage" element={<ErrorPage />} />
            {/* <Route path='/card' element={<Card/>}/> */}
            <Route path='/about' element={<About/>}/>
            <Route path='/course/:id' element={<CourseDetails/>}/>
            <Route path='/courses' element={<Courses/>}/>
            <Route path='/blog' element={<Blog/>}/>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
