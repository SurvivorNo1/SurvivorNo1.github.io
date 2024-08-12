import React from 'react';
import filelist from '../constant/filelist';

const Blogs: React.FC = () => {
  const blogYears = Object.keys(filelist.blogs);
  blogYears.sort((a, b) => parseInt(a) - parseInt(b));
  return (
    <div>
      {blogYears.length === 0 ? (
        <p>No blogs available.</p>
      ) : (
        blogYears.map((year) => (
          <div key={year} className="mb-2">
            <h2 className="text-2xl font-bold mb-2">{year}</h2>
            <ul>
              {filelist.blogs[year].map((blog, index) => (
                <li key={index} className="">
                  <a href={blog.path} className="text-blue-500 hover:underline">
                    {blog.description || 'No description'}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Blogs;
