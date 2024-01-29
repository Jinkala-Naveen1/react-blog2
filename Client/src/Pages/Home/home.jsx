import Header from "../../components/Header/header"
import Posts from "../../components/Posts/posts"
import Sidebar from "../../components/Sidebar/sidebar"
import "./home.css"

export default function Home() {
  return (
    <>
    <Header/>
    <div className="home">
    <Posts/>
    <Sidebar/>
    </div>
    </>
  )
}
