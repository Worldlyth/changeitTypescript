import React from "react"
import "./blogStories.css"

const BlogPosts = ({ posts }) => {
  return (
    <div className="stories__blog">
      {posts.map((post) => (
        <div className="blog__post bg_pink" key={post.id}>
          <div className="post__title">
            {post.title}
            <div className="post__creation-date">{post.date}</div>
          </div>
          <div className="post__text">{post.text}</div>
        </div>
      ))}
    </div>
  )
}

export default BlogPosts
