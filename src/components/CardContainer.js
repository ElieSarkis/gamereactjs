import React from "react";
import CardHeader from "./CardHeader";
import CardList from "./CardList";

const CardContainer = () => {
  return (
    <div style={{ alignSelf: "center", textAlign: "center" }}>
      <CardHeader />
      <CardList />
    </div>
  );
};

export default CardContainer;
