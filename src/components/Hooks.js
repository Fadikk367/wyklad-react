import React, {useState, useEffect} from 'react';

import '../styles/Hooks.css';

const Hooks = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log('useEffect');

    // return () => {
    //   console.log('useEffect - CLEANUP!');
    // }
  });

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  const toggleDescription = () => {
    setIsOpen(prev => !prev);
  }

  return (
    <div>
      <div className="counter">
        <button onClick={increment}>+</button>
        <span>Counter: {count}</span>
        <button onClick={decrement}>- </button>
      </div>
      <div className="details">
        <button onClick={toggleDescription}>
          {isOpen ? 'Hide' : 'Show more'}
        </button>
        <p style={{display: isOpen ? 'block' : 'none'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nihil eum quia tempora, obcaecati aperiam reiciendis qui pariatur sunt accusantium fugit sed dolorum iusto corrupti. Delectus similique ex nemo ducimus? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta corrupti hic nemo aspernatur atque provident at sequi molestias, modi accusamus excepturi, assumenda repellendus iure, fuga laudantium harum suscipit! Eveniet, dolores!</p>
      </div>
    </div>
  )
}

export default Hooks;
