import { useState } from "react";

export default function Player({ initialName , symbol }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleOnClick() {
    setIsEditing((editing) => !editing); // updating based on last state () => ...
  }

  function handleChange(event){
    setName(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input type="text" required value={name} onChange={handleChange} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleOnClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
