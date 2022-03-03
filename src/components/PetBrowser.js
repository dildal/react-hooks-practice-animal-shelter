import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {
  const petComponents = pets.map(pet => {
    return <Pet 
              pet={pet}
              key={pet.id}
              onAdoptPet={onAdoptPet}
            />
  }) 
  return <div className="ui cards">{petComponents}</div>;
}

export default PetBrowser;
