import React from "react"
import {post} from '../Blog' 
import "./blogForm.css"

interface BlogFormProps {
  posts: post[],
  setPosts: (value: post[]) => void
}

const BlogForm: React.FC<BlogFormProps> = ({ posts, setPosts }) => {
  const addPost = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form:HTMLFormElement = e.currentTarget
    const formData:FormData = new FormData(form)
    const title:FormDataEntryValue = formData.get("title")!
    const text:FormDataEntryValue = formData.get("text")!

    const newPost = {
      title: title,
      text: text,
      date: new Date().toLocaleString(),
      id: Date.now(),
    }

    setPosts([...posts, newPost])
    form.reset()
  }

  return (
    <form className="form__input" id="blogForm" onSubmit={addPost}>
      <label htmlFor="title" className="form__title">
        Title:
      </label>
      <input
        type="text"
        placeholder="Title"
        className="form__text"
        name="title"
        id="title"
      />

      <label htmlFor="text" className="form__title">
        Your story:
      </label>
      <textarea
        placeholder="Your story"
        className="form__text"
        rows={10}
        name="text"
        id="text"
      />

      <button type="submit" className="feeback__button bg_blue">
        Tell your story
      </button>
    </form>
  )
}

export default BlogForm
