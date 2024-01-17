import React, { useState } from 'react';
import axios from 'axios';

const AddBlog = ({ showAlert }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleAddBlog = async (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      showAlert('Title and content cannot be empty!', 'danger');
      return;
    }

    try {
      const key = localStorage.getItem('apiKey');
      const secret = localStorage.getItem('apiSecret');

      const headers = {
        Authorization: `token ${key}:${secret}`,
        'Content-Type': 'application/json',
      };

      const data = {
        data: {
          title: title,
          content: content,
        },
      };

      await axios.post(
        'http://localhost:8000/api/method/bs_customisations.test_api.addblog',
        data,
        {
          headers: headers,
        }
      );

      showAlert(`Created Blog "${title}" successfully!`, 'success');
      setTitle('')
      setContent('')

      // Handle success, show a success message, or navigate somewhere
    } catch (error) {
      console.error('Error adding blog:', error);
      // Handle error, show an error message, etc.
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Blog</h2>
      <form onSubmit={handleAddBlog}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="10"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
