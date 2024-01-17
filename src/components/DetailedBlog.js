// import React from 'react';
// import { useParams } from 'react-router-dom';

// const DetailedBlog = ({ blogs }) => {
//   const { id } = useParams();

//   // Find the blog based on the index from the URL
//   const blog = blogs[parseInt(id)];

//   return (
//     <div className="container mt-4">
//       {blog && (
//         <div className="card">
//           <div className="card-body">
//             <h2 className="card-title">{blog.title}</h2>
//             <p className="card-text">{blog.content}</p>
//             <p className="card-text">
//               <small className="text-muted">Created by: {blog.owner}</small>
//             </p>
//             <p className="card-text">
//               <small className="text-muted">Created at: {blog.creation}</small>
//             </p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DetailedBlog;

import React from 'react';
import { useLocation } from 'react-router-dom';

const DetailedBlog = () => {
  const location = useLocation();
  const { blog } = location.state;

  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">{blog.title}</h2>
          <p className="card-text">{blog.content}</p>
          <p className="card-text">
            <small className="text-muted">Created by: {blog.owner}</small>
          </p>
          <p className="card-text">
            <small className="text-muted">Created at: {blog.creation}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailedBlog;
