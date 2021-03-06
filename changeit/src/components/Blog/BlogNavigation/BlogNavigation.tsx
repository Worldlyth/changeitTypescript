import React, { SetStateAction, useEffect } from "react"
import {post} from "../Blog"
import { navigation } from "../Blog"
import "./blogNavigation.css"

interface BlogNavigationProps {
  posts: post[]
  setPosts: (param1: post[], param2?: post[]) => void
  navigation: navigation
  setNavigation: (value: SetStateAction<navigation>) => void
  setFilteredsPosts: (value: post[]) => void
}

const BlogNavigation: React.FC<BlogNavigationProps>= ({
  posts,
  navigation,
  setPosts,
  setNavigation,
  setFilteredsPosts,
  
}) => {
  const sortingOptions = [
    { value: "date", name: "by date", disabled: true },
    { value: "dateUp", name: "date ↑" },
    { value: "dateDown", name: "date ↓" },
    { value: "title", name: "by title", disabled: true },
    { value: "titleUp", name: "title ↑" },
    { value: "titleDown", name: "title ↓" },
  ]

  useEffect(() => {
    const sortedPosts = posts
    if (navigation.sorting === "dateUp") {
      sortedPosts.sort((a, b) => {
        return a.id - b.id
      })
    } else if (navigation.sorting === "dateDown") {
      sortedPosts.sort((a, b) => {
        return b.id - a.id
      })
    } else if (navigation.sorting === "titleUp") {
      sortedPosts.sort((a, b) => {
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
    } else if (navigation.sorting === "titleDown") {
      sortedPosts.sort((a, b) => {
        if (a.title < b.title) {
          return 1
        }
        if (a.title > b.title) {
          return -1
        }
        return 0
      })
    }
    setPosts([...posts], sortedPosts)
  }, [navigation.sorting])

  useEffect(() => {
    const filteredPosts = posts.filter((post) =>
      post.title.toString().toLowerCase().includes(navigation.filter)
    )
    setFilteredsPosts(filteredPosts)
  }, [navigation.filter, posts])

  const handleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNavigation({ ...navigation, sorting: e.target.value })
  }

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNavigation({ ...navigation, filter: e.target.value })
  }

  return (
    <div className="content__stories-navigation bg_yellow">
      <div className="stories__title">STORIES</div>

      <div className="stories__search">
        <div className="sort__title">
          <label htmlFor="filter">search:</label>
          <input
            className="search__input"
            type="search"
            id="filter"
            onChange={handleFilter}
            value={navigation.filter}
          />
        </div>
      </div>

      <div className="stories__sort">
        <div className="sort__title">sort:</div>

        <select
          className="stories__sort-button"
          onChange={handleSorting}
          value={navigation.sorting}
        >
          {sortingOptions.map((option) => (
            <option
              disabled={option.disabled}
              key={option.value}
              value={option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
        <div className="arrow"></div>
      </div>
    </div>
  )
}

export default BlogNavigation
