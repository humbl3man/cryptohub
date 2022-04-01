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
      {newsData.map((newsArticle: NewsArticle) => {
        return (
          <a href={newsArticle.link} rel="noreferrer noopener" target="_blank" className="bg-white mb-4 block p-2 hover:bg-blue-50">
            <h2 className="font-bold text-lg mb-2">{newsArticle.title}</h2>
            <p>{newsArticle.description}</p>
            <p className="italic opacity-75 text-sm mt-4">
              Source: <span>{newsArticle.source}</span>
            </p>
          </a>
        );
      })}
    </>
  );
};

export default News;
