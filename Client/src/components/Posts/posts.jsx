import Post from "../Post/post"
import "./posts.css"

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://i.pinimg.com/474x/04/bf/cc/04bfcc656863a469ac6ad726c3e8be0f.jpg"/>
      <Post img="https://i.pinimg.com/474x/6a/5a/8a/6a5a8a02ced7ec3f3fde1918e54b69aa.jpg" />
      <Post img="https://i.pinimg.com/474x/ea/6c/2c/ea6c2ceb8e541a52ecd5053921f9131a.jpg" />
      <Post img="https://i.pinimg.com/474x/5f/17/44/5f1744696261c3ebca5f0ea485d93d47.jpg" />
      <Post img="https://i.pinimg.com/474x/b8/22/ee/b822ee0f3b7b78d528bb10b023d3f092.jpg" />
      <Post img="https://i.pinimg.com/474x/c7/ae/3a/c7ae3a362d900b09d78f8d31afe8604c.jpg" />
    </div>
  )
}
