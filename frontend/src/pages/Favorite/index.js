import React, { useState } from 'react';
import './style.scss';

const FavoritePage = () => {
  const [favorites, setFavorites] = useState([]);

  // Add favorite item function
  const addToFavorites = (item) => {
    setFavorites([...favorites, item]);
  };

  // Remove favorite item function
  const removeFromFavorites = (item) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== item.id);
    setFavorites(updatedFavorites);
  };

  return (
    <div className="favorite-page">
        <h1>hhhh</h1>
      {/* Render favorite items */}
      {/* {favorites.map((favorite) => (
        <div className="favorite-item" key={favorite.id}>
          <p>{favorite.title}</p>
          <button onClick={() => removeFromFavorites(favorite)}>Remove</button>
          <button onClick={() => addToFavorites(favorite)}>Add</button>
        </div>
      ))} */}
    </div>
  );
};

export default FavoritePage;
