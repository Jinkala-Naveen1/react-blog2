import SinglePost from "../../components/SinglePost/singlepost"
import Sidebar from "../../components/Sidebar/sidebar"
import "./single.css"
export default function single() {
  return (
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
  )
}
