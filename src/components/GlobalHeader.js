import React from 'react';
import { useIsFetching } from 'react-query';

export default function GlobalHeader() {
  const isFetching = useIsFetching();

  return (
    <header className='px-2 py-8 bg-blue-700 relative'>
      {Boolean(isFetching) && <div className='absolute text-sm font-bold top-0 left-0 p-2 text-white'>Fetching...</div>}
      <div className='mx-auto max-w-8xl'>
        <h1 className='font-bold text-3xl text-white mb-2'>CrytoHub</h1>
        <p className='text-white opacity-80'>Cryto market information</p>
      </div>
    </header>
  );
}
