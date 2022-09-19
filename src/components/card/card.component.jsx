import React from "react";
import "../card/card.styles.css";

export const Card = (props) => {
  console.log(props.monster.first_name, "single card");
  return (
    <div className="card-container">
      <img
        src={`https://avatars.dicebear.com/api/avataaars/${props.monster.id}.svg
`}
        alt="monster"
      />
      <h1>{props.monster.first_name + " " + props.monster.last_name}</h1>
      <p>{props.monster.email}</p>
    </div>
  );
};
