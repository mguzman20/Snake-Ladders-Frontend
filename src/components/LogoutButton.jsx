import {useAuth0} from '@auth0/auth0-react';
import "./NavBar.css";
import Profile from '../components/Profile';

const LogoutButton = () => {
    const {logout, isAuthenticated} = useAuth0();

    return (
        isAuthenticated && (
            <div class="row">
            <Profile />
            <button onClick={() => logout()}
            className="button-green">
                Sign Out
            </button>
            </div>
            
        )
    )
}

export default LogoutButton;