import React from 'react';
import { Icon } from '@iconify/react';





export const CrmIndicator = () => {
    return (
      <div>
          <div className="crm__indicator">
            
            <div className="crm__indicatorStatus">
                <div className="crm_circleState"></div>
                <div><Icon icon="akar-icons:chevron-down" className="crm__iconDownStatus"/></div>
                <div className='crm_fontIndicator'>
                      <div className='crm__ready'> Conectado </div>
                    <div className='crm_country'> Perú</div>
                </div>
                
            </div>

            <div className='crm__indicatorCard'>
                <div className='crm__card'>
                    <div className="crm_cardBlue">
                       
                        <div className="crm__textIndicatorLeft">
                             <div className="crm__fontNumberIndicator">15:00</div>
                             <div className="crm__fontTextIndicator">Minutos</div>

                        </div>
                        <div className="crm__iconIndicatorRight" > 
                            <div className="crm__circleIndicatorBlue"><Icon icon="ri:cup-line" className="crm__indicatorIcon"/></div>
                            <div className="crm__fontTextSub">Break</div>  

                        </div>
                     
                        
                    </div>
                    <div className="crm_cardRed">
                         <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="crm_cardYellow">
                         <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="crm_cardGreen">
                         <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="crm_cardBlack">
                         <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    <div className="crm_cardOrange">
                         <div>

                        </div>
                        <div>

                        </div>
                    </div>
                    
                </div>

            </div>

          </div>
      </div>
    )
}
