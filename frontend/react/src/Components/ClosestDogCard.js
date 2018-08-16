import React from 'react';
import { DogImage } from './DogImage';
import { DogInfo } from './DogInfo';

export const ClosestDogCard = ({ dog }) => {
  const newDog = { ...dog[0] };
  return (
    <div className='card-wrapper'>
      <DogImage dog={newDog} />
      {/* <img className='header-logo' src={logo} alt={'Tribu Logo'} /> */}
      <DogInfo dog={newDog} />
    </div>
  );
};
