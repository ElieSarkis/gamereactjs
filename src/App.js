import React from "react";
import bgd from "./assets/bgd.jpg";
import CardContainer from "./components/CardContainer";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgd})`,
        height: "100%",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <CardContainer />
    </div>
  );
};

export default App;
