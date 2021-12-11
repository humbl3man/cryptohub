import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const News: React.FC = () => {
  const {
    news: { data: newsData, status }
  } = useContext(AppContext);
  if (status === 'loading') return <div>Loading News...</div>;
  return (
    <>
      {newsData.map((newsArticle: any) => {
        return (
          <article className='bg-white mb-4'>
            <h2 className='font-bold text-lg mb-2'>{newsArticle.title}</h2>
            <p>{newsArticle.description}</p>
          </article>
        );
      })}
    </>
  );
};

export default News;
