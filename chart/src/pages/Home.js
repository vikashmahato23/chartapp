import React from "react";
import Bar from "../components/Bar/Bar";
import Scatter from "../components/Scatter/Scatter";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="item">
        <Bar />
      </div>
      <div className="item">
        <Scatter />
      </div>
    </div>
  );
};

export default Home;
