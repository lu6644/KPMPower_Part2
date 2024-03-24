import React from 'react';
import googleLogo from '../assets/google_logo.png';

function GoogleButton() {
    return (
        <button onClick={
            () => window.location.href = 'https://www.google.com'} class="google-button">
            <img src={googleLogo} alt="Google Logo"/>
            <b>Google</b>
        </button>
    )
}

export default GoogleButton;