import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


export default class Banner extends Component {
    render() {
        return (
            <div>
                <h1>Ласкаво просимо !</h1>
                <div className="main-text">
                    <span>Вас вітає медична інформаційна система eOptics! З нашою допомогою ви зможете легко і швидко обрати потрібний заклад, 
                    ознайомитись з набором послуг, дізнатись необхідну інформацію, записатись на прийом, та багато іншого ! Доступ до системи можуть
                    мати тільки авторизовані користувачі, тому будь ласка створіть акаунт, якщо ви в нас вперше, або пройдіть процедуру авторизації, якщо
                    ви вже маєте акаунт, скориставшись посиланнями нижче.</span>
                </div>
                <div className="links-wrapper">
                    {/*<button className="buttonLink" >Sign Up</button>*/}
                    <Link to="/sign-in" className="buttonLink" >Sign Up</Link>
                    <Link to="/sign-up" className="buttonLink" >Log In</Link>
                </div>
            </div>
        );
    }
}