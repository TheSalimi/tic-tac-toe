import { useState } from "react";

export default function Player({ initialName , symbol, isActive,onChangeName}) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(initialName);

  function handleOnClick() {
    if(isEditing){
      onChangeName(symbol,name);
    }
    
    setIsEditing((editing) => !editing); // updating based on last state () => ...
  }

  function handleChange(event){
    setName(event.target.value);
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{name}</span>}
        {isEditing && <input type="text" required value={name} onChange={handleChange} />}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleOnClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
