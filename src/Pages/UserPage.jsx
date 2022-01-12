import React, {useContext} from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { logout }  from "../Hooks/FirebaseActions"
import { useHistory } from 'react-router-dom'
import "../Styles/UserPage.css"

const UserPage = ({ displayName }) => {

  const { user, color, nickName, setUser } = useContext(AppContext)
  const history = useHistory()

  const handleLogout = async () => {
    history.push('/')
    await logout();
    setUser({})
    window.location.reload(true);
  }

  return (
    <div className="UserPage">
      <div className="UserPage-top">
        <Link to="/home" className="UserPage-back">Back</Link>
        <Link to="/" className="UserPage-logout" onClick={() => { handleLogout() }} >
          Logout
        </Link>
      </div>
      <div className="UserPage-user-photo" style={{backgroundColor: color.hex}}>
        <img className="UserPage-photo"  src={user.photoURL}  alt={displayName} />
      </div>
      <div className="UserPage-user" style={{borderColor: color.hex}}>
        <h2 style={{backgroundColor: color.hex}} className="UserPage-nick">{nickName}</h2>
      </div>
     </div>
  );
};

export default UserPage;
