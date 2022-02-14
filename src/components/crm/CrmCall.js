import React from 'react';
import { Icon } from '@iconify/react';
import llamada  from '../../styles/img/llamada.png';










export const CrmCall = () => {
    return (
        <div>
           
           <div className="crm__call">
              <div className="crm_callContainer">
              <div className="crm_callContainer2">
              <input
                className="crm__input"
                type="text"
                placeholder="9xxxxxxx"
                autoComplete="off"
                name="number"
                id="number"
                
                />
              </div>
                <div className="crm__buttonsCall">
                  <div className="crm_callContainer1">
                  <div className="crm__buttonSuccess">
                     
                      <div><Icon icon="fluent:call-28-filled"  className="crm__buttonIcon" /></div>
                      
                      
                  </div>
                  <div className="crm__buttonHangUp">
                     
                      <div><Icon icon="fluent:call-end-24-filled" className="crm__buttonIcon" /></div>
                      
                      
                  </div>
                  <div className="crm__buttonTransfer" >
                     
                      <div><Icon icon="icon-park-outline:transfer-data" className="crm__buttonIcon1" /></div>
                      
                      
                  </div>
                  </div>
               </div>

               <div className="crm__callFonts">
                  <div className="crm__callTitle">
                    Historial de llamadas
                  </div>
                  <div className="crm__callSubtitle">
                    Recientes
                    </div>
               </div>


              <div className="crm__history">
                <div className="crm_Lost">
                  <div className="crm__callLost">
                  <Icon icon="akar-icons:arrow-down" className="crm__downIconLost" />
                  </div>
                  <div className="crm__textNumber">
                    <div className="crm__callNumber">9925623453</div>
                    <div className="crm__description">
                      27 febrero 2022,  13:30 PM
                      <div className="crm__buttonExclamation">
                      <Icon icon="bi:exclamation-lg"  className="crm__exclamation"/>
                      </div>
                      </div>
                  </div>
                </div>

                <div className="crm_Incoming">
                  <div className="crm__callIncoming">
                  <Icon icon="akar-icons:arrow-up" className="crm__downIconIncoming" />
                  </div>
                  <div className="crm__textNumber">
                    <div className="crm__callNumber1">9925623453</div>
                    <div className="crm__description">
                      27 febrero 2022,  13:30 PM
                      <div className="crm__buttonExclamation">
                      <Icon icon="bi:exclamation-lg"  className="crm__exclamation"/>
                      </div>
                      </div>
                  </div>
                </div>
              
                <div className="crm_Lost">
                  <div className="crm__callLost">
                  <Icon icon="akar-icons:arrow-down" className="crm__downIconLost" />
                  </div>
                  <div className="crm__textNumber">
                    <div className="crm__callNumber">9925623453</div>
                    <div className="crm__description">
                      27 febrero 2022,  13:30 PM
                      <div className="crm__buttonExclamation">
                      <Icon icon="bi:exclamation-lg"  className="crm__exclamation"/>
                      </div>
                      </div>
                  </div>
                </div>

                <div className="crm_Incoming">
                  <div className="crm__callIncoming">
                  <Icon icon="akar-icons:arrow-up" className="crm__downIconIncoming" />
                  </div>
                  <div className="crm__textNumber">
                    <div className="crm__callNumber1">9925623453</div>
                    <div className="crm__description">
                      27 febrero 2022,  13:30 PM
                      <div className="crm__buttonExclamation">
                      <Icon icon="bi:exclamation-lg"  className="crm__exclamation"/>
                      </div>
                      </div>
                  </div>
                </div>


                <div className="crm_Incoming">
                  <div className="crm__callIncoming">
                  <Icon icon="akar-icons:arrow-up" className="crm__downIconIncoming" />
                  </div>
                  <div className="crm__textNumber">
                    <div className="crm__callNumber1">9925623453</div>
                    <div className="crm__description">
                      27 febrero 2022,  13:30 PM
                      <div className="crm__buttonExclamation">
                      <Icon icon="bi:exclamation-lg"  className="crm__exclamation"/>
                      </div>
                      </div>
                  </div>
                </div>

                <div className="crm_Incoming">
                  <div className="crm__callIncoming">
                  <Icon icon="akar-icons:arrow-up" className="crm__downIconIncoming" />
                  </div>
                  <div className="crm__textNumber">
                    <div className="crm__callNumber1">9925623453</div>
                    <div className="crm__description">
                      27 febrero 2022,  13:30 PM
                      <div className="crm__buttonExclamation">
                      <Icon icon="bi:exclamation-lg"  className="crm__exclamation"/>
                      </div>
                      </div>
                  </div>
                </div>

                <div className="crm_Lost">
                  <div className="crm__callLost">
                  <Icon icon="akar-icons:arrow-down" className="crm__downIconLost" />
                  </div>
                  <div className="crm__textNumber">
                    <div className="crm__callNumber">9925623453</div>
                    <div className="crm__description">
                      27 febrero 2022,  13:30 PM
                      <div className="crm__buttonExclamation">
                      <Icon icon="bi:exclamation-lg"  className="crm__exclamation"/>
                      </div>
                      </div>
                  </div>
                </div>

                </div>

              </div>
            
          </div>
           
           
        </div>
    )
}
