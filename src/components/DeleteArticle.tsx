import React from 'react';
import { useRouter } from 'next/navigation';

const DeleteArticle = ({ id }) => {
  const router = useRouter();
  const deleteArticle = async () => {
    const confirmed = confirm('Are you sure ?');

    if (confirmed) {
      await fetch(`http://localhost:3000/api/articles?id=${id}`, {
        method: 'DELETE',
      });
      router.push('/admin');
      //   window.location.reload();
    }
  };
  return (
    <div>
      {' '}
      <button
        onClick={deleteArticle}
        className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition'
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteArticle;
