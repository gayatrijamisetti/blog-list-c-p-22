// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} blogData={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
