import React, { useEffect, useState } from "react";

export default function ItemCard(props) {
  const { name, index, deleteFunc } = props;
  let deleteMe = () => deleteFunc(index);
  return (
    <li>
      <div>{name}</div>
      <button onClick={deleteMe}>Delete Item</button>
      <button onClick={() => console.log("Clicked")}>Edit</button>
    </li>
  );
}
