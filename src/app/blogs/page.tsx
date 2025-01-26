'use client';

import React, { useEffect, useState } from 'react';

const getArticles = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/articles', {
      cache: 'no-store',
    });
    if (!res.ok) {
      console.error('FAILED TO FETCH ARTICLES');
      return [];
    }
    return await res.json();
  } catch (error) {
    console.error('ERROR LOADING ARTICLES', error);
    return [];
  }
};

const Page: React.FC = () => {
  const [articles, setArticles] = useState<
    { topic: string; article: string }[]
  >([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(data.articles || []);
    };

    fetchArticles();
  }, []);

  return (
    <div className='min-h-screen text-white flex flex-col items-center justify-center px-4'>
      <header className='text-center mt-20 mb-12'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold text-white'>
          TECHNIQ
        </h1>
        <p className='text-lg md:text-xl italic text-gray-400'>
          Stay updated with the latest travel insights.
        </p>
      </header>
      <div className='mt-16 md:mt-24 max-w-4xl w-full'>
        {articles.map((item, index) => (
          <section key={index} className='w-full'>
            <article className='bg-gray-800 p-6 rounded-lg shadow-lg mb-8'>
              <h2 className='text-2xl md:text-3xl font-semibold mb-4'>
                {item.topic}
              </h2>
              <p className='text-base md:text-lg text-gray-300'>
                {item.article}
              </p>
            </article>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Page;
