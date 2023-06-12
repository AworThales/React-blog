import ai from '../../assets/ai.jpg';
import './post.scss';

export default function post() {
  return (
    <div className='post'>
        <img className='postImg' src={ai} alt="AI" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">React JS</span>
                <span className="postCat">Vue JS</span>
            </div>
            <span className="postTitle">
                Career in Software Engineering is Soft 
            </span>
            <hr />
            <span className="postDate">2 hours ago</span>
        </div>
        <p className='postDesc'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptates, facere in? Illo asperiores earum distinctio quod, 
            amet assumenda praesentium debitis ab aperiam? Lorem, ipsum.
            Ad nemo qui tempore explicabo possimus debitis natus.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptates, facere in? Illo asperiores earum distinctio quod, 
            amet assumenda praesentium debitis ab aperiam? Lorem, ipsum.
            Ad nemo qui tempore explicabo possimus debitis natus.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptates, facere in? Illo asperiores earum distinctio quod, 
            amet assumenda praesentium debitis ab aperiam? Lorem, ipsum.
            Ad nemo qui tempore explicabo possimus debitis natus.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Voluptates, facere in? Illo asperiores earum distinctio quod, 
            amet assumenda praesentium debitis ab aperiam? Lorem, ipsum.
            Ad nemo qui tempore explicabo possimus debitis natus.
        </p>
    </div>
  )
}
