import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="post-list">
      <h2>Posts</h2>
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <h3>{post.author}</h3>
            <p>{post.content}</p>
            <p className="timestamp">{new Date(post.createdAt).toLocaleString()}</p>
          </div>
        ))
      ) : (
        <p>No posts available</p>
      )}
    </div>
  );
}

export default PostList;
