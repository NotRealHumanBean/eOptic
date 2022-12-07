import React, { Component } from "react";


export default class Filter extends Component {
    render() {
        return (
            <div className="filter-wrapper">
                <form>
                    <div className="firstLabel districts-select">
                        <p>Оберіть район</p>
                        <select class="custom-select mr-sm-2" id="districts">
                            <option selected>Вибрати...</option>
                            <option value="1">Сихів</option>
                            <option value="2">Франківський</option>
                            <option value="3">Левандівський</option>
                        </select>
                    </div>
                    <div className="firstLabel">
                        <p>Оберіть розмір</p>
                        <div className="radio-btn">
                            <input type="radio" id="big" name="optic_size"/>
                            <label for="html">Велика оптика</label><br></br>
                        </div>
                        <div className="radio-btn">
                            <input type="radio" id="small" name="optic_size"/>
                            <label for="html">Невелика оптика</label><br></br>
                        </div>
                        
                    </div>
                    
                    <div className="firstLabel">
                        <p>Наявність лікаря-оптометриста</p>
                        <div className="radio-btn">
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                            <label for="html">Так</label>
                        </div>
                        <div className="radio-btn">
                            <input type="radio" id="html" name="fav_language" value="HTML"/>
                            <label for="html">Ні</label>
                        </div>
                        
                    </div>
                </form>
                <div className="optics-result">
                    <div className="list-container">
                        <span>Вибрані вами оптики:</span>
                    </div>
                    <button>Знайти</button>
                </div>
            </div>
            
        );
    }
}