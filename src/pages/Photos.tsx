import React from 'react';
import filelist from '../constant/filelist';

const Photos: React.FC = () => {
  const photos = Object.keys(filelist.photos);
  photos.sort((a, b) => parseInt(a) - parseInt(b));
  return (
    <div className='flex flex-col flex-1'>
      {photos.length === 0 ? (
        <p className="text-center text-gray-500">No photos available.</p>
      ) : (
        photos.map(year => (
          <div key={year} className="mb-2"> 
            <h2 className="text-2xl font-bold mb-2">{year}</h2>
            <div className="grid grid-cols-3 gap-4">
              {filelist.photos[year].map((photo, index) => (
                <div key={index} className="rounded-lg">
                  <a href={photo.path} target="_blank">
                  <img
                    src={photo.path}
                    alt={photo.description}
                    className="w-auto h-auto object-cover rounded-lg overflow-hidden" 
                  />
                  </a>
                  {photo.description && (
                    <p className="text-center mt-2 text-sm text-gray-700">{photo.description}</p> 
                  )}
                </div>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Photos;
