// components/Content.tsx
const Content: React.FC = () => {
  return (
    <div className='flex-1 p-6'>
      <section id='about-me' className='mb-8'>
        <h3 className='text-2xl font-bold mb-4'>About Me</h3>
        <p className='text-lg'>
          This is the section where admin can add personal details.
        </p>
      </section>

      <section id='blogs' className='mb-8'>
        <h3 className='text-2xl font-bold mb-4'>Blogs</h3>
        <p className='text-lg'>
          This is the section where admin can manage blogs.
        </p>
      </section>

      <section id='images' className='mb-8'>
        <h3 className='text-2xl font-bold mb-4'>Images</h3>
        <p className='text-lg'>
          This is the section where admin can upload and view images.
        </p>
      </section>
    </div>
  );
};

export default Content;
