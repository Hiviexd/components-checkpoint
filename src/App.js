import ProfilePhoto from "./Component/Profile/ProfilePhoto";
import Address from "./Component/Profile/Address";
import FullName from "./Component/Profile/FullName";
import "./App.css";

export default function App() {
  return (
    <div className="profile">
      <div className="profile-container">
        <h1 className="profile-text">Profile</h1>
      </div>

      <div className="profile-photo">
        <ProfilePhoto />
      </div>
      <div className="profile-info text">
        <div className="profile-name">
          <FullName />
        </div>
        <div className="profile-address">
          <Address />
        </div>
      </div>
    </div>
  );
}
