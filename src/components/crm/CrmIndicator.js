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
                           {/*   <div className="crm__fontTextIndicator">Minutos</div> */}

                        </div>
                        <div className="crm__iconIndicatorRight" > 
                            <div className="crm__circleIndicatorBlue"><Icon icon="ri:cup-line" className="crm__indicatorIcon"/></div>
                          {/*   <div className="crm__fontTextSub">Break</div>  */} 

                        </div>
                     
                        
                    </div>
                    <div className="crm_cardRed">
                    <div className="crm__textIndicatorLeft">
                             <div className="crm__fontNumberIndicator">50:00</div>
                           {/*   <div className="crm__fontTextIndicator">Minutos</div> */}

                        </div>
                        <div className="crm__iconIndicatorRight" > 
                            <div className="crm__circleIndicatorRed"><Icon icon="ri:cup-line" className="crm__indicatorIcon"/></div>
                          {/*   <div className="crm__fontTextSub">Break</div>  */} 

                        </div>
                    </div>
                    <div className="crm_cardYellow">
                    <div className="crm__textIndicatorLeft">
                             <div className="crm__fontNumberIndicatorBlue">05:00</div>
                           {/*   <div className="crm__fontTextIndicator">Minutos</div> */}

                        </div>
                        <div className="crm__iconIndicatorRight" > 
                            <div className="crm__circleIndicatorYellow"><Icon icon="ri:cup-line" className="crm__indicatorIconBlue"/></div>
                          {/*   <div className="crm__fontTextSub">Break</div>  */} 

                        </div>
                    </div>
                    <div className="crm_cardGreen">
                    <div className="crm__textIndicatorLeft">
                             <div className="crm__fontNumberIndicator">01:35</div>
                           {/*   <div className="crm__fontTextIndicator">Minutos</div> */}

                        </div>
                        <div className="crm__iconIndicatorRight" > 
                            <div className="crm__circleIndicatorGreen"><Icon icon="ri:cup-line" className="crm__indicatorIcon"/></div>
                          {/*   <div className="crm__fontTextSub">Break</div>  */} 

                        </div>
                    </div>
                    <div className="crm_cardBlack">
                    <div className="crm__textIndicatorLeft">
                             <div className="crm__fontNumberIndicator">S/.50</div>
                           {/*   <div className="crm__fontTextIndicator">Minutos</div> */}

                        </div>
                        <div className="crm__iconIndicatorRight" > 
                            <div className="crm__circleIndicatorBlack"><Icon icon="ri:cup-line" className="crm__indicatorIcon"/></div>
                          {/*   <div className="crm__fontTextSub">Break</div>  */} 

                        </div>
                    </div>
                    <div className="crm_cardOrange">
                    <div className="crm__textIndicatorLeft">
                             <div className="crm__fontNumberIndicatorBlue">1175</div>
                           {/*   <div className="crm__fontTextIndicator">Minutos</div> */}

                        </div>
                        <div className="crm__iconIndicatorRight" > 
                            <div className="crm__circleIndicatorOrange"><Icon icon="ri:cup-line" className="crm__indicatorIconBlue"/></div>
                          {/*   <div className="crm__fontTextSub">Break</div>  */} 

                        </div>
                    </div>
                    
                </div>

            </div>

          </div>
      </div>
    )
}
