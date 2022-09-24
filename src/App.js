import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
          <Route path="/" element={<Profile userName="cosxsinx" />} />
          <Route path="/projects" element={<Projects userName="cosxsinx" />} />
          <Route
            path="/projects/:name"
            element={<ProjectDetail userName="octocat" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
