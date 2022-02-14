import React from 'react';
import  user1  from '../../styles/img/user1.png';
import user2  from '../../styles/img/user2.png';
import user3  from '../../styles/img/user3.png';
import { Icon } from '@iconify/react';







export const CrmChat = () => {
    return (
        <div >

            <div className="crm__chat">
                <div className="crm__chatContainer">
                    <div className="crm__fontChat">
                                <div className="crm__fontCh">Chat</div>
                                <div className="crm__groupPictures">
                                    <div className="crm__pic1"><img src={user1} /></div>
                                    <div className="crm__pic2"><img src={user2} /></div>
                                    <div className="crm__pic3"><img src={user3} /></div>
                                </div>
               
                     </div>
                    <div className="crm__chatMessage">
                        <div className="crm__textMessage">Hola, como puedo ayudarte</div>
                        <div className="crm__textHour">14:31 PM</div>
                    </div>
                {/*     <div className="crm__inputGroup">
                <input
                className="crm__inputTip"
                type="text"
                placeholder="Tipificación 3"
                autoComplete="off"
                name="tipificacion"
                id="tipificacion"
                
                />
                </div> */}
               <div className="crm_chatBoxInput">
                       
                         <input type="text" id="chat" placeholder="Iniciar una conversación" />
                         <span className="icon"><Icon icon="bi:send" /></span>
                         
                    </div>
                </div>

            </div>
          
           
        </div>
    )
}
