import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Glasses from '../trl(3).png';

export default class Banner extends Component {
    render() {
        return (
            <div className="starter">
                <div className="logo">
                    <img src={Glasses} alt="Logo" />
                    <span className="logo-text">eOptics</span>
                </div>
                <div className="main-text">
                    <h1>Ласкаво просимо !</h1>
                    <span>Вас вітає медична інформаційна система eOptics! З нашою допомогою ви зможете легко і швидко обрати потрібний заклад, 
                    ознайомитись з набором послуг, дізнатись необхідну інформацію, записатись на прийом, та багато іншого ! Доступ до системи можуть
                    мати тільки авторизовані користувачі, тому будь ласка створіть акаунт, якщо ви в нас вперше, або пройдіть процедуру авторизації, якщо
                    ви вже маєте акаунт, скориставшись посиланнями нижче.</span>
                    <div className="links-wrapper">
                        <Link to="/sign-in" className="buttonLink" >Log In</Link>
                        <Link to="/sign-up" className="buttonLink" >Sign Up</Link>
                    </div>
                </div>
                
            </div>
        );
    }
}