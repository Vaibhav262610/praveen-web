'use client';
import { CldImage, CldUploadWidget } from 'next-cloudinary';
import { useState } from 'react';

export default function AdminImage() {
  const [publicId, setPublicId] = useState('');

  return (
    <div className='flex flex-col items-center space-y-4'>
      {/* Display the uploaded image */}
      {publicId && (
        <CldImage
          src={publicId}
          alt='Uploaded Image'
          width={330}
          height={180}
          className='rounded-lg shadow-md'
        />
      )}

      {/* Upload button */}
      <CldUploadWidget
        uploadPreset='praveen' // Replace with your upload preset
        onUpload={(info) => {
          console.log(info); // Debug upload details
          if (info.event === 'success') {
            setPublicId(info.info.public_id);
          }
        }}
      >
        {({ open }) => (
          <button
            className='bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transform hover:scale-105 transition duration-300'
            onClick={() => open()}
          >
            Upload an Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}
