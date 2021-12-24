import React, { useContext } from 'react';
import { useIsFetching } from 'react-query';
import { AppContext } from '../context/AppContext';
import { formatVolume } from '../utils';
import formatPrice from '../utils/formatPrice';

const Prices: React.FC = () => {
  const ctx = useContext(AppContext);
  const {
    prices: { data: priceData, status },
    incrementLimit
  } = ctx;
  const isFetching = useIsFetching();

  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <table className='table-auto w-full'>
        <thead className='text-sm'>
          <tr className='bg-gray-100 text-left'>
            <th className='p-2 text-center border-r border-l border-gray-300'>Rank</th>
            <th className='p-2 border-r border-gray-300'>Name</th>
            <th className='p-2 border-r border-gray-300'>Price</th>
            <th className='p-2 border-r border-gray-300'>Price Change (1w)</th>
            <th className='p-2 border-r border-gray-300'>Market Cap</th>
            <th className='p-2 border-r border-gray-300'>Volume</th>
            <th className='p-2'>Available Supply</th>
          </tr>
        </thead>
        <tbody>
          {priceData &&
            priceData.map((coin: any) => {
              return (
                <tr key={coin.id}>
                  <td className='text-center border-r border-l border-gray-300'>{coin.rank}</td>
                  <td className='p-2'>
                    <div className='flex'>
                      <img src={coin.icon} className='w-8 h-8 inline-block mr-3' alt={coin.id} />
                      <span>
                        {coin.name} - <span className='opacity-50'>{coin.symbol}</span>
                      </span>
                    </div>
                  </td>
                  <td className='pl-2'>{formatPrice(coin.price)}</td>
                  <td className='pl-2'>{coin.priceChange1w}%</td>
                  <td className='pl-2'>{formatVolume(coin.marketCap)}</td>
                  <td className='pl-2'>{formatVolume(coin.volume)}</td>
                  <td className='pl-2'>{formatVolume(coin.availableSupply)}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className='mt-4'>
        <button
          type='button'
          disabled={Boolean(isFetching)}
          className='block mx-auto max-w-xs w-52 border bg-white text-blue-800 border-blue-800 leading-tight py-2 px-4 text-sm rounded-sm font-bold hover:bg-blue-800 hover:text-white transition'
          onClick={() => incrementLimit()}>
          {isFetching ? 'Fetching...' : 'Load Next 10'}
        </button>
      </div>
    </div>
  );
};

export default Prices;
