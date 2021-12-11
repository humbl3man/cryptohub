import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DisplayToggle from './DisplayToggle';
import News from './News';
import Prices from './Prices';

const Dashboard: React.FC = () => {
  const { display } = useContext(AppContext);

  return (
    <>
      <DisplayToggle />
      {display === 'prices' && <Prices />}
      {display === 'news' && <News />}
    </>
  );
};

export default Dashboard;
