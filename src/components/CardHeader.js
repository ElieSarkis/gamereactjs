import React from "react";

const CardHeader = () => {
  const headerTextOne = "Flip to match 3 recharge cards and WIN 5 KWD";
  const headerTextTwo = "Good Luck!";

  return (
    <div
      style={{
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#E75480",
          width: "35%",
          color: "white",
          paddingTop: 8,
          paddingBottom: 8,
          float: "none",
          margin: "0 auto",
          fontSize: 20,
        }}
      >
        <div>{headerTextOne} </div> <div> {headerTextTwo}</div>
      </div>
    </div>
  );
};

export default CardHeader;
