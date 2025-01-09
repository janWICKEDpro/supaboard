import React from "react";
import "../styles/Getstarted.css";
import { Link } from "react-router";

function GetStared() {
  return (
    <div className="background">
      <h1>SupaBoard</h1>
      <h3>An environment for innovation and Creativity.</h3>
      <p>
        SupaBoard is your space for collaborating with peers, team members and
        many more
      </p>
      <Link className="get-started-btn" to="/auth">
        Get Started
      </Link>
      <p className="copyright">Copyrigh @SupaBoard 2025.</p>
    </div>
  );
}

export default GetStared;
