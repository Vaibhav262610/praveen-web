// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className='w-64 h-screen bg-gray-800/50 text-white p-6'>
      <h2 className='text-2xl mt-28 font-bold mb-6'>Admin Dashboard</h2>
      <nav>
        <ul>
          <Link href='#blogs'>
            <li className='mb-4'>
              <h1 className='text-lg hover:text-yellow-400'>Blogs</h1>
            </li>
          </Link>
          <Link href='#images'>
            <li className='mb-4'>
              <h1 className='text-lg hover:text-yellow-400'>Images</h1>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
