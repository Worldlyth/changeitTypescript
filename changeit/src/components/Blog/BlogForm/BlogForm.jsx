import React from "react"
import "./blogForm.css"

const BlogForm = ({ posts, setPosts }) => {
  const addPost = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const title = formData.get("title")
    const text = formData.get("text")

    const newPost = {
      title,
      text,
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
        rows="10"
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
