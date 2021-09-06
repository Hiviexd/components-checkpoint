import PF from './Component/Profile/ProfilePhoto'
import AD from './Component/Profile/Address'
import FN from './Component/Profile/FullName'
import './App.css'


function App() {
  return (
    <div className="profile">
      <h1 className="red">Profile</h1>
      
        <div className="profile-photo">
          <PF />
        </div>
        <div className="profile-info">
          <div className="profile-name">
            <FN />
          </div>
          <div className="profile-address">
          <AD />
          </div>
        </div>
    </div>
  );
}

export default App;