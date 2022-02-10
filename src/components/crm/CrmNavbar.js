import React from 'react';
import { Icon } from '@iconify/react';
import ejemplo from '../../styles/img/ejemplo.jpg';
import { CrmIndicator } from './CrmIndicator';
import { CrmCall } from './CrmCall';
import { CrmGestiones } from './CrmGestiones';
import { CrmInformation } from './CrmInformation';
import { CrmTipificaciones } from './CrmTipificaciones';
import { CrmChat } from './CrmChat';



export const CrmNavbar = () => {
    return (
        <div>
            <div className='crm__navbar'>
            <div className="crm__box">
                    <div className="container-3">
                         <span className="icon"><i class="fa fa-search"></i></span>
                         <input type="search" id="search" placeholder="Escribir aquí" />
                    </div>
                </div>


            <div className="crm__navbarGroup3">
                <Icon icon="healthicons:award-trophy" className="crm__trophy" />
                </div>
            <div className="crm__navbarGroup2">
                    <div>
                        <div><Icon icon="bi:bell-fill" className="crm__bellNotification" />  </div>
                        <div className="crm__CircleNotification"></div>
                    </div>
                
                </div>
                
                
                <div className="crm__navbarGroup1">
                   <div className="crm__navbarPic">
                   <div><img alt="" src={ejemplo} className="crm_Picprofile"/></div>
                   <div className="crm__Circleready"></div>
                   </div>
                    
                    <div className="crm__profileName">juniorme</div>
                    <div><Icon icon="akar-icons:chevron-down" className="crm__iconDown"/></div>
                </div>
               
                


            </div>
            <div className="crm__divison">
            <CrmIndicator />
            <div className="crm__article">
            <CrmGestiones />
            <CrmInformation />
            <CrmCall />
            </div>
            <div className="crm__DownBar">
                <CrmTipificaciones />
                <CrmChat />
            </div>
            </div>
            

        </div>
    )
}
