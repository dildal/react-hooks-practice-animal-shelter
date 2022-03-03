import React, { useEffect, useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  useEffect(() => {
   const initialDetch = fetch('http://localhost:3001/pets')
    .then(res => res.json())
    .then(data => setPets(data))
  }, []);
  

  function handleFilterChange(type){
    setFilters({type: type})
  }

  function handleFindPets(){
    const url = filters.type === 'all' ? 'http://localhost:3001/pets' : `http://localhost:3001/pets?type=${filters.type}`
      fetch(url)
      .then(res => res.json())
      .then(data => setPets(data))
  }

  function handleAdoptPet(id){
    setPets(pets.map(pet => {
      if(pet.id === id){
        pet.isAdopted = !pet.isAdopted;
      }
      return pet;
    }))
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={handleFilterChange} 
              onFindPetsClick={handleFindPets}
              filterType={filters.type}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
