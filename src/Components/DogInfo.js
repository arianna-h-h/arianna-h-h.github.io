import React from 'react';

export const DogInfo = ({ dog }) => {
  return (
    <div className='dog-info'>
      <h2>The dog nearest you is....</h2>
      <div>Description: {dog.description_of_dog}</div>
      <div>Address: {dog.address}</div>
      <div>Owner Name: {dog.first_name + ' ' + dog.last_name}</div>
    </div>
  );
};
