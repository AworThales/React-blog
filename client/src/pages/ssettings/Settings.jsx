import Sidebar from "../../components/sidebar/Sidebar";
import people from "../../assets/people.jpg";
import "./settings.scss";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingsUpdateTitle">Update Your Account</span>
            <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src={people} alt="People" />
              <span className="settingsPPIcon"><ion-icon name="person-circle-outline"></ion-icon></span>
              <label htmlFor="fileInput"></label>
              <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label>Username</label>
            <input type="text" placeholder="Thales" />
            <label>Email</label>
            <input type="email" placeholder="thales@gmail.com" />
            <label>Password</label>
            <input type="password"/>
            <button className="settingSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}
