import React from "react";

function Filters({onChangeType, onFindPetsClick, filterType}) {
  return (
    <div className="ui form">
      <h3>Animal type</h3>
      <div className="field">
        <select onChange={(e) => onChangeType(e.target.value)} name="type" id="type" aria-label="type" value={filterType}>
          <option value="all">All</option>
          <option value="cat">Cats</option>
          <option value="dog">Dogs</option>
          <option value="micropig">Micropigs</option>
        </select>
      </div>

      <div className="field">
        <button className="ui secondary button" onClick={onFindPetsClick}>Find pets</button>
      </div>
    </div>
  );
}

export default Filters;
