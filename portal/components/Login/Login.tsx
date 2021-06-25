import React from "react";
import styles from './Login.module.scss';
import LoginForm from "./LoginForm";
import {ILogin} from "../../Interfaces";


const Login: React.FC<ILogin> = props => {
    const {logIn, isValidAuth, errorText} = props;

    return (
        <section>
            <div className={styles.loginBox}>
                <div className={`${styles.subtitle}`}>Log in to Social</div>
                <LoginForm onSubmit={logIn} isValid={isValidAuth} errorText={errorText} />
            </div>
        </section>
    )
}

export default Login;