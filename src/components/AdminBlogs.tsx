'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import DeleteArticle from './DeleteArticle';
import { useRouter } from 'next/navigation';

const getArticles = async () => {
  try {
    const res = await fetch('https://praveen-web.vercel.app/api/articles', {
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

const AdminBlogs: React.FC = () => {
  const [articles, setArticles] = useState<
    { topic: string; article: string; _id: string }[]
  >([]);
  const [topic, setTopic] = useState('');
  const [article, setArticle] = useState('');

  const router = useRouter();

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await getArticles();
      setArticles(data.articles || []);
    };

    fetchArticles();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic || !article) {
      alert('Topic and Content cannot be empty');
      return;
    }
    try {
      const res = await fetch('https://praveen-web.vercel.app/api/articles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic, article }),
      });

      if (!res.ok) {
        const errorMessage = await res.text();
        console.log('Error response:', errorMessage);
        alert('Error posting article');
        return;
      }

      const newArticle = await res.json();
      console.log('New Article:', newArticle); // Debugging purpose
      setArticles((prevArticles) => [...prevArticles, newArticle]);
      setTopic('');
      setArticle('');
      router.push('/admin');
    } catch (error) {
      console.log('Error:', error);
      alert('Something went wrong!');
    }
  };

  return (
    <section id='blogs' className='mb-12'>
      <h3 className='text-6xl font-bold text-yellow-400 mb-6'>Blogs</h3>

      {/* Input fields for topic and content */}
      <form onSubmit={handleSubmit} className='mb-6'>
        <input
          type='text'
          onChange={(e) => setTopic(e.target.value)}
          value={topic}
          placeholder='Enter blog topic'
          className='w-full p-3 mb-4 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />
        <textarea
          onChange={(e) => setArticle(e.target.value)}
          value={article}
          placeholder='Enter blog content'
          rows={5}
          className='w-full p-3 mb-4 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400'
        />
        <button
          type='submit'
          className='px-6  bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-500 transition'
        >
          Post Article
        </button>
      </form>

      {/* Displaying posted articles */}
      <div className='space-y-4'>
        {articles.length > 0 ? (
          articles.map((item, index) => (
            <div key={index} className='bg-gray-600 p-6 rounded-lg'>
              <h2 className='text-3xl font-semibold mb-4'>{item.topic}</h2>
              <p className='text-lg text-gray-300'>{item.article}</p>
              <div className='flex mt-5 space-x-4 '>
                <Link href={`/edit/${item._id}`}>
                  <button className='bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition'>
                    Edit
                  </button>
                </Link>
                <DeleteArticle id={item._id} />
              </div>
            </div>
          ))
        ) : (
          <p className='text-gray-300'>No articles posted yet.</p>
        )}
      </div>
    </section>
  );
};

export default AdminBlogs;
