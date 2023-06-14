import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthAndDatabase';
import Login from './Login';
import CreateAccount from './CreateAccount';

export default function UserAccount() {

    const [errorMessage, setErrorMessage] = useState('');
    const [signIn, setSignIn] = useState(true);
    const [loading, setLoading] = useState(false);

    const {
        currentUser,
        handleCreateAccountForm,
        handleLogOut,
        handleLoginForm,
    } = useAuth();



    function loggedInComponent() {
        return (
            <>
                <p>
                    Entrou como: <i><b>{currentUser.email}</b></i></p>
                <button onClick={handleLogOut}>LogOut</button>
            </>
        );
    }

    function logInComponent() {
        return (
            <>
                <p>{errorMessage}</p>
                {signIn ? (
                    <Login
                        loading={loading}
                        handleLoginForm={(event) =>
                            handleLoginForm(event, setLoading, setErrorMessage)
                        } />
                ) : (
                    <CreateAccount
                        loading={loading}
                        handleCreateAccountForm={(event) =>
                            handleCreateAccountForm(event, setLoading, setErrorMessage)}
                    />)}
                {signIn ? <button onClick={() => setSignIn(false)}>Criar Conta</button> : <button onClick={() => setSignIn(true)}>Voltar a login</button>}
            </>
        );
    }

    return (
        <div>
            {currentUser ? loggedInComponent() : logInComponent()}
        </div>
    );
}
