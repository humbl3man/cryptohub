import React from 'react';

export default function CoinCard({ id, symbol, price, icon }) {
  return (
    <article className='flex mb-6 border border-t-1 border-b-1 border-r-1 border-l-4 border-blue-700 p-4'>
      <div className='mr-4'>
        <img width={40} height={40} src={icon} alt={id} />
      </div>
      <div>
        <div className='font-bold mb-1'>
          {id} ({symbol})
        </div>
        <div>${price.toFixed(5)}</div>
      </div>
    </article>
  );
}
