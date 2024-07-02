import {useAuth0} from '@auth0/auth0-react';
import "./Button.css";
// https://auth0.com/docs/quickstart/spa/react/01-login
const LoginButton = () => {

    return (
        
            <button onClick={() => loginWithRedirect()} 
            className="button-green">
                Iniciar Sesión
            </button>
        
    )
}

export default LoginButton;