import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../auth/AuthContext";

function UserCheck() {
    const {token} = useContext(AuthContext);
    const [status, setStatus] = useState(null);

    const config = {
        'method': 'get',
        'url': `${import.meta.env.VITE_BACKEND_URL}/user`,
        'headers': {
            'Authorization': `Bearer ${token}`
        }
    }

    useEffect(() => {
        axios(config).then((response) => {
            console.log("Token correcto");
            console.log(response);
            console.log(response.status);
            setStatus(response.status)
        }).catch((error) => {
            console.log("Token incorrecto");
            console.log(error);
            setStatus(error.message)
        })
    }, [token])

    return (
        <div>{status}</div>
    );
}

export default UserCheck;