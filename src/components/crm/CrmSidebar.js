import React from 'react';
import { Icon } from '@iconify/react';


export const CrmSidebar = () => {
    return (
        <div>
            <div className='crm__sidebarContainer'>
                <div className="crm__sidebar1">
                    <div className="crm__circle">
                   
                    </div>
                </div>
                <div className="crm__sidebar2">
                    <div className="crm__Boxinactive"> <Icon icon="ph:suitcase" className="crm__inactive"/></div>
                    <div className="crm__Boxinactive"> <Icon icon="feather:bar-chart" className="crm__inactive" /></div>
                    <div className="crm__Boxinactive"><Icon icon="carbon:calendar" className="crm__inactive" /></div>
                    <div className="crm__Boxinactive"> <Icon icon="bx:bxs-pencil" className="crm__inactive" /></div>
                    <div className="crm__Boxinactive"> <Icon icon="ant-design:message-outlined" className="crm__inactive"/></div>
                </div>
                <div className="crm__sidebar3">
                    <div className="crm__Boxinactive"><Icon icon="iconoir:bell" className="crm__inactive"/></div>
                    <div className="crm__Boxinactive"><Icon icon="octicon:gear-24" className="crm__inactive"/>
                </div>
                </div>
                <div className="crm__sidebar4">
                     <div className="crm__Boxinactive"><Icon icon="ant-design:question-circle-outlined" className="crm__inactive" /></div>
                </div>
            </div>
        </div>
    )
}
