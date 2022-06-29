import React, { useEffect, useState } from "react"
import "./blog.css"
import BlogForm from "./BlogForm/BlogForm"
import BlogNavigation from "./BlogNavigation/BlogNavigation"
import BlogPosts from "./BlogPosts/BlogPosts"

export const Blog = () => {
  const [posts, setPosts] = useState([])
  const [filteredPosts, setFilteredsPosts] = useState([])
  const [navigation, setNavigation] = useState({
    filter: "",
    sorting: "",
  })

  useEffect(() => {
    let isContain = false
    let posts = []

    const filterResult = {
      filter: navigation.filter,
      sorting: navigation.sorting,
      key: filteredPosts.length,
    }

    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i)
      let parsedItem = JSON.parse(key)
      if (
        parsedItem.filter === navigation.filter &&
        parsedItem.sorting === navigation.sorting &&
        parsedItem.key === filteredPosts.length
      ) {
        posts = JSON.parse(localStorage.getItem(key))
        isContain = true
      }
    }

    if (!isContain) {
      if (navigation.filter || navigation.sorting) {
        posts = filteredPosts
        localStorage.setItem(
          JSON.stringify(filterResult),
          JSON.stringify(posts)
        )
      }
    }
  }, [navigation.filter, navigation.sorting])

  return (
    <div className="blog" id="blog">
      <div className="blog-title">TELL US YOUR STORY</div>
      <div className="blog-content">
        <BlogForm posts={posts} setPosts={setPosts} />
        <BlogNavigation
          posts={posts}
          navigation={navigation}
          setNavigation={setNavigation}
          setPosts={setPosts}
          setFilteredsPosts={setFilteredsPosts}
        />
        <BlogPosts posts={filteredPosts} />
      </div>
    </div>
  )
}
