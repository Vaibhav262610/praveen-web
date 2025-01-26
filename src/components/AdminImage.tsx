/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { CldUploadWidget, CldImage } from 'next-cloudinary';

// Define your callback function to handle successful uploads
const handleUploadSuccess = (result: any) => {
  console.log('Upload Success:', result?.info?.public_id);
  // You can set the public ID or handle the result as needed
  return result?.info?.public_id || null;
};

const AdminImage: React.FC = () => {
  const [publicId, setPublicId] = useState<string | null>(null);

  return (
    <div>
      {/* Cloudinary upload widget */}
      <CldUploadWidget
        uploadPreset='praveen-web' // Replace with your upload preset
        onSuccess={(result: any) => {
          setPublicId(handleUploadSuccess(result));
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
