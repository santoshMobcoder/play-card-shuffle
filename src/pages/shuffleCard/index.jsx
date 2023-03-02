import React from "react";
import Card from "./components/card";

export default function index({ deckCardArr }) {
  return (
    <div style={{ textAlign: "center" }}>
      {deckCardArr.map(({ value, suit }, i) => (
        <Card key={i} value={value} suit={suit} />
      ))}
    </div>
  );
}
