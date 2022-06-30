import React from "react"
import { post } from "../Blog"
import "./blogStories.css"

interface BlogPostsProps {
  posts: post[]
}

const BlogPosts: React.FC<BlogPostsProps> = ({ posts }) => {
  return (
    <div className="stories__blog">
      {posts.map((post) => (
        <div className="blog__post bg_pink" key={post.id}>
          <div className="post__title">
            <span>{post.title.toString()}</span>
            <div className="post__creation-date">{post.date}</div>
          </div>
          <div className="post__text">
            <span>{post.text.toString()}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BlogPosts
