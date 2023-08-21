import React, { useState } from "react";
import Bio from "../Components/Bio";
import Quote from "../Components/Quote";
import Carousel from "../Components/Carousel";
import { Link } from "react-router-dom";
import MoreScreen from "./MoreScreen";

function App() {
  const [showcontent, setShowcontent] = useState(false);
  return (
    <div>
      <Quote />
      <div className="container">
        <Bio />
        <hr />
      </div>
      <div>
        <Carousel />
      </div>

      <Link
        className="text-center"
        onClick={(e) => {
          setShowcontent(!showcontent);
        }}
      >
        <div className="text-dark fw-bold container">
          {showcontent ? <>Click to see less.</> : <>Click to see more.</>}
          <hr />
        </div>
      </Link>

      {showcontent && <MoreScreen />}
    </div>
  );
}

export default App;
