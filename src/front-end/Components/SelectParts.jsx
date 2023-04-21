import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SelectParts() {
  const [parts, setParts] = useState([]);
  const [selectedParts, setSelectedParts] = useState(null);

  useEffect(() => {
    axios.get('/api/parts')
      .then((response) => setParts(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelectParts = (event, part) => {
    event.preventDefault();
    setSelectedParts(part);
  };

  return (
    <div>
      <ul>
        {parts.map((part) => (
          <li key={part.id} onClick={ (event) => handleSelectParts(event, part) }>
            {part.name}
          </li>
        ))}
      </ul>
      {selectedParts && (
        <div>
          <p>Selected part: {selectedParts.name}</p>
          <p>Price: {selectedParts.price}</p>
        </div>
      )}
    </div>
  )
}

export default SelectParts;
