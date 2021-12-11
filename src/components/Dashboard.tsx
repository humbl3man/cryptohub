import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DisplayToggle from './DisplayToggle';
import News from './News';
import Prices from './Prices';

export default function Dashboard() {
  const { display } = useContext(AppContext);

  return (
    <>
      <DisplayToggle />
      {display === 'prices' && <Prices />}
      {display === 'news' && <News />}
    </>
  );
}
