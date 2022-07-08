import React from 'react';
import SignUpForm from './SignUpForm';

const Log = (props) => {
    const [signUpModal, setSignUpModal]= useState(props.signUp);
    const [signInModal, setSignInModal]= useState(props.signIn);

    const handleModals=(e)=>{
        if (e.target.id ==='register'){
            setSignInModal(false);
            setSignUpModal(true);}
            else if (e.target.id ==="login"){
                setSignUpModal(false);
                setSignInModal(true)
            }
        }
    
    return (
        <div className="connection-form">
             <div className="form-container">
                <ul>
                    <li onClick={handleMondals} id="register" className={signUpModal? "active-btn":null}>Inscription</li>
                    <li onClick={handleMondals} id="login"className={signInModal? "active-btn":null} >Connexion</li>
                </ul>
                {signUpModal && <SignUpForm/>}
                {signInModal && <SignInForm/>}
            </div>
        </div>
    );
};

export default Log;