import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { NewsArticle } from '../types/News';

const News: React.FC = () => {
  const {
    news: { data: newsData, status }
  } = useContext(AppContext);
  if (status === 'loading') return <div>Loading News...</div>;
  return (
    <>
      {newsData.map((item: NewsArticle) => {
        return (
          <a key={item.id} href={item.link} rel="noreferrer noopener" target="_blank" className="bg-white mb-4 block p-2 hover:bg-blue-50">
            <h2 className="font-bold text-lg mb-2">{item.title}</h2>
            <p>{item.description}</p>
            <p className="italic opacity-75 text-sm mt-4">
              Source: <span>{item.source}</span>
            </p>
          </a>
        );
      })}
    </>
  );
};

export default News;
