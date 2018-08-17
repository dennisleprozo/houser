import React from "react";

export default function House(props) {
  return (
    <div>
      <h2>House</h2>
      <p>{props.name}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      <p>{props.image}</p>
      <p>{props.mortgage}</p>
      <p>{props.rent}</p>

      <button onClick={() => props.deleteHouse(props.id)}>Delete</button>
    </div>
  );
}
