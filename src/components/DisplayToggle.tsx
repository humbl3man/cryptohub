import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const DisplayToggle = () => {
  const { display, updateDisplay } = useContext(AppContext);
  const buttonBaseClass = 'select-none pr-2';
  const activeClass = 'text-gray-400 pointer-events-none';
  const inactiveClass = 'text-blue-600 underline';

  return (
    <div className='mb-8 pb-4 border-b border-gray-300'>
      <button className={`${buttonBaseClass} ${display === 'prices' ? activeClass : inactiveClass}`} type='button' onClick={() => updateDisplay('prices')}>
        Prices
      </button>
      <button className={`${buttonBaseClass} ${display === 'news' ? activeClass : inactiveClass}`} type='button' onClick={() => updateDisplay('news')}>
        News
      </button>
    </div>
  );
};

export default DisplayToggle;
