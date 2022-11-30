// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {title, description, publishedDate} = blogData

  return (
    <div className="item-container">
      <div className="items">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
      </div>
      <p className="date">{publishedDate}</p>
    </div>
  )
}

export default BlogItem
