import React from 'react';
import { Icon } from '@iconify/react';







export const CrmInformation = () => {
    return (
        <div>
            <div className="crm__information">
            {/*   <div className="crm__infoMenu">
                <div className="crm__infoMenu1">
                    <div className="crm__menuActive">
                        <div><Icon icon="fluent:call-28-regular" /></div>
                        <div className="crm__fontButtonsMenu">Teléfonos</div>
                    </div>
                    <div className="crm__menuInactive">
                        <div><Icon icon="carbon:location-filled" /></div>
                        <div className="crm__fontButtonsMenu"> Direcciones </div>
                    </div>
                    <div className="crm__menuInactive">
                        <div><Icon icon="carbon:email" /></div>
                        <div className="crm__fontButtonsMenu"> Correos </div>
                    </div>
                </div>
              </div> */}

            <div className="crm__infoMenu">
                <ul className="crm__infoMenu1">
                    <li className="crm__menuInactive">
                    <div><Icon icon="fluent:call-28-regular" /></div>
                    <div className="crm__fontButtonsMenu">Teléfonos</div>
                    </li>

                    <li className="crm__menuInactive">

                    <div><Icon icon="carbon:location-filled" /></div>
                        <div className="crm__fontButtonsMenu"> Direcciones </div>
                    </li>

                    <li className="crm__menuInactive">
                    <div><Icon icon="carbon:email" /></div>
                        <div className="crm__fontButtonsMenu"> Correos </div>
                    </li>
                </ul>

            </div>



              <div className="crm__infoResults">
                  <div className="crm__resultText">
                  <div className="crm__circleCheck">
                  <Icon icon="akar-icons:check" className="crm_check"/>
                  </div>
                  <div className="crm__fontResults">
                      6 resultados
                  </div>
                  </div>
                  <div className="crm__space">
                 
                  </div>
                  <div className="crm__space">
               
                  </div>
                  
              </div>
              <div className="crm__infoCard">
                  <div className="crm__infoCardPersonal">
                      <div className="crm__menuTop">
                          <div className="crm__questionIconBlue">
                          <Icon icon="fluent:call-28-filled" className="crm__questionIconWhite" />
                          </div>
                          <div className="crm__CabecerasTitles1">%Contacto</div>
                          <div className="crm__CabecerasTitles1" >Tipo</div>
                          <div className="crm__CabecerasTitles1">Propietario</div>
                      </div>
                      <div className="crm__menu">
                      <div className="crm__CabecerasTitles1">958810418</div>
                          <div className="crm__cabecerasTop">
                              <div className="crm__CabecerasTitlesPercent">100%</div>
                              <div className="crm__100">
                                  {/* <div className="crm__100"></div> */}
                              </div>
                          </div>
                          <div className="crm__CabecerasTitles" >CEL</div>
                          <div className="crm__CabecerasTitles">Cliente(a)</div>
                      </div>
                      <div className="crm__menu">
                      <div className="crm__CabecerasTitles1">958810418</div>
                          <div className="crm__cabecerasTop" >
                              <div className="crm__CabecerasTitlesPercent">60%</div>
                              <div className="crm__lineCharge1">
                                  <div className="crm__60"></div>
                                  <div className="crm__40"></div>
                              </div>
                          </div>
                          <div className="crm__CabecerasTitles" >CEL</div>
                          <div className="crm__CabecerasTitles">Cliente(a)</div>
                      </div>
                      <div className="crm__menu">
                      <div className="crm__CabecerasTitles1">958810418</div>
                          <div className="crm__cabecerasTop" >
                              <div className="crm__CabecerasTitlesPercent">60%</div>
                              <div className="crm__lineCharge1">
                                  <div className="crm__60"></div>
                                  <div className="crm__40"></div>
                              </div>
                          </div>
                          <div className="crm__CabecerasTitles" >CEL</div>
                          <div className="crm__CabecerasTitles">Cliente(a)</div>
                      </div>
                      <div className="crm__menu">
                      <div className="crm__CabecerasTitles1">958810418</div>
                          <div className="crm__cabecerasTop" >
                              <div className="crm__CabecerasTitlesPercent" >60%</div>
                              <div className="crm__lineCharge1">
                                  <div className="crm__60"></div>
                                  <div className="crm__40"></div>
                              </div>
                          </div>
                          <div className="crm__CabecerasTitles" >CEL</div>
                          <div className="crm__CabecerasTitles">Cliente(a)</div>
                      </div>
                      <div className="crm__menu">
                      <div className="crm__CabecerasTitles1">932561487</div>
                          <div className="crm__cabecerasTop">
                              <div className="crm__CabecerasTitlesPercent">10%</div>
                              <div className="crm__lineCharge1">
                                  <div className="crm__10"></div>
                                  <div className="crm__90"></div>
                              </div>
                          </div>
                          <div className="crm__CabecerasTitles" >CEL</div>
                          <div className="crm__CabecerasTitles">Cliente(a)</div>
                      </div>
                      <div className="crm__menu">
                      <div className="crm__CabecerasTitles1">965231456</div>
                          <div className="crm__cabecerasTop" >
                              <div className="crm__CabecerasTitlesPercent">50%</div>
                              <div className="crm__lineCharge1">
                                  <div className="crm__50"></div>
                                  <div className="crm__50G"></div>
                              </div>
                          </div>
                          <div className="crm__CabecerasTitles" >CEL</div>
                          <div className="crm__CabecerasTitles">Cliente(a)</div>
                      </div>
                      <div className="crm__menu">
                      <div className="crm__CabecerasTitles1">965231456</div>
                          <div className="crm__cabecerasTop" >
                              <div className="crm__CabecerasTitlesPercent">50%</div>
                              <div className="crm__lineCharge1">
                                  <div className="crm__50"></div>
                                  <div className="crm__50G"></div>
                              </div>
                          </div>
                          <div className="crm__CabecerasTitles" >CEL</div>
                          <div className="crm__CabecerasTitles">Cliente(a)</div>
                      </div>

                      
                 
                     
                  </div>
                  
              </div>
             </div>
           
          
           
        </div>
    )
}
