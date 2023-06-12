import './sidebar.scss';
import ai from '../../assets/ai.jpg';

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <span className="sidebarTitle">ABOUT ME</span>
      <img src={ai} alt="AI" />
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Iste voluptate, fugit explicabo dignissimos minus error.
        </p>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">React Js</li>
                <li className="sidebarListItem">Node Js</li>
                <li className="sidebarListItem">Vue Js</li>
                <li className="sidebarListItem">Vite Js</li>
                <li className="sidebarListItem">Typescript Js</li>
                <li className="sidebarListItem">Javascript</li>
            </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <a className='sidebarIcon' href="#"><ion-icon name="logo-facebook"></ion-icon></a>
        <a className='sidebarIcon' href="#"><ion-icon name="logo-instagram"></ion-icon></a>
        <a className='sidebarIcon' href="#"><ion-icon name="logo-twitter"></ion-icon></a>
        <a className='sidebarIcon' href="#"><ion-icon name="logo-youtube"></ion-icon></a>
        <a className='sidebarIcon' href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
        </div>
        </div>
    </div>
    
  )
}
