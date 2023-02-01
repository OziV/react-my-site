import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import ProjectsTop from "./components/ProjectsTop";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function Home() {
  return (
    <section className="section">
      <Sidebar />
      <Header />
      <Profile />
      <ProjectsTop />
      <Projects />
      <Footer />
    </section>
  );
}

export default Home;
