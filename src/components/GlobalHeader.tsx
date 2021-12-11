import React from 'react';
import { useIsFetching } from 'react-query';

const GlobalHeader: React.FC<{ title?: string }> = ({ title }) => {
  const isFetching = useIsFetching();

  return (
    <header className='px-2 py-8 bg-blue-700 relative'>
      {Boolean(isFetching) && (
        <div className='absolute text-sm font-bold top-0 right-0 p-2 text-white flex items-center'>
          <span
            className='w-4 h-4 block border-2 border-yellow-500 mr-1 rounded-full animate-spin'
            style={{
              borderLeftColor: 'transparent'
            }}
          />
          <span>Fetching...</span>
        </div>
      )}

      <div className='mx-auto max-w-8xl'>
        <h1 className='font-bold text-3xl text-white mb-2'>{title || 'CrytoHub'}</h1>
        <p className='text-white opacity-80'>Crypto market information</p>
      </div>
    </header>
  );
};

export default GlobalHeader;
