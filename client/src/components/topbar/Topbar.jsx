import { Link } from 'react-router-dom';
import people from '../../assets/people.jpg'
import './topbar.scss';

export default function Topbar() {
  const user = false;
  return (
    <div className='top'>
      <div className='topLeft'>
        
        <span className='socialIcon'> <ion-icon name="menu"></ion-icon></span>
        <span className='socialIcon'> <ion-icon name="close-outline"></ion-icon></span>
        <span className='socialIcon'> <ion-icon name="logo-facebook"></ion-icon></span>
        <span className='socialIcon'> <ion-icon name="logo-instagram"></ion-icon></span>
        <span className='socialIcon'> <ion-icon name="logo-twitter"></ion-icon></span>        
        <span className='socialIcon'> <ion-icon name="logo-youtube"></ion-icon> </span>   
        <span className='socialIcon'> <ion-icon name="logo-linkedin"></ion-icon></span>
      </div>
      <div className='topCenter'>
        <ul className="topList">
            <li className="topListItem">
            <Link className='link' to="/">Home</Link>
            </li>
            <li className="topListItem"><Link className='link' to="/about">About</Link></li>
            <li className="topListItem"><Link className='link' to="/contact">Contact</Link></li>
            <li className="topListItem"><Link className='link' to="/write">Write</Link></li>
            <li className="topListItem">{user && "Logout"}</li>
        </ul>
      </div>
      <div className='topRight'>
        {
          user ? (
            <img className='topImg' src={people} alt="Image" />

          ) : (
            <ul className="topList">
              <li className="topListItem"><Link className='link' to="/login">Login</Link></li>
              <li className="topListItem"><Link className='link' to="/register">Register</Link></li>
            </ul>
          )
        }
       <span  className='topSearchIcon'> <ion-icon name="search-outline"></ion-icon></span>
      </div>
    </div>
  )
}
