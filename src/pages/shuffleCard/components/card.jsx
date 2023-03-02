import React from "react";
import diamond from "../../../assets/icons/diamonds.png";
import heart from "../../../assets/icons/hearts.png";
import club from "../../../assets/icons/clubs.png";
import spade from "../../../assets/icons/spades.png";

export default function card({ value, suit }) {
  return (
    <div
      style={
        suit == "diamonds" || suit == "hearts"
          ? {
              height: "30vh",
              width: "8%",
              display: "inline-flex",
              border: "2px solid red",
              margin: "0.4%",
              boxShadow: "4px 4px 0px grey",
            }
          : {
              height: "30vh",
              width: "8%",
              display: "inline-flex",
              border: "2px solid black",
              margin: "0.4%",
              boxShadow: "4px 4px 0px grey",
            }
      }
    >
      <div style={{ height: "100%", flex: 1, display: "inline-block" }}>
        {" "}
        <div>
          <div style={{ fontSize: "3vh" }}>{value}</div>
          {(() => {
            switch (suit) {
              case "hearts":
                return <img src={heart} style={{ width: "50%" }} />;
              case "diamonds":
                return <img src={diamond} style={{ width: "50%" }} />;
              case "clubs":
                return <img src={club} style={{ width: "50%" }} />;
              case "spades":
                return <img src={spade} style={{ width: "50%" }} />;
            }
          })()}
        </div>
      </div>
      <div
        style={{
          alignItems: "center",
          height: "100%",
          flex: 1,
          display: "inline-flex",
        }}
      >
        {(() => {
          switch (suit) {
            case "hearts":
              return <img style={{ width: "100%" }} src={heart} />;
            case "diamonds":
              return <img style={{ width: "100%" }} src={diamond} />;
            case "clubs":
              return <img style={{ width: "100%" }} src={club} />;
            case "spades":
              return <img style={{ width: "100%" }} src={spade} />;
          }
        })()}
      </div>
      <div style={{ height: "100%", flex: 1, display: "inline-block" }}></div>
    </div>
  );
}
