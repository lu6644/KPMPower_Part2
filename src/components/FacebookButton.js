import React from 'react';
import facebookLogo from '../assets/Facebook_Logo_Primary.png';

function FacebookButton() {
    return (
        <button onClick={
            () => window.location.href = 'https://www.facebook.com'} className="facebook-button">
            <img src={facebookLogo} alt="Facebook Logo"/>
            <b>Facebook</b>
        </button>
    )
}

export default FacebookButton;