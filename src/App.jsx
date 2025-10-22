import React from "react";
import {Link} from "react-router-dom";
import './index.css';


const App = () => {
  return (
    <div>
      <section className="hero_section">
        <div className="hero_content">
          <h1>Welcome to Banking App</h1>
          <p>Your reliable partner in managing finances with ease and security.</p>
          <a href="/get-started" className="cta_button">Get Started</a>
        </div>
      </section>
    </div>
  );
};
export default App;