import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

export default function DisplayToggle() {
  const { display, updateDisplay } = useContext(AppContext);
  const buttonBaseClass = 'px-2 py-1 border border-blue-600';
  return (
    <div className='mb-8'>
      <button className={`${buttonBaseClass} ${display === 'prices' ? 'bg-blue-600 text-white' : ''}`} type='button' onClick={() => updateDisplay('prices')}>
        Prices
      </button>
      <button className={`${buttonBaseClass} ${display === 'news' ? 'bg-blue-600 text-white' : ''}`} type='button' onClick={() => updateDisplay('news')}>
        News
      </button>
    </div>
  );
}
