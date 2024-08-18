import React from 'react';

const Blog: React.FC<{ htmlPath: string, blogName: string }> = ({ htmlPath, blogName }) => {
    const handleClick = () => {
        window.open(htmlPath, '_blank');
    };
    return (
        <div>
            <p onClick={handleClick} style={{ cursor: 'pointer', textDecoration: 'underline' }} className='text-blue-500'> {blogName}</p>
        </div>
    );
};

export default Blog;
