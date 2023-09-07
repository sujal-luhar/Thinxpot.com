import React, { useState } from 'react';

function PostDescription({ description }) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className="font-sans mt-6 tracking-wide text-md subpixel-antialiased width-auto font-extralight text-[#20354b] flex-shrink">
      {showFullDescription ? (
        <p>{description}</p>
      ) : (
        <p>
          {description.length > 150
            ? description.slice(0, 150) + '...'
            : description}
        </p>
      )}
      {description.length > 150 && (
        <button onClick={toggleDescription} className='text-gray-600 underline'>
          {showFullDescription ? 'Read Less' : 'Read More'}
        </button>
      )}
    </div>
  );
}

export default PostDescription;
