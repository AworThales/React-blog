import people from "../../assets/people.jpg"
import "./write.scss";

export default function Write() {
  return (
    <div className='write'>
        <img className="writeImg" src={people} alt="People" />
      <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <span className="writeIcon"><ion-icon name="add-outline"></ion-icon></span>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input 
                    type="text" 
                    placeholder="Title" 
                    className="writeInput" 
                    autoFocus={true}
                />
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder="Tell your story...." 
                    className="writeInput writeText"
                ></textarea>
            </div>
            <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
