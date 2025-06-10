import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import MySpinner from '../components/MySpinner';

const Login: React.FC = () => {
    const { loginWithRedirect, isAuthenticated, isLoading, user } = useAuth0();
    const navigate = useNavigate();

    function handleClick() {
        isLoading ? (
            console.log("Loading...")
        ) : isAuthenticated ? (
            navigate("/home")
        ) : loginWithRedirect();
    }

    return (
        <div className='App'>
            {isLoading ? (
                <MySpinner />
            ) : (
                <Button variant='outline-primary' onClick={handleClick}>
                    Login
                </Button>
            )}
        </div>
    );
};

export default Login;