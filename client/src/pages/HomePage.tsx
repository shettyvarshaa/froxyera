import React from 'react';
import LazyNav from "../components/LazyNav";
import { ModeToggle } from "@/components/mode-toggle";
import './HomePage.css'; // Assuming you are using CSS files for styling

function HomePage() {
  return (
    <div className="homepage-container">
      <ModeToggle />
      <div className="content">
        <h1>Hi !</h1>
        <LazyNav page='home' />
      </div>
    </div>
  );
}

export default HomePage;