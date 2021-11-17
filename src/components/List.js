import React, { useState } from 'react';

import '../styles/List.css';

const List = () => {
  const [items, setItems] = useState([]);

  const addFirstItem = () => {
    setItems([
      {name: 'Some item ' + new Date().toISOString().substring(11, 19)}, 
      ...items
    ]);
  }

  const addLastItem = () => {
    setItems([
      ...items, 
      {name: 'Some item ' + new Date().toISOString().substring(11, 19)}
    ]);
  }

  return (
    <div className="list-container">
      <div className="list-buttons">
        <button onClick={addFirstItem}>Dodaj na początek</button>
        <button onClick={addLastItem}>Dodaj na koniec</button>
      </div>
      <h3>Items:</h3>
      <ul>
        {items.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;




