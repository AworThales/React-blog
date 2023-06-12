import people from "../../assets/people.jpg"
import "./singlePost.scss";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
            <img className="singlePostImg" src={people} alt="" />
            <h1 className="singlePostTitle">
                Career in Software Engineering is Soft.
                <a className='singlePostIcon' href="#"><ion-icon name="trash-outline"></ion-icon></a>
                <a className='singlePostIcon' href="#"><ion-icon name="create-outline"></ion-icon></a>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Thales</b></span>
                <span className="singlePostDate">2 hours ago</span>
            </div>
            <p className="singlePostDesc"> 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum pariatur ex provident corrupti debitis sequi,
                quas porro sunt reiciendis! Aut natus at maiores possimus 
                aspernatur corrupti velit voluptatibus eum. Reiciendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum pariatur ex provident corrupti debitis sequi,
                quas porro sunt reiciendis! Aut natus at maiores possimus 
                aspernatur corrupti velit voluptatibus eum. Reiciendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum pariatur ex provident corrupti debitis sequi,
                quas porro sunt reiciendis! Aut natus at maiores possimus 
                aspernatur corrupti velit voluptatibus eum. Reiciendis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum pariatur ex provident corrupti debitis sequi,
                quas porro sunt reiciendis! Aut natus at maiores possimus 
                aspernatur corrupti velit voluptatibus eum. Reiciendis.
            </p>
      </div>
    </div>
  )
}
