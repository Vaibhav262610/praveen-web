'use client';
import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

const AdminImage: React.FC = () => {
  const [publicId, setPublicId] = useState<string | null>(null);

  return (
    <div>
      {/* Cloudinary upload widget */}
      <CldUploadWidget
        uploadPreset='praveen-web' // Replace with your upload preset
        onUploadSuccess={(result) => {
          // Log the public ID and update the state
          console.log('Upload Success:', result?.info?.public_id);
          setPublicId(result?.info?.public_id || null);
        }}
      >
        {({ open }) => (
          <button
            onClick={() => open()}
            className='bg-blue-500 text-white px-4 py-2 rounded'
          >
            Upload an Image
          </button>
        )}
      </CldUploadWidget>

      {/* Display the uploaded image if publicId is available */}
      {publicId && (
        <CldImage
          width='960'
          height='600'
          src={`https://res.cloudinary.com/dfn0yfnmt/image/upload/${publicId}`} // Use the correct Cloudinary URL format
          sizes='100vw'
          alt='Uploaded Image'
        />
      )}
    </div>
  );
};

export default AdminImage;
