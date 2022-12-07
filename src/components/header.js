import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Account from "./account";
import Filter from "./filter";

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="header-wrapper">
                    <div className="menu-element">Фільтр</div>
                    <div className="menu-element">Оптики</div>
                    <div className="menu-element">Особистий кабінет</div>
                </div>
               <Filter filter={Filter} />
                 {/*<Account account={Account} />*/}
            </div>
            
        );
    }
}