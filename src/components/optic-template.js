import React, { Component } from "react";
import image1 from '../doctor11.jpg';
import image2 from '../doctor2.jpg';
import image3 from '../dc.webp';
import item from '../item2.jpg';
import Modal from "./ModalWindow.js";
import {useState} from 'react';


let stable = "Not there";

function here() {
    console.log("DONE")
     {/*document.getElementsByClassName("second")[0].classList.add('hidden');
    export default class OpticTemp extends Component
const [modalActive, setModalActive] = useState(true);*/}


}

export default class OpticTemp extends Component{
    state = {
        show: false
      };
      showModal = e => {
        this.setState({
          show: !this.state.show
        });
      };
    render() {      
      return (
        <div className="optic-wrapper">
            <div className="banner"><span className="main-title">ЛЮКСОПТИКА</span></div>
            <div className="info-text">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
             totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo
              enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione 
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed 
              quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, 
              quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum 
              iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
               nulla pariatur?"</div>
            <div className="prof-container">
                <div className="prof-title-row"><span className="prof-title">Наші професіонали</span></div>
                <div className="prof-card-container">
                    <div className="prof-card">
                        <div><img src= {image1} className="d-image"/></div>
                        <div>
                            <span className="card-title">Петренко Іван Леонідович</span>
                            <span className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                 dolore magna aliqua. At lectus urna duis convallis. Dui ut ornare lectus sit amet est. Egestas erat imperdiet
                                 sed euismod nisi porta lorem mollis. Tempor orci eu lobortis elementum nibh. Nunc consequat interdum varius sit
                                 amet mattis vulputate enim nulla. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Ultrices eros
                                 in cursus turpis. Risus nullam eget felis eget. Nunc faucibus a pellentesque sit amet porttitor eget dolor.
                            </span>
                        </div>
                        <div><button onClick={e => {this.showModal();}}class="visit">Записатись</button></div>
                    </div>
                    <div className="prof-card">
                        <div><img src= {image2} className="d-image"/></div>
                        <div>
                            <span className="card-title">Дорошенко Оксана Дмитрівна</span>
                            <span className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                 dolore magna aliqua. At lectus urna duis convallis. Dui ut ornare lectus sit amet est. Egestas erat imperdiet
                                 sed euismod nisi porta lorem mollis. Tempor orci eu lobortis elementum nibh. Nunc consequat interdum varius sit
                                 amet mattis vulputate enim nulla. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Ultrices eros
                                 in cursus turpis. Risus nullam eget felis eget. Nunc faucibus a pellentesque sit amet porttitor eget dolor.
                            </span>
                        </div>
                        <div><button class="visit">Записатись</button></div>
                    </div>
                    <div className="prof-card">
                        <div><img src= {image3} className="d-image image-3"/></div>
                        <div>
                            <span className="card-title">Коваль Дмитро Богданович</span>
                            <span className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                                 dolore magna aliqua. At lectus urna duis convallis. Dui ut ornare lectus sit amet est. Egestas erat imperdiet
                                 sed euismod nisi porta lorem mollis. Tempor orci eu lobortis elementum nibh. Nunc consequat interdum varius sit
                                 amet mattis vulputate enim nulla. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Ultrices eros
                                 in cursus turpis. Risus nullam eget felis eget. Nunc faucibus a pellentesque sit amet porttitor eget dolor.
                            </span>
                        </div>
                        <div><button class="visit">Записатись</button></div>
                    </div>
                </div>
            </div>
            <Modal onClose={this.showModal} show={this.state.show}>
                <p className="modal-title">Записатись на прийом</p>
                <div className="modal-wrapper">
                    <div className="first-column">
                        <p className="modal-text">Користувач: Test User</p>
                        <div className="modal-input-container">
                            <p className="modal-text">Вкажіть свій номер телефону</p>
                            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                        </div>
                        <div className="modal-input-container">
                            <p className="modal-text">Вкажіть час у проміжку між 09:00 - 18:00</p>
                            <input type="time" id="appt" name="appt" min="09:00" max="18:00" required/>
                        </div>
                    </div>
                    <div className="second-column">
                        <button>Надіслати</button>
                        <button>Закрити</button>
                    </div>
                </div>
            
            </Modal>
            <div className="prof-container">
                <div className="prof-title-row">
                    <span className="prof-title">Наші продукти</span>
                </div>
                <div className="link-container">
                        <ul className="links-list">
                            <li>Контактні лінзи</li>
                            <li className="underline">Сонцезахисні окуляри</li>
                            <li>Оправи</li>
                        </ul>
                </div>
                <div className="items-container">
                    <div className="items-row">
                        <div className="item container-1">
                            <div className="flipper">
                                <div className="front">
                                    <img src= {item} className="item-image"/>
                                </div>
                                <div className="back">
                                    <p>Polaroid X Sunglasses</p>
                                    <button>Замовити</button>
                                </div>
                            </div>
                            
                        </div>
                        <div className="item container-2">
                            <div className="flipper">
                                <div className="front">
                                    <img src= {item} className="item-image"/>
                                </div>
                                <div className="back">Hello</div>
                            </div>
                            
                        </div>
                        <div className="item container-3">
                            <div className="flipper">
                                <div className="front">
                                    <img src= {item} className="item-image"/>
                                </div>
                                <div className="back">Hello</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="items-row">
                    <div className="item container-4">
                            <div className="flipper">
                                <div className="front">
                                    <img src= {item} className="item-image"/>
                                </div>
                                <div className="back">Hello</div>
                            </div>
                            
                        </div>
                        <div className="item container-5">
                            <div className="flipper">
                                <div className="front">
                                    <img src= {item} className="item-image"/>
                                </div>
                                <div className="back">Hello</div>
                            </div>
                            
                        </div>
                        <div className="item container-6">
                            <div className="flipper">
                                <div className="front">
                                    <img src= {item} className="item-image"/>
                                </div>
                                <div className="back">Hello</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
      );
    }
 }
