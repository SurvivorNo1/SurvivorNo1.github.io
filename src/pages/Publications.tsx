import React from 'react';
import filelist from '../constant/filelist';
import Article from '../tools/Article';

const Publications: React.FC = () => {
  const publicationYears = Object.keys(filelist.publications);
  publicationYears.sort((a, b) => parseInt(a) - parseInt(b));


  return (
    <div>
      {publicationYears.length === 0 ? (
        <p>No publications available.</p>
      ) : (
        publicationYears.map(year => (
          <div key={year} className='mb-2'>
            <h2 className="text-2xl font-bold mb-2">{year}</h2>
            <ul>
              {filelist.publications[year].map((publication, index) => (
                <li key={index}>
                  <Article jsonpath={publication.path} />
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  )
};

export default Publications;
