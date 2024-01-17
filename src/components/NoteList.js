
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const NotesList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const key = localStorage.getItem('apiKey');
        const secret = localStorage.getItem('apiSecret');

        const headers = {
          Authorization: `token ${key}:${secret}`,
          'Content-Type': 'application/json',
        };

        const response = await axios.get('http://localhost:8000/api/method/bs_customisations.test_api.listnotes', {
          headers: headers,
        });

        const formattedBlogs = response.data.blogs.map(blog => {
          // Format the 'creation' timestamp to exclude seconds
          const formattedDate = new Date(blog.creation).toLocaleString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          });
          return { ...blog, creation: formattedDate };
        });

        setBlogs(formattedBlogs);
        
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  const convertToSlug = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  };

  // Function to truncate content
  const truncateContent = (content, maxLength) => {
    if (content.length <= maxLength) {
      return content;
    }
    return `${content.substring(0, maxLength)}...`;
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Blogs</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {blogs.map((blog, index) => (
          <div key={index} className="col">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{truncateContent(blog.content, 150)}</p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Created by: {blog.owner}</small>
                <small className="text-muted float-end">Created at: {blog.creation}</small>
              </div>
              <div className="card-footer">
                <Link to={`/blog/${convertToSlug(blog.title)}`} state={{'blog':blog} } className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesList;
