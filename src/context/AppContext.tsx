import { AxiosError, AxiosResponse } from 'axios';
import React, { createContext, useState } from 'react';
import { useQuery } from 'react-query';
import { getCryptoGlobalPrices, getNews } from '../api';

interface IAppProvider {
  children: React.ReactNode | Array<React.ReactNode>;
}
interface IAppContext {
  display: string;
  updateDisplay: (x: 'news' | 'prices') => any;
  incrementLimit: any;
  prices: {
    data: any;
    status: string;
  };
  news: {
    data: any;
    status: string;
  };
}
const AppContext: React.Context<IAppContext> = createContext({
  display: 'prices',
  updateDisplay: (x) => {},
  incrementLimit: () => {},
  prices: {
    data: null,
    status: ''
  },
  news: {
    data: null,
    status: ''
  }
});

const AppProvider = ({ children }: IAppProvider) => {
  const [skip, setSkip] = useState(10);
  const [display, setDisplay] = useState('prices');
  const prices = useQuery(['prices', skip], ({ queryKey }) => getCryptoGlobalPrices(queryKey[1], 'usd'), {
    refetchInterval: 1000 * 60 * 15,
    enabled: display === 'prices',
    keepPreviousData: true
  });
  const news = useQuery('news', () => getNews('handpicked'), {
    refetchInterval: 1000 * 60 * 30,
    enabled: display === 'news'
  });

  function updateDisplay(value: 'news' | 'prices') {
    if (value === 'news') {
      news.refetch();
      setDisplay('news');
    } else if (value === 'prices') {
      prices.refetch();
      setDisplay('prices');
    }
  }

  function incrementLimit() {
    setSkip((old) => old + 10);
  }

  return (
    <AppContext.Provider
      value={{
        display,
        updateDisplay,
        incrementLimit,
        prices: {
          data: prices.data?.data?.coins,
          status: prices.status
        },
        news: {
          data: news.data?.data?.news,
          status: news.status
        }
      }}>
      {children}
    </AppContext.Provider>
  );
};
export { AppContext };
export default AppProvider;
