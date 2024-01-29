import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/564x/84/9f/0d/849f0da6c876d62c5dba4f1b338cb0bd.jpg"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
          Life
          </li>
          <li className="sidebarListItem">
          Musi
          </li>
          <li className="sidebarListItem">
          Style
          </li>
          <li className="sidebarListItem">
          Sport
          </li>
          <li className="sidebarListItem">
          Tech
          </li>
          <li className="sidebarListItem">
          Cinema
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a href="https://www.facebook.com/navsaibrother"><i className="topIcon fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/_naveen_jinkala/"><i className="topIcon fab fa-instagram-square"></i></a>
        <a href="https://in.pinterest.com/naveenjinkala33/"><i className="topIcon fab fa-pinterest-square"></i></a>
        <a href="https://twitter.com/naveenjinkala33"><i className="topIcon fab fa-twitter-square"></i></a>
        </div>
      </div>
    </div>
  );
}